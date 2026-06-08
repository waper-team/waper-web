import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import { MongoClient, ObjectId } from 'mongodb'
import process from 'node:process'

dotenv.config()

const app = express()
const port = process.env.PORT || 3001
const mongoUri = process.env.MONGODB_URI
const dbName = process.env.MONGODB_DB_NAME || 'WaperDB'

if (!mongoUri) {
  throw new Error('Missing MONGODB_URI in .env')
}

const client = new MongoClient(mongoUri)

app.use(cors({ origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173' }))
app.use(express.json())

function usersCollection() {
  return client.db(dbName).collection('users')
}

function serializeUser(user) {
  if (!user) return null

  return {
    ...user,
    _id: user._id.toString(),
  }
}

app.get('/api/health', (_request, response) => {
  response.json({ ok: true })
})

app.post('/api/login', async (request, response) => {
  const { email } = request.body

  if (!email) {
    return response.status(400).json({ error: 'Email is required' })
  }

  const user = await usersCollection().findOne({ email })

  if (!user) {
    return response.status(404).json({ error: 'User not found' })
  }

  return response.json(serializeUser(user))
})

app.post('/api/users', async (request, response) => {
  const { name, username, email } = request.body

  if (!name || !username || !email) {
    return response.status(400).json({ error: 'Name, username and email are required' })
  }

  const now = new Date()
  const user = {
    username,
    name,
    email,
    bio: '',
    profileImage: '',
    interests: [],
    friendsCount: 0,
    streakCount: 0,
    createdAt: now,
    updatedAt: now,
  }

  const result = await usersCollection().insertOne(user)

  return response.status(201).json(
    serializeUser({
      ...user,
      _id: result.insertedId,
    }),
  )
})

app.get('/api/users/:id', async (request, response) => {
  const { id } = request.params

  if (!ObjectId.isValid(id)) {
    return response.status(400).json({ error: 'Invalid user id' })
  }

  const user = await usersCollection().findOne({ _id: new ObjectId(id) })

  if (!user) {
    return response.status(404).json({ error: 'User not found' })
  }

  return response.json(serializeUser(user))
})

app.put('/api/users/:id', async (request, response) => {
  const { id } = request.params
  const { name, username, email, bio, profileImage, interests } = request.body

  if (!ObjectId.isValid(id)) {
    return response.status(400).json({ error: 'Invalid user id' })
  }

  const update = {
    name,
    username,
    email,
    bio,
    profileImage,
    interests,
    updatedAt: new Date(),
  }

  Object.keys(update).forEach((key) => {
    if (update[key] === undefined) {
      delete update[key]
    }
  })

  const result = await usersCollection().findOneAndUpdate(
    { _id: new ObjectId(id) },
    { $set: update },
    { returnDocument: 'after' },
  )

  if (!result) {
    return response.status(404).json({ error: 'User not found' })
  }

  return response.json(serializeUser(result))
})

await client.connect()

app.listen(port, () => {
  console.log(`Temporary API running on http://localhost:${port}`)
})

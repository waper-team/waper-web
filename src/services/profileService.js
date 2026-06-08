const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api'

export function mapUserToProfile(user) {
  return {
    id: user._id,
    fullName: user.name || '',
    username: user.username || '',
    email: user.email || '',
    bio: user.bio || '',
    profileImage: user.profileImage || '',
    interests: Array.isArray(user.interests) ? user.interests : [],
    friendsCount: user.friendsCount ?? user.followersCount ?? 0,
    streakCount: user.streakCount ?? 0,
  }
}

export async function getProfile(profileId) {
  const response = await fetch(`${API_BASE_URL}/users/${profileId}`)

  if (!response.ok) {
    throw new Error('No se pudo cargar el perfil')
  }

  const user = await response.json()
  return mapUserToProfile(user)
}

export async function createProfile(profile) {
  const response = await fetch(`${API_BASE_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: profile.fullName,
      username: profile.username,
      email: profile.email,
    }),
  })

  if (!response.ok) {
    throw new Error('No se pudo crear el perfil')
  }

  const user = await response.json()
  return mapUserToProfile(user)
}

export async function loginProfile({ email }) {
  const response = await fetch(`${API_BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  })

  if (!response.ok) {
    throw new Error('No se pudo iniciar sesion')
  }

  const user = await response.json()
  return mapUserToProfile(user)
}

export async function updateProfile(profileId, profile) {
  const response = await fetch(`${API_BASE_URL}/users/${profileId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: profile.fullName,
      username: profile.username,
      email: profile.email,
      bio: profile.bio,
      profileImage: profile.profileImage,
      interests: profile.interests,
    }),
  })

  if (!response.ok) {
    throw new Error('No se pudo guardar el perfil')
  }

  const user = await response.json()
  return mapUserToProfile(user)
}

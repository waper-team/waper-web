import { useState } from 'react'
import './App.css'
import InterestsGallery from './components/InterestsGallery'
import InterestsTags from './components/InterestsTags'
import img1 from './assets/Cover.png'
import img2 from './assets/For_you.png'
import img3 from './assets/Cover2.png'

const data = {'Fútbol': [{ id: 1, title: 'Fútbol...', img: img1 }, { id: 2, title: 'Partidito...', img: img2 }], 'Nadar': [], 'Básket': []}


function App() {
    const [active, setActive] = useState('Fútbol')
  return (
    <div className="max-w-md mx-auto p-4 bg-white min-h-screen">
      <h1>Waper</h1>
      <p>Acá inicia la aplicación</p>
     <InterestsTags activeInterest={active} setActiveInterest={setActive} />
      <InterestsGallery items={data[active] || []} />
    </div>
  )
}

export default App

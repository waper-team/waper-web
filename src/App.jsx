//1. Dependencias externas
import { useState } from 'react'
import './App.css'

//2. Componentes de estructura
import MeatballMenu from './components/MeatballMenu'
import Navbar from './components/Navbar'
import EditButton from './components/EditButton'

//3. Componentes de entidad Perfil
import ProfileImage from './components/ProfileImage'
import UserInfo from './components/UserInfo'
import Stats from './components/Stats'
import Interests from './components/Interests'
import Posts from './components/Posts'

function App() {

    // Estado local para mantener la pestaña activa
    const [activeTab, setActiveTab] = useState('profile')

    return (

        // Contenedor principal de la aplicación
        <div
            className="
                relative
                min-h-screen
                overflow-hidden
                bg-[#f5f7ff]
                pb-28
            "
        >

            {/* Decoraciones de fondo */}
            <div
                className="
                    absolute
                    left-[-120px]
                    top-[-120px]
                    h-[260px]
                    w-[260px]
                    rounded-full
                    bg-[#0037ff]
                "
            />

            <div
                className="
                    absolute
                    right-[-100px]
                    top-[320px]
                    h-[220px]
                    w-[220px]
                    rounded-full
                    border
                    border-gray-200
                    opacity-40
                "
            />

            {/* Puntos decorativos */}
            <div
                className="
                    absolute
                    left-10
                    top-52
                    grid
                    grid-cols-4
                    gap-3
                    opacity-60
                "
            >
                {Array.from({ length: 16 }).map((_, index) => (
                    <div
                        key={index}
                        className="
                            h-2
                            w-2
                            rounded-full
                            bg-blue-500
                        "
                    />
                ))}
            </div>

            {/* Header */}
            <div
                className="
                    relative
                    z-10
                    flex
                    items-center
                    justify-between
                    px-6
                    pt-6
                "
            >

                {/* Menú hamburguesa */}
                <MeatballMenu username='@duki_26' />

                {/* Botón editar perfil */}
                <EditButton
                    onPress={() => console.log('Editar Perfil')}
                />

            </div>

            {/* Contenido principal */}
            <div
                className="
                    relative
                    z-10
                    mt-6
                    flex
                    flex-col
                    items-center
                "
            >

                {/* Imagen de perfil */}
                <ProfileImage />

                {/* Información del usuario */}
                <UserInfo />

                {/* Estadísticas */}
                <Stats />

                {/* Intereses */}
                <Interests />

                {/* Publicaciones */}
                <Posts />

            </div>

            {/* Barra de navegación inferior */}
            <Navbar
                activeTab={activeTab}
                onTabChange={(tab) => setActiveTab(tab)}
                onAdd={() => console.log('Crear nuevo')}
            />

        </div>
    )
}

export default App
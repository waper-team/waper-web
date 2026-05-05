//1. Dependencias externas
import { useState } from 'react'
import './App.css'

//2. Componentes de estructura
import MeatballMenu from './components/MeatballMenu';
import Navbar from './components/Navbar';
import Button from "./components/Button"
import EditButton from './components/EditButton';

//3. Componentes de entidad Perfil
import ProfileImage from "./components/ProfileImage"
import UserInfo from "./components/UserInfo"
import Stats from "./components/Stats"
import Interests from "./components/Interests"
import Posts from "./components/Posts"

function App() {
    // Estado local para mantener la pestaña activa (profile por defecto)
    // TODO: Migrar a Context API o Redux para escalabilidad
    const [activeTab, setActiveTab] = useState("profile");

    return (
        <>
            {/* Encabezado: Controles de aplicación */}
            <div className='flex justify-between items-center px-4 py-2'>
                {/* Menú secundario para acciones rápidas */}
                <MeatballMenu username='@duki_26' />
                {/* Botón de edición de perfil */}
                <EditButton onPress={() => console.log('Editar Perfil')} />
            </div>

            {/* Sección principal: Datos del perfil */}
            <ProfileImage />       {/* Image de perfil */}
            <UserInfo />          {/* Nombre, bio */}
            <Stats />             {/* Estadísticas de amigos y racha */}
            <Button />            {/* Botón de acción principal (seguir, mensaje, etc.) */}
            <Interests />         {/* Categorías de interés del usuario */}

            {/* Contenido dinámico: Feed según pestaña activa */}
            <Posts />             {/* Galería/feed de publicaciones */}

            {/* Barra de navegación: Cambio entre vistas principales */}
            <Navbar
                activeTab={activeTab}
                onTabChange={(tab) => setActiveTab(tab)}
                onAdd={() => console.log('Crear nuevo')}
            />

        </>
    );
}

export default App;

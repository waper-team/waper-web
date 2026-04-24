import './App.css'
import { useState } from 'react'
import Navbar from './components/Navbar';
import ProfileImage from "./components/ProfileImage"
import UserInfo from "./components/UserInfo"
import Stats from "./components/Stats"
import Button from "./components/Button"
import Interests from "./components/Interests"
import Posts from "./components/Posts"
import MeatballMenu from './components/MeatballMenu';
import EditButton from './components/EditButton';

function App() {
  const [activeTab, setActiveTab] = useState("profile");
  return (
    <>
      <div className='flex justify-between items-center px-4 py-2'>
        <MeatballMenu username='@duki_26' />
        <EditButton onPress={() => console.log('Editar Perfil')} />
      </div>
      <ProfileImage />
      <UserInfo />
      <Stats />
      <Button />
      <Interests />
      <Posts />
      <Navbar
      activeTab={activeTab}
      onTabChange={(tab) => setActiveTab(tab)}
      onAdd={() => console.log('Crear nuevo')}
      />

    </>
  );
}

export default App;

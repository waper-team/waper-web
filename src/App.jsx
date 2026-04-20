import './App.css'
import ProfileImage from "./components/ProfileImage"
import UserInfo from "./components/UserInfo"
import Stats from "./components/Stats"
import Button from "./components/Button"
import Interests from "./components/Interests"
import Posts from "./components/Posts"
import MeatballMenu from './components/MeatballMenu';
import EditButton from './components/EditButton';

function App() {
  return (
    <>
      <div className='flex justify-between items-center px-4 py-2'>
        {/* este div pone los contenedores en extremos opuestos */}
        <MeatballMenu username='@duki_26' />
        <EditButton onPress={() => console.log('Editar Perfil')} />
        {/* TODO: Cambiar el username por el del usuario logueado */}
      </div>
      <ProfileImage />
      <UserInfo />
      <Stats />
      <Button />
      <Interests />
      <Posts />
    </>
  );
}

export default App
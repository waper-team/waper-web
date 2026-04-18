import './App.css'
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
      <h1>Waper</h1>
      <p>Acá inicia la aplicación</p>
    </>
  )
}

export default App
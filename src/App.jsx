import {
  Routes,
  Route,
  Navigate
} from "react-router-dom"

import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import Profile from "./pages/Profile"

//4. componentes del Login
//5. Componentes del registre

function App() {

  return (

    <Routes>

      <Route
        path="/"
        element={<Navigate to="/login" />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      <Route
        path="/profile"
        element={<Profile />}
      />

    </Routes>

  )

}

export default App
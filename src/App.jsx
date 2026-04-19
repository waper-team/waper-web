import './App.css'
import ProfileImage from "./components/ProfileImage"
import UserInfo from "./components/UserInfo"
import Stats from "./components/Stats"
import Button from "./components/Button"
import Interests from "./components/Interests"
import Posts from "./components/Posts"

function App() {
  return (
    <div>
      <h1>Waper</h1>
      <ProfileImage />
      <UserInfo />
      <Stats />
      <Button />
      <Interests />
      <Posts />
    </div>
  )
}

export default App

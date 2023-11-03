import './css/App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Resume from './components/Resume'
import SpotifyApp from './pages/SpotifyApp'
import Extracirriculars from './pages/Extracirriculars'
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/resumewebsite" element={<Home />} />
            <Route path="/resumewebsite/projects" element={<Projects />}></Route>
            <Route path="/resumewebsite/resume" element={<Resume />}></Route>
            <Route path="/resumewebsite/spotify" element={<SpotifyApp />}></Route>
            <Route path="/resumewebsite/extracirriculars" element={<Extracirriculars />}></Route>
          </Routes>
        </div>
      </>
  )
}

export default App

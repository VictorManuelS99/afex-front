import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'

import { Home } from './Pages/Home'
import { Video } from './Pages/Video'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video" element={<Video />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

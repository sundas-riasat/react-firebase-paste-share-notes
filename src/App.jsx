import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ViewText from './ViewText'
import Home from './Home'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<ViewText />} />
      </Routes>
    </Router>
  )
}

export default App

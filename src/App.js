import React from 'react'
import Home from './componennts/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Home />}/>
        <Route path='/products'/>
      </Routes>
    </Router>
  )
}

export default App

import React from 'react'
import Home from './componennts/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Products from './componennts/Products'
import Solutions from './componennts/Solutions'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Home />}/>
        <Route path='/products' element={ <Products/>}/>
        <Route path='/solutions' element={ <Solutions/>}/>
      </Routes>
    </Router>
  )
}

export default App

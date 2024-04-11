import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ProductsTimeRevolution from './pages/ProductsTimeRevolution'
import About from './pages/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/TimeRevolution' element={<ProductsTimeRevolution />} />
        <Route path='/About' element={<About />}/>

      </Routes>
    </>
  )
}

export default App

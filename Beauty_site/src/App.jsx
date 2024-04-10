import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ProductsTimeRevolution from './pages/ProductsTimeRevolution'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/TimeRevolution' element={<ProductsTimeRevolution />} />

      </Routes>
    </>
  )
}

export default App

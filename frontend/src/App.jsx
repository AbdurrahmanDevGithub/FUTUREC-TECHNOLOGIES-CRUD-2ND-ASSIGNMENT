import Login from './components/login/Login'
import Home from './pages/home/Home'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/login/LoginPage'
import UpdateProductPage from './pages/products/updateProductsPage'
import AddProductsPage from './pages/products/AddProductsPage'


function App() {

  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/update/:id" element={<UpdateProductPage />} />
        <Route path="/add_product" element={<AddProductsPage />} />
      </Routes>
    </Router>
    </>
  )
}

export default App

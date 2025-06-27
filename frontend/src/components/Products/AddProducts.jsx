import React, { useState } from 'react'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import Navbar from '../Navbar/Navbar'

const AddProducts = () => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    quantity: ''
  })

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await axios.post('http://localhost:3001/api/products/upload', product)
      toast.success('Product added successfully')
      setProduct({ name: '', price: '', quantity: '' })
    } catch (error) {
      console.error('Error inadd product:', error)
      toast.error('Failed to add product')
    }
  }

  return (
    <div>
      <Navbar />
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
          Name: <br />
          <input type="text" name="name" value={product.name} onChange={handleChange} required /> <br /><br />

          Price: <br />
          <input type="number" name="price" value={product.price} onChange={handleChange} required/><br /><br />

          Quantity: <br />
          <input type="number" name="quantity" value={product.quantity} onChange={handleChange} required  /> <br /><br />

        <button type="submit">Add Product</button>
      </form>
      <ToastContainer />
    </div>
  )
}

export default AddProducts

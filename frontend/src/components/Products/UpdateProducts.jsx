import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'

const UpdateProducts = () => {
  const { id } = useParams()
  const [product, setProduct] = useState({ name: '', price: '', quantity: '' })

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/products/viewone/${id}`)
        setProduct(response.data)
      } catch (error) {
        console.error("Error fetching product:", error)
        toast.error("Failed to load product")
      }
    }
    fetchProduct()
  }, [id])

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value })
  }

  const handleUpdate = async (e) => {
    e.preventDefault()
    try {
      await axios.put(`http://localhost:3001/api/products/update/${id}`, product)
      toast.success('Product updated successfully')
    } catch (error) {
      console.error("Update error:", error)
      toast.error('Failed to update product')
    }
  }

  return (
    <div>
      <h2>Update Product</h2>
      <form onSubmit={handleUpdate}>
        <label>Name: </label>
        <input type="text" name="name" value={product.name} onChange={handleChange} required /><br />
        <label>Price: </label>
        <input type="number" name="price" value={product.price} onChange={handleChange} required /><br />
        <label>Quantity: </label>
        <input type="number" name="quantity" value={product.quantity} onChange={handleChange} required /><br />
        <button type="submit">Update</button>
      </form>
      <ToastContainer />
    </div>
  )
}

export default UpdateProducts

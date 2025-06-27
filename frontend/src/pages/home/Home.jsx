import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import Navbar from '../../components/Navbar/Navbar'


const Home = () => {
  const [data, setData] = useState([])

  const navigate = useNavigate()

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/products/view')
      console.log("Response:", response.data)
      setData(response.data.products)
    } catch (error) {
      console.error("Error fetching data:", error)
      toast.error('Failed to load products')
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/products/delete/${id}`)
      toast.success('Deleted successfully')
      fetchData()
    } catch (error) {
      console.error("Delete error:", error)
      toast.error('Failed to delete')
    }
  }

  const handleUpdate = (id) => {
    navigate(`/update/${id}`)
  }

  return (
    <div>
      <Navbar />
      <h2>Product List</h2>
      <ul>
        {data.length === 0 ? (
          <li>No products found</li>
        ) : (
          data.map((item) => (
            <li key={item._id}>
              <strong>Name:</strong> {item.name} <br />
              <strong>Price:</strong> {item.price} <br />
              <strong>Quantity:</strong> {item.quantity} <br />

              <button onClick={() => handleDelete(item._id)}>Delete</button>{' '}
              <button onClick={() => handleUpdate(item._id)}>Update</button>

              <br /><br /><br />
            </li>
          ))
        )}
      </ul>
      <ToastContainer />
    </div>
  )
}

export default Home

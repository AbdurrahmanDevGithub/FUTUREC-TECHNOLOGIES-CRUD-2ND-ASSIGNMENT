import React, { useState } from 'react'
import Home from '../../pages/home/Home'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'


const Login = () => {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const navigate = useNavigate();



  const handleLogin=async(e)=>{
   e.preventDefault();
   try {
      const response = await axios.post('http://localhost:3001/api/account/signin', {
        email,
        password
      })

      console.log('Login successful:', response.data)
      navigate('/home')
      
    } catch (error) {
      const errorMsg = error.response?.data?.error || 'Login failed'
      toast.error(errorMsg)
    }
  }

  return (
    <div>
      <form onSubmit={handleLogin}> 

        Email: <br />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br /><br />

        Password: <br />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br /><br />

        <button> Login </button>

      </form>
      <ToastContainer />
    </div>
  )
}

export default Login

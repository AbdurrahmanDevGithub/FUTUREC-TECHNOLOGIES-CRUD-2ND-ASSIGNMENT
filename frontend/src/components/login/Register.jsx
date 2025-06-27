import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'


const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:3001/api/account/signup', {
        username,
        email,
        password,
      })

      toast.success('Registration successful!')
      navigate('/login')
    } catch (error) {
      const errMsg = error.response?.data?.message || 'Registrration failed'
      toast.error(errMsg)
    }
  }

  return (
    <div>
      <form onSubmit={handleRegister}>
        Username: <br />
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} /><br /><br />

        Email: <br /> 
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br /><br />

        Password: <br /> 
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br /><br />

        <button type="submit">Register</button>
      </form>

      <ToastContainer />
    </div>
  )
}

export default Register

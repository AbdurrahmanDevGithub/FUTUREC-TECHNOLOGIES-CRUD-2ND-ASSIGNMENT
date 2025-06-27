import React, { useState } from 'react'
import Register from '../../components/login/Register'
import Login from '../../components/login/Login'

const LoginPage = () => {
  const [showLogin, setShowLogin] = useState(true)

  return (
    <div>
      <div>
        <a onClick={() => setShowLogin(true)} style={{ marginRight: '10px', cursor: 'pointer' }}>
          <u>Login</u>
        </a>
        <a onClick={() => setShowLogin(false)} style={{ cursor: 'pointer' }}>
          <u>Register</u>
        </a>
        <br /><br />
      </div>

      {showLogin ? <Login /> : <Register />}

      <br /><br />

      <div>
        <p>
          -This project mainly focuses on the functionality using <b>React</b> for the frontend and <b>Node.js + Express</b> for the backend.
          <b>So i didnt use css stylings</b>
        </p>

        <h3>How to Use This App</h3>
        <ol>
          <li>Create a MongoDB database named <b>crud_futurc_technologies</b>.</li>
          <li>Run the backend server using <b>npm start</b> (it runs on port <b>3001</b>).</li>
          <li>Run the frontend using <b>npm run dev</b> (it runs on port <b>5173</b>).</li>
          <li>Open the app and register a new account using the <b>Register</b> link.</li>
          <li>Then login using your registered email and password.</li>
          <li>Once logged in, you can perform all <b>CRUD</b> operations on products.</li>
        </ol>
      </div>
    </div>
  )
}

export default LoginPage

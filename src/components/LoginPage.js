import React, { useState } from "react"
import { useNavigate } from "react-router"
const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const loggedEmail = JSON.parse(localStorage.getItem("Email"))
    const loggedPassword = JSON.parse(localStorage.getItem("Password"))

    if (email === loggedEmail && password === loggedPassword) {
      localStorage.setItem("isLogged",true)
      navigate("/homepage")
  

    } else {
      alert("Please fill in each field correctly!")
    }
  }
  const handleClick = () => {
    navigate("/register")
  }

  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">E-mail</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Please enter your e-mail address"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Please enter your password"
          id="password"
          name="password"
        />
        <button type="submit">Login</button>
      </form>
      <button className="link-btn" onClick={handleClick}>
        Don't have an account? Register here.
      </button>
    </div>
  )
}

export default LoginPage

import React, { useState } from "react"
import { useNavigate } from 'react-router'

const RegisterPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const navigate = useNavigate()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if(!email|| !password ){
      alert("Please fill every field!")
     }else{
      localStorage.setItem("Email",JSON.stringify(email));
      localStorage.setItem("Password",JSON.stringify(password));
      localStorage.setItem("Name",JSON.stringify(name));
      localStorage.setItem("isLogged",true)
      navigate("/homepage")
     }
  }
  const handleClick=()=>{
    navigate("/login")
  }
  return (
    <div className="auth-form-container">
        <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Please enter your name"
          id="name"
          name="name"
        />
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
        <button type="submit">Register</button>
      </form>
      <button className="link-btn" onClick={handleClick}>
        Already have an account? Login here.
      </button>
    </div>
  )
}

export default RegisterPage

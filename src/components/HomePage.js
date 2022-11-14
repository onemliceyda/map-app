import React from "react"
import { useNavigate } from "react-router"

const HomePage = () => {
  const navigate = useNavigate()
  const username = JSON.parse(localStorage.getItem("Name"))

  const handleLogout = () => {
    localStorage.setItem("isLogged", false)
    navigate("/login")
  }
  return (
    <div>
      <h2>Welcome to Homepage {username}</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default HomePage

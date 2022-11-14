import React, { useState } from "react"
import "./App.css"
import LoginPage from "./components/LoginPage"
import RegisterPage from "./components/RegisterPage"
import HomePage from "./components/HomePage"
import { BrowserRouter, Route, Routes } from "react-router-dom"
function App() {
  const [login,setLogin]=useState(false)
  return (
    <div className="App">
       {!login ? (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/homepage" element={<HomePage />} />

        </Routes>
      </BrowserRouter>
        ) : (
          <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />


          </Routes>
        </BrowserRouter>
      )} 
    </div>
  )
}

export default App

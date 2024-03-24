import { useState } from "react"
import { Routes, Route, Navigate } from "react-router-dom"

import "./App.css"
import Register from "./pages/auth/Register"
import Login from "./pages/auth/Login"
import Contacts from "./pages/conversation/Contacts"
import Conversation from "./pages/conversation/Conversation"
import Matching from "./pages/matching/Matching"
import Pitching from "./pages/pitching/Pitching"
import Profile from "./pages/profile/Profile"
import AppLayout from "./components/AppLayout"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route element={<AppLayout />}>
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/conversation" element={<Conversation />} />
          <Route path="/matching" element={<Matching />} />
          <Route path="/pitching" element={<Pitching />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/" element={<Login />} />
      </Routes>
    </>
  )
}

export default App

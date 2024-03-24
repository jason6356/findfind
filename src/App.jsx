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
import Home from "./pages/auth/Home"
import QuestionAllocation from "./pages/matching/QuestionAllocation"
import QuestionAnswer from "./pages/matching/QuestionAnswer"
function App() {
  return (
    <>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route element={<AppLayout />}>
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/conversation" element={<Conversation />} />
          <Route path="/matching" element={<Matching />} />
          <Route path="/matching/answer-question" element={<QuestionAnswer />} />
          <Route path="/matching/question-allocation" element={<QuestionAllocation />} />
          <Route path="/pitching" element={<Pitching />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App

import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { RightOutlined } from "@ant-design/icons"
import ContactPerson from "./components/ContactPerson"

function Contacts() {
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    // Simulating a match with someone
    const hasMatch = true // Replace with your logic to check if there is a match
    if (hasMatch) {
      setShowModal(true)
    }
  }, [])

  const handleContactPress = () => {
    console.log("Hello World")
    navigate("/conversation")
  }

  return (
    <div>
      <h1 style={{}}>Contact List</h1>
      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              border: "1px solid black",
              padding: "10px",
              background: "white",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h2 style={{}}>You have a match!</h2>
            <img src="../../../public/ant-group.jpg" style={{ width: "50%" }} />
            <h2 style={{}}>Ant Group</h2>
            <br />
            <button
              style={{
                backgroundColor: "white",
                color: "black",
                padding: "5px 10px",
                borderRadius: "5px",
              }}
              onClick={() => {
                setShowModal(false)
                handleContactPress()
              }}
            >
              Start Conversation
            </button>
          </div>
        </div>
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
        onClick={handleContactPress}
      >
        <ContactPerson />
      </div>
    </div>
  )
}

export default Contacts

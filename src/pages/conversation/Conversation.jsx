import React, { useState } from "react"
import "./Conversation.css"
import { Input, Space, Button } from "antd"

function Conversation() {
  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState("")

  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      setMessages([...messages, inputValue])
      setInputValue("")
    }
  }

  return (
    <div style={{}}>
      <div className="chatroom-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#f0f0f0",
              padding: "10px",
              borderRadius: "10px",
              marginBottom: "10px",
            }}
          >
            {message}
          </div>
        ))}
      </div>
      <Space.Compact
        style={{
          width: "80%",
          position: "absolute",
          bottom: "10px",
        }}
      >
        <Input onChange={(event) => setInputValue(event.target.value)} />
        <Button type="Primary" onClick={() => handleSendMessage()}>
          Send
        </Button>
      </Space.Compact>
    </div>
  )
}

export default Conversation

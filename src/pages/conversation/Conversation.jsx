import React, { useState } from "react"
import "./Conversation.css"
import { Input, Space, Button } from "antd"
import MessageBubble from "./components/MessageBubble"

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
      <div>
        <img src="../../../public/ant-group.jpg" style={{ width: "100%" }} />
        <h3>You are now chatting with Ant Group Sdn Bhd</h3>
      </div>
      <div className="chatroom-messages">
        <MessageBubble
          isSender={false}
          message={"It seems like we have some interest in common."}
        />
        <MessageBubble
          isSender={false}
          message={
            "Would you want to achieve some opportunity from this company?"
          }
        />
        {messages.map((message, index) => (
          <div key={index} style={{ textAlign: "right" }}>
            <MessageBubble isSender={true} message={message} />
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
        <Input
          onChange={(event) => setInputValue(event.target.value)}
          value={inputValue}
          onPressEnter={() => handleSendMessage()}
        />
        <Button type="Primary" onClick={() => handleSendMessage()}>
          Send
        </Button>
      </Space.Compact>
    </div>
  )
}

export default Conversation

import React, { useState } from "react"

function MessageBubble({ isSender, message }) {
  const bubbleStyle = {
    display: "inline-block",
    maxWidth: "80%",
    padding: "10px",
    borderRadius: "10px",
    backgroundColor: isSender ? "#DCF8C6" : "#F0F0F0",
    color: isSender ? "#000000" : "#333333",
    textAlign: isSender ? "right" : "left",
    marginTop: "20px",
  }

  return <div style={bubbleStyle}>{message}</div>
}

export default MessageBubble

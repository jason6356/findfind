import React from "react"
import { RightOutlined } from "@ant-design/icons"

function ContactPerson() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        marginTop: "20px",
        border: ".1rem solid gray",
        borderRadius: "8px",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "80%",
          height: "50px",
          alignItems: "center",
        }}
      >
        <img
          src="../../../public/profile.jpg"
          style={{
            width: "20%",
            height: "90%",
          }}
        />
        <span
          style={{
            fontWeight: "bold",
            fontSize: "18px",
            marginLeft: "5px",
          }}
        >
          Alipay Sdn Bhd
        </span>
      </div>
      <div
        style={{
          width: "20%",
          height: "50px",
          textAlign: "right",
          lineHeight: "50px",
          paddingRight: "10px",
        }}
      >
        <RightOutlined />
      </div>
    </div>
  )
}

export default ContactPerson

import React from "react"
import { RightOutlined } from "@ant-design/icons"
import ContactPerson from "./components/ContactPerson"

function Contacts() {
  return (
    <div>
      <h1 className="">Contact List</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <ContactPerson />
        <ContactPerson />
        <ContactPerson />
        <ContactPerson />
        <ContactPerson />
        <ContactPerson />
        <ContactPerson />
        <ContactPerson />
        <ContactPerson />
        <ContactPerson />
        <ContactPerson />
        <ContactPerson />
        <ContactPerson />
      </div>
    </div>
  )
}

export default Contacts

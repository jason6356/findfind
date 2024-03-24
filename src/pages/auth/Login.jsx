import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Typography,
} from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import LogoImage from "../../assets/findfind_logo.jpeg";
const Login = () => {
  const { Title, Paragraph } = Typography;
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img src={LogoImage} alt="Logo" style={{ width: "200px" }} />
      <div
        style={{
          background: "#f0f2f5",
          borderRadius: "20px",
          padding: "20px",
          width: "320px",
          margin: "auto",
        }}
      >
        <Title level={1} style={{ fontSize: "50px", textAlign: "center" }}>
          Login
        </Title>
        <Form name="loginForm" initialValues={{ remember: true }}>
          <Title level={3}>Email</Title>
          <Form.Item name="email" hasFeedback>
            <Input
              placeholder="Enter your Email"
              size="large"
              type="email"
              allowClear="true"
              maxLength="100"
              prefix={<UserOutlined />}
            />
          </Form.Item>

          <Form.Item name="password" hasFeedback>
            <Input
              placeholder="Enter your Password"
              size="large"
              type="password"
              allowClear={true}
              maxLength={100}
              prefix={<LockOutlined />}
            />
          </Form.Item>
          <div style={{ textAlign: "right", marginBottom: "20px" }}>
            <a href="/forgot-password">Forgot Password?</a>
          </div>

          <Button
            type="primary"
            shape="round"
            align="center"
            size="large"
            style={{
              marginTop: "10px",
              marginBottom: "20px",
              padding: "25px 20px",
              fontSize: "1.5em",
              width: "100%",
              maxWidth: "300px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={() => {
              navigate("/conversation");
            }}
          >
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;

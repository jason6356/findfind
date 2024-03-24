import React, { useState } from "react";
import { Form, Input, Button, Typography, Select } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { Title, Paragraph } = Typography;
  const navigate = useNavigate();

  return (
    <div
      style={{
        maxWidth: "350px",
        margin: "auto",
        marginTop: "15px",
      }}
    >
      <div
        style={{
          background: "#f0f2f5",
          borderRadius: "30px",
          padding: "20px",
        }}
      >
        <Title level={1} style={{ fontSize: "30px", textAlign: "center" }}>
          Register
        </Title>

        <Form>
          <Title level={4}>Name</Title>
          <Form.Item name="name" hasFeedback>
            <Input
              placeholder="Enter your Full Name"
              size="large"
              prefix={<UserOutlined />}
            />
          </Form.Item>

          <Title level={4}>Occupation</Title>
          <Form.Item name="occupation" hasFeedback>
            <Select placeholder="Select your occupation" size="large">
              <Option value="student">Student</Option>
              <Option value="employee">Employee</Option>
              <Option value="employer">Employer</Option>
            </Select>
          </Form.Item>

          <Title level={4}>Industry</Title>
          <Form.Item name="industry" hasFeedback>
            <Select
              placeholder="Select or type your industry"
              size="large"
              mode="tags"
            >
              <Option value="IT">IT</Option>
              <Option value="Finance">Finance</Option>
              <Option value="Healthcare">Healthcare</Option>
              <Option value="Education">Education</Option>
              <Option value="Manufacturing">Manufacturing</Option>
              <Option value="Retail">Retail</Option>
              <Option value="Hospitality">Hospitality</Option>
              <Option value="Automotive">Automotive</Option>
              <Option value="Real Estate">Real Estate</Option>
              <Option value="Telecommunications">Telecommunications</Option>
              <Option value="Energy">Energy</Option>
              <Option value="Media">Media</Option>
              <Option value="Consulting">Consulting</Option>
              <Option value="Government">Government</Option>
              <Option value="Agriculture">Agriculture</Option>
              <Option value="Transportation">Transportation</Option>
              <Option value="Pharmaceuticals">Pharmaceuticals</Option>
              <Option value="Construction">Construction</Option>
              <Option value="Insurance">Insurance</Option>
              <Option value="Non-profit">Non-profit</Option>
            </Select>
          </Form.Item>

          <Title level={4}>Email</Title>
          <Form.Item name="email" hasFeedback>
            <Input
              placeholder="Enter your Email"
              size="large"
              type="email"
              prefix={<MailOutlined />}
            />
          </Form.Item>

          <Title level={4}>Password</Title>
          <Form.Item name="password" hasFeedback>
            <Input
              placeholder="Enter your Password"
              size="large"
              type="password"
              prefix={<LockOutlined />}
            />
          </Form.Item>
          
          <Button
            type="primary"
            shape="round"
            size="large"
            style={{
              width: "100%",
              fontSize: "1em",
            }}
            onClick={() => {
              navigate("/login");
            }}
          >
            Register
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Register;

import React from "react";
import { Input, Button, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import {
  CameraOutlined,
  UploadOutlined,
  UserOutlined,
  EditOutlined,
} from "@ant-design/icons";
import LogoImage from "../../assets/findfind_logo.jpeg";
const Profile = () => {
  const { Title, Paragraph } = Typography;
  const navigate = useNavigate();
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            width: "120px",
            height: "100px",
            borderRadius: "70%",
            border: "2px solid #ccc",
            backgroundColor: "#ccc",
            marginBottom: "10px",
            position: "relative",
          }}
        >
          <img
            src={LogoImage}
            alt="Logo"
            style={{ width: "100%", height: "100%", borderRadius: "50%" }}
          />

          <CameraOutlined
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              transform: "translate(50%, 50%)",
              fontSize: "20px",
            }}
          />
        </div>

        <Title level={3} style={{ margin: "0", textAlign: "center" }}>
          Caiwen
        </Title>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ width: "100%", maxWidth: "400px" }}>
          <div
            style={{
              marginBottom: "20px",
            }}
          >
            <Title level={4} style={{ margin: "0" }}>
              Name:
            </Title>
            <Input
              size="large"
              type="text"
              allowClear
              maxLength={100}
              value="Caiwen"
              readOnly
              style={{ marginTop: "5px" }}
            />
          </div>

          <div
            style={{
              marginBottom: "20px",
            }}
          >
            <Title level={4} style={{ margin: "0" }}>
              Occupation:
            </Title>
            <Input
              size="large"
              type="text"
              allowClear
              maxLength={100}
              value="Software Engineer"
              readOnly
              style={{ marginTop: "5px" }}
            />
          </div>

          <div
            style={{
              marginBottom: "20px",
            }}
          >
            <Title level={4} style={{ margin: "0" }}>
              Industry:
            </Title>
            <Input
              size="large"
              type="text"
              allowClear
              maxLength={100}
              value="Technology"
              readOnly
              style={{ marginTop: "5px" }}
            />
          </div>

          <div
            style={{
              marginBottom: "20px",
            }}
          >
            <Title level={4} style={{ margin: "0" }}>
              Email:
            </Title>
            <Input
              size="large"
              type="email"
              allowClear
              maxLength={100}
              value="findfind@example.com"
              readOnly
              style={{ marginTop: "5px" }}
            />
          </div>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Button
          type="primary"
          shape="round"
          icon={<UserOutlined />}
          size="large"
          style={{ marginBottom: "10px", width: "100%", maxWidth: "200px" }}
        >
          Verify Identity
        </Button>
        <Button
          type="primary"
          shape="round"
          icon={<EditOutlined />}
          size="large"
          style={{ marginBottom: "10px", width: "100%", maxWidth: "200px" }}
        >
          Edit Profile
        </Button>

        <Button
          type="primary"
          shape="round"
          icon={<UploadOutlined />}
          size="large"
          style={{ marginBottom: "10px", width: "100%", maxWidth: "200px" }}
        >
          Upload Resume
        </Button>
      </div>
    </div>
  );
};

export default Profile;

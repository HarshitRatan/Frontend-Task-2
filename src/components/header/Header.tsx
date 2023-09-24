import React from "react";
import { Button, Col, Divider, Row } from "antd";
import Title from "antd/es/typography/Title";
// import DropDown from "../../components/dropdown/DropDown";
import UserVoice from "../../components/sideBarIcons/UserVoice";
import UserCheck from "../../components/sideBarIcons/UserCheck";
import UserClose from "../../components/sideBarIcons/UserClose";
import UserTag from "../../components/sideBarIcons/UserTag";
import { DownOutlined, MailOutlined } from "@ant-design/icons";

const Header = () => {
  return (
    <Row style={{ marginTop: "2.5rem" }}>
      <Col span={6}>
        <Title
          style={{
            color: "#1D4ED8",
            fontFamily: "Poppins",
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
          }}
        >
          London Internship Program
        </Title>
        <Title
          style={{
            color: "#0B0B0B",
            fontFamily: "Poppins",
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: "300",
            lineHeight: "normal",
          }}
        >
          London
        </Title>
      </Col>
      <Col
        span={6}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <DropDown /> */}
      </Col>
      <Col
        span={12}
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Button
          style={{
            height: "2.5rem",
            width: "2.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          type="default"
          icon={<UserTag />}
        />
        <Button
          style={{
            height: "2.5rem",
            width: "2.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          type="default"
          icon={<UserClose />}
        />
        <Button
          style={{
            height: "2.5rem",
            width: "2.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          type="default"
          icon={<UserCheck />}
        />
        <Button
          style={{
            height: "2.5rem",
            width: "2.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          type="default"
          icon={<UserVoice />}
        />
        <Button
          style={{
            height: "2.5rem",
            width: "2.5rem",
          }}
          type="default"
          icon={<MailOutlined />}
        />
        <Button
          type="primary"
          style={{
            borderRadius: "8px 8px 8px 8px",
            background: "#1D5ECD",
            display: "flex",
            padding: "8px 16px",
            alignItems: "center",
            gap: "10px",
            height: "3rem",
          }}
        >
          Move To Video Interview
          <Divider
            type="vertical"
            style={{
              width: "1px",
              height: "100%",
              backgroundColor: "white",
            }}
          />
          <DownOutlined />
        </Button>
      </Col>
    </Row>
  );
};

export default Header;

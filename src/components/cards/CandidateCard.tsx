import React from "react";
import { Avatar, Card } from "antd";
import { Typography } from "antd";
import Meta from "antd/es/card/Meta";
const { Title } = Typography;

const CandidateCard = () => {
  const hastagArray = ["#top_candidate", "#top_candidate"];
  const chipsArray = ["New York", "Marketing", "London"];
  return (
    <>
      <Card
        style={{
          width: "100%",
          marginTop: 16,
        }}
      >
        <Meta
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          avatar={
            <Avatar
              style={{
                backgroundColor: "#D0E1FF",
                color: "rgb(70 112 187)",
                fontSize: "1rem",
                height: "3.5rem",
                width: "3.5rem",
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              AS
            </Avatar>
          }
          title={
            <div>
              <Title
                style={{
                  color: "#000",
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                Aaliyah Sanderson
              </Title>
              <Title
                style={{
                  marginTop: "0.5rem",
                  color: "#000",
                  fontFamily: "Poppins",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "normal",
                }}
              >
                Riyadh, Saudi Arabia
              </Title>
              <Title
                style={{
                  marginTop: "0.5rem",
                  color: "#000",
                  fontFamily: "Poppins",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "300",
                  lineHeight: "normal",
                }}
              >
                Bachelor - Cambridge University (2023 - 2023)
              </Title>
              {hastagArray.length > 0 &&
                hastagArray.map((hastag, index) => (
                  <Title
                    key={index}
                    style={{
                      marginTop: "0.25rem",
                      color: "#1D4ED8",
                      fontFamily: "Poppins",
                      fontSize: "12px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "normal",
                      float: "left",
                      marginRight: 10,
                    }}
                  >
                    {hastag}
                  </Title>
                ))}
              <br />
              {chipsArray.length > 0 &&
                chipsArray.map((value, index) => (
                  <Title
                    key={index}
                    style={{
                      marginTop: "0.25rem",
                      width: "80px",
                      fontSize: "12px",
                      display: "flex",
                      padding: "2px 10px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                      borderRadius: "4px",
                      background: "#F3FAFC",
                      color: "#037092",
                      float: "left",
                      marginRight: 10,
                    }}
                  >
                    {value}
                  </Title>
                ))}
            </div>
          }
        />
      </Card>
    </>
  );
};

export default CandidateCard;

import React from "react";
import { Avatar, Card, Checkbox, Divider } from "antd";
import { Typography } from "antd";
import Meta from "antd/es/card/Meta";
const { Title } = Typography;

const CandidateCard = ({ additionalInformation }: any) => {
  const hastagArray = ["#top_candidate", "#top_candidate"];
  const chipsArray = ["New York", "Marketing", "London"];
  return (
    <>
      <Card
        style={{
          width: "100%",
          marginTop: 16,
          border: "none",
        }}
      >
        <Checkbox
          style={{
            float: "left",
            paddingRight: "10rem",
          }}
        >
          <Meta
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "1.5rem",
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
        </Checkbox>
        {additionalInformation === "true" && (
          <>
            <Title
              style={{
                marginTop: "0.25rem",
                borderRadius: "5rem",
                fontSize: "12px",
                display: "flex",
                padding: "2px 10px",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                background: "rgb(29 78 216 / 18%)",
                color: "#037092",
                float: "left",
                marginRight: 10,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M1.75 7C1.75 9.8995 4.1005 12.25 7 12.25C9.8995 12.25 12.25 9.8995 12.25 7C12.25 4.1005 9.8995 1.75 7 1.75C4.1005 1.75 1.75 4.1005 1.75 7Z"
                  stroke="#305DC6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              4
            </Title>
            <Title
              style={{
                marginTop: "0.25rem",
                borderRadius: "5rem",
                fontSize: "12px",
                display: "flex",
                padding: "2px 10px",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                background: "rgb(29 78 216 / 18%)",
                color: "#037092",
                float: "left",
                marginRight: 10,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M2.46066 2.97035L2.90616 3.19735L2.46066 2.97035ZM2.97038 2.46049L3.19737 2.90599L2.97038 2.46049ZM2.97038 11.5395L3.19737 11.094H3.19737L2.97038 11.5395ZM2.46066 11.0296L2.01515 11.2566L2.46066 11.0296ZM11.5398 11.0296L11.0943 10.8026L11.5398 11.0296ZM11.0297 11.5395L10.8027 11.094L11.0297 11.5395ZM11.5398 2.97035L11.0943 3.19735L11.5398 2.97035ZM11.0297 2.46049L11.2567 2.01498L11.0297 2.46049ZM7.00016 5.91666C6.72402 5.91666 6.50016 6.14052 6.50016 6.41666C6.50016 6.6928 6.72402 6.91666 7.00016 6.91666V5.91666ZM9.3335 6.91666C9.60964 6.91666 9.8335 6.6928 9.8335 6.41666C9.8335 6.14052 9.60964 5.91666 9.3335 5.91666V6.91666ZM7.00016 4.16666C6.72402 4.16666 6.50016 4.39052 6.50016 4.66666C6.50016 4.9428 6.72402 5.16666 7.00016 5.16666V4.16666ZM9.3335 5.16666C9.60964 5.16666 9.8335 4.9428 9.8335 4.66666C9.8335 4.39052 9.60964 4.16666 9.3335 4.16666V5.16666ZM4.16683 11.6667C4.16683 11.9428 4.39069 12.1667 4.66683 12.1667C4.94297 12.1667 5.16683 11.9428 5.16683 11.6667H4.16683ZM5.16683 2.33333C5.16683 2.05719 4.94297 1.83333 4.66683 1.83333C4.39069 1.83333 4.16683 2.05719 4.16683 2.33333L5.16683 2.33333ZM11.1668 4.2V9.8H12.1668V4.2H11.1668ZM9.80028 11.1667H4.20028V12.1667H9.80028V11.1667ZM2.8335 9.8V4.2H1.8335V9.8H2.8335ZM4.20028 2.83333H9.80028V1.83333H4.20028V2.83333ZM2.8335 4.2C2.8335 3.86505 2.83388 3.64392 2.84773 3.47446C2.8611 3.31084 2.88448 3.2399 2.90616 3.19735L2.01515 2.74336C1.90967 2.95037 1.86947 3.16756 1.85105 3.39302C1.83311 3.61265 1.8335 3.88156 1.8335 4.2H2.8335ZM4.20028 1.83333C3.88182 1.83333 3.61287 1.83294 3.39319 1.85088C3.1677 1.8693 2.95043 1.90949 2.74338 2.01498L3.19737 2.90599C3.23989 2.88433 3.31087 2.86094 3.47459 2.84756C3.64412 2.83372 3.86533 2.83333 4.20028 2.83333V1.83333ZM2.90616 3.19735C2.97014 3.07178 3.07206 2.96984 3.19737 2.90599L2.74338 2.01498C2.42965 2.17484 2.17487 2.42988 2.01515 2.74336L2.90616 3.19735ZM4.20028 11.1667C3.86534 11.1667 3.64413 11.1663 3.47461 11.1524C3.31088 11.139 3.2399 11.1156 3.19737 11.094L2.74338 11.985C2.95042 12.0905 3.16769 12.1307 3.39318 12.1491C3.61286 12.167 3.88182 12.1667 4.20028 12.1667V11.1667ZM1.8335 9.8C1.8335 10.1184 1.83311 10.3874 1.85105 10.607C1.86947 10.8324 1.90967 11.0496 2.01515 11.2566L2.90616 10.8026C2.88448 10.7601 2.8611 10.6892 2.84773 10.5255C2.83388 10.3561 2.8335 10.135 2.8335 9.8H1.8335ZM3.19737 11.094C3.07204 11.0301 2.97013 10.9282 2.90616 10.8026L2.01515 11.2566C2.17489 11.5701 2.42967 11.8251 2.74338 11.985L3.19737 11.094ZM11.1668 9.8C11.1668 10.135 11.1665 10.3561 11.1527 10.5256C11.1393 10.6893 11.1159 10.7602 11.0943 10.8026L11.9853 11.2566C12.0908 11.0496 12.131 10.8323 12.1493 10.6069C12.1672 10.3873 12.1668 10.1184 12.1668 9.8H11.1668ZM9.80028 12.1667C10.1187 12.1667 10.3876 12.167 10.6072 12.1491C10.8326 12.1307 11.0497 12.0904 11.2567 11.985L10.8027 11.094C10.7601 11.1157 10.6892 11.1391 10.5257 11.1524C10.3563 11.1663 10.1352 11.1667 9.80028 11.1667V12.1667ZM11.0943 10.8026C11.0305 10.9279 10.9284 11.03 10.8027 11.094L11.2567 11.985C11.5701 11.8253 11.8254 11.5705 11.9853 11.2566L11.0943 10.8026ZM12.1668 4.2C12.1668 3.88161 12.1672 3.6127 12.1493 3.3931C12.131 3.16767 12.0908 2.95043 11.9853 2.74336L11.0943 3.19735C11.1159 3.23984 11.1393 3.31073 11.1527 3.47438C11.1665 3.64387 11.1668 3.865 11.1668 4.2H12.1668ZM9.80028 2.83333C10.1352 2.83333 10.3563 2.83372 10.5257 2.84756C10.6892 2.86093 10.7601 2.8843 10.8027 2.90599L11.2567 2.01498C11.0497 1.90952 10.8326 1.86931 10.6072 1.85088C10.3876 1.83294 10.1187 1.83333 9.80028 1.83333V2.83333ZM11.9853 2.74336C11.8254 2.42955 11.5701 2.17467 11.2567 2.01498L10.8027 2.90599C10.9284 2.97001 11.0305 3.07211 11.0943 3.19735L11.9853 2.74336ZM7.00016 6.91666H9.3335V5.91666H7.00016V6.91666ZM7.00016 5.16666H9.3335V4.16666H7.00016V5.16666ZM5.16683 11.6667L5.16683 2.33333L4.16683 2.33333L4.16683 11.6667H5.16683Z"
                  fill="#1D4ED8"
                />
              </svg>
              5 Programs
            </Title>
          </>
        )}
      </Card>
      <Divider style={{ marginTop: 0 }} />
    </>
  );
};

export default CandidateCard;

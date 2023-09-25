import React from "react";
import CandidateCard from "../../components/cards/CandidateCard";
import Header from "../../components/header/Header";
import { Button, Checkbox, Col, Divider, Input, Row } from "antd";
import Title from "antd/es/typography/Title";
import { ExclamationCircleOutlined, SearchOutlined } from "@ant-design/icons";
import FilterCard from "../../components/filterCard/FilterCard";

const Home = () => {
  const candidatesData = [1, 2, 3];
  const filterLabels = [
    "Personal Information",
    "Education",
    "Work Experience",
    "Activity Filter",
    "Advanced Filter",
  ];
  const [search, setSearch] = React.useState("");
  return (
    <div>
      <Header />
      <Row style={{ marginTop: "2.5rem" }}>
        <Col span={8}>
          <Row style={{ width: "90%", height: "3rem" }}>
            <Input
              size="large"
              placeholder="Serach by name, edu, exp or #tag"
              prefix={<SearchOutlined style={{ color: "#B0BABF" }} />}
              suffix={
                <ExclamationCircleOutlined
                  style={{ marginLeft: "2rem", color: "#B0BABF" }}
                />
              }
              style={{ border: "none" }}
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                console.log("search ::: ", e.target.value);
              }}
            />
          </Row>
          <Row
            style={{
              width: "90%",
              marginTop: "1.5rem",
              borderRadius: "0.5rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#FFF",
            }}
          >
            {filterLabels.length > 0 &&
              filterLabels.map((value, index) => (
                <FilterCard key={index} value={value} />
              ))}
          </Row>
        </Col>
        <Col span={16} style={{ backgroundColor: "white" }}>
          <Row>
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "1rem",
              }}
              span={2}
            >
              <Checkbox />
            </Col>
            <Col
              style={{
                display: "flex",
                alignItems: "center",
                padding: "1rem",
              }}
              span={6}
            >
              <Title
                style={{
                  color: "#1D4ED8",
                  fontFamily: "Poppins",
                  fontSize: "1rem",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "1.4rem",
                }}
              >
                247 Candidates
              </Title>
            </Col>
            <Col span={6}></Col>
            <Col
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                padding: "1rem",
              }}
              span={10}
            >
              <Button
                type="text"
                style={{
                  color: "#1D4ED8",
                  fontFamily: "Poppins",
                  fontSize: "1rem",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "1.4rem",
                }}
              >
                Qualified
              </Button>
              <Button
                type="text"
                style={{
                  color: "#0B0B0B",
                  fontFamily: "Poppins",
                  fontSize: "1rem",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "1.4rem",
                }}
              >
                Task
                <span
                  style={{
                    height: "1.3rem",
                    width: "1.3rem",
                    marginLeft: "5px",
                    borderRadius: "50%",
                    fontSize: "0.8rem",
                    backgroundColor: "rgb(34 33 91 / 19%)",
                  }}
                >
                  25
                </span>
              </Button>
              <Button
                type="text"
                style={{
                  color: "#0B0B0B",
                  fontFamily: "Poppins",
                  fontSize: "1rem",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "1.4rem",
                }}
              >
                Disqualified
                <span
                  style={{
                    height: "1.3rem",
                    width: "1.3rem",
                    marginLeft: "5px",
                    borderRadius: "50%",
                    fontSize: "0.8rem",
                    backgroundColor: "rgb(34 33 91 / 19%)",
                  }}
                >
                  78
                </span>
              </Button>
            </Col>
          </Row>
          <Divider style={{ marginTop: 0, marginBottom: 4 }} />
          <Divider style={{ marginTop: 0 }} />
          {candidatesData.length > 0 &&
            candidatesData.map((value, index) => (
              <CandidateCard key={index} additionalInformation="false" />
            ))}
          <CandidateCard additionalInformation="true" />
        </Col>
      </Row>
    </div>
  );
};

export default Home;

import React from "react";
import CandidateCard from "../../components/cards/CandidateCard";
import Header from "../../components/header/Header";
import { Button, Checkbox, Col, Divider, Input, Row, Space } from "antd";
import Title from "antd/es/typography/Title";
import {
  ExclamationCircleOutlined,
  LoadingOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import FilterCard from "../../components/filterCard/FilterCard";
import CandidateData from "../../data/CandidatesData.json";

const Home = () => {
  const [data, setData] = React.useState(CandidateData);
  const [isloading, setIsLoading] = React.useState(false);

  const filterLabels = [
    "Personal Information",
    "Education",
    "Work Experience",
    "Activity Filter",
    "Advanced Filter",
  ];
  const [search, setSearch] = React.useState("");

  const handelSearch = (e: any) => {
    setIsLoading(true);
    setSearch(e.target.value);
    if (e.target.value === "") {
      setData(CandidateData);
    } else {
      const tempData = CandidateData.filter((value) => {
        return value.name
          .toLowerCase()
          .toString()
          .includes(e.target.value.toLowerCase().toString());
      });
      setData(tempData);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  };

  return (
    <div>
      <Header />
      <Row style={{ marginTop: "2.5rem" }}>
        <Col span={8}>
          <Row style={{ width: "90%", height: "3rem" }}>
            <Input
              size="large"
              placeholder="Serach by name, education or address"
              prefix={<SearchOutlined style={{ color: "#B0BABF" }} />}
              suffix={
                <ExclamationCircleOutlined
                  style={{ marginLeft: "2rem", color: "#B0BABF" }}
                />
              }
              style={{ border: "none" }}
              value={search}
              onChange={(e) => handelSearch(e)}
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
            <Space
              style={{
                display: "flex",
                padding: "18px 16px",
                justifyContent: "space-between",
                alignItems: "center",
                alignSelf: "stretch",
                width: "100%",
              }}
            >
              <Title
                style={{
                  color: " #0B0B0B",
                  fontFamily: "Poppins",
                  fontSize: "1.1rem",
                  fontStyle: "normal",
                  fontWeight: "800",
                  lineHeight: "22px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Filters
              </Title>
              <Title
                style={{
                  color: " #0B0B0B",
                  fontFamily: "Poppins",
                  fontSize: "1.1rem",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "22px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                0 Selected
              </Title>
            </Space>
            <Divider style={{ margin: 0 }} />
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
          {!isloading &&
            data.length > 0 &&
            data.map((value, index) => (
              <CandidateCard key={index} {...value} />
            ))}

          {!isloading && data.length === 0 && (
            <Space
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "rgb(92 90 90)",
              }}
            >
              <h3>No Record Found!!</h3>
            </Space>
          )}
          {isloading && (
            <Space
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <LoadingOutlined style={{ fontSize: "3rem", color: "#a9a9a9" }} />
            </Space>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default Home;

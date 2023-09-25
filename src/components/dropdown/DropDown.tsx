import React from "react";
import { Select } from "antd";
const { Option } = Select;
const DropDown = ({ hoverIn, setHoverIn }: any) => {
  const dropDownData = [
    {
      label: "Applied",
      value: "1745",
    },
    {
      label: "Shortlisted",
      value: "453",
    },
    {
      label: "Technical Interview",
      value: "123",
    },
    {
      label: "Opportunity Browsing",
      value: "243",
    },
    {
      label: "Video Interview ",
      value: "25",
    },
    {
      label: "Video Interview II",
      value: "25",
    },
    {
      label: "Video Interview III",
      value: "25",
    },
    {
      label: "Offer",
      value: "10",
    },
    {
      label: "Withdrawn",
      value: "25",
    },
  ];

  const handleChange = (value: string) => {
    setHoverIn(false);
  };
  return (
    <>
      <Select
        defaultValue="Opportunity Browsing"
        placeholder="Select an Option"
        style={{
          width: "100%",
          height: "2.8rem",
          border: "none",
          borderRadius: "12px",
          background: "#FFF",
          boxShadow: "0px 4px 25px 0px rgba(29, 78, 216, 0.05)",
        }}
        onChange={handleChange}
        open={hoverIn}
        onMouseEnter={() => {
          setHoverIn(true);
        }}
        bordered={false}
        virtual={false}
        size="large"
      >
        {dropDownData.map((value, index) => (
          <Option
            key={index}
            value={value.label}
            label={value.label}
            onMouseEnter={() => {
              setHoverIn(true);
            }}
            style={{
              height: "2.5rem",
              padding: "10px",
              fontWeight: 600,
              marginTop: "0.7rem",
            }}
          >
            {value.label}
          </Option>
        ))}
      </Select>
    </>
  );
};

export default DropDown;

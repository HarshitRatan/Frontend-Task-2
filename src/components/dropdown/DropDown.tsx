import React from "react";
// import "./dropDown.css";
const DropDown = () => {
  //   const [value, setValue] = React.useState("Select");

  //   const dropdown = {
  //     color: "#0b0b0b",
  //     cursor: "pointer",
  //     height: "50px",
  //     lineHeight: "50px",
  //     position: "relative",
  //     width: "200px",
  //     textAlign: "center",
  //     textDecoration: "none",
  //     zIndex: "1",
  //     transform: "perspective(1000px)",
  //     borderRadius: "16px 16px 0px 6px",
  //     background: "#fff",
  //     boxShadow: "0px 4px 25px 0px rgba(29, 78, 216, 0.05)",
  //   };

  //   const dropdown_menu = {
  //     backgroundColor: "#fff",
  //     listStyleType: "none",
  //     margin: 0,
  //     padding: 0,
  //     position: "absolute",
  //     left: 0,
  //     opacity: 0,
  //     visibility: "hidden",
  //     top: 0,
  //     textAlign: "center",
  //     zIndex: "-99999",
  //   };

  const [hoverIn, setHoverIn] = React.useState(false);

  return (
    <>
      <div
        onMouseEnter={() => {
          setHoverIn(true);
        }}
        onMouseLeave={() => {
          setHoverIn(false);
        }}
      >
        Hover over me
        <ul
          style={{
            display: hoverIn ? "block" : "none",
            zIndex: -999999,
          }}
        >
          <li
            onClick={() => {
              console.log("1");
            }}
          >
            action 1
          </li>
          <li
            onClick={() => {
              console.log("2");
            }}
          >
            action 2
          </li>
          <li
            onClick={() => {
              console.log("3");
            }}
          >
            action 3
          </li>
          <li
            onClick={() => {
              console.log("4");
            }}
          >
            action 4
          </li>
        </ul>
      </div>
    </>
  );
};

export default DropDown;

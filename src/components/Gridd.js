import React from "react";
import { Link } from "react-router-dom";

function Gridd() {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "auto",
    backgroundColor: "#000",
  };

  const rowStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "20px",
  };

  const buttonStyle = {
    height: "200px",
    width: "200px",
    backgroundColor: "powderblue",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    fontSize: "30px",
    borderRadius: "30px",
    padding: "20px",
    margin: "40px",
    border: "2px solid black",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    textDecoration: "none",
    color: "black",
  };

  return (
    <div style={containerStyle}>
      <div>
        <div style={rowStyle}>
          <Link className="col" style={buttonStyle} to="/merge">
            Merge
          </Link>
          <Link className="col" style={buttonStyle} to="/compress">
            Compress
          </Link>
        </div>
        <div style={rowStyle}>
          <Link className="col" style={buttonStyle} to="/ExtractText">
            Extract Text
          </Link>
          <Link className="col" style={buttonStyle} to="/ExtractImage">
            Extract Image
          </Link>
        </div>
        <div>

        <Link className="col" style={buttonStyle} to="/DeletePages">
            Delete Pages
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Gridd;

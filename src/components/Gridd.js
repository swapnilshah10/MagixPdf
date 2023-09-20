import React from "react";
import { Link } from "react-router-dom";

function Gridd() {

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
    <div className="container  bg-dark" >
      <div className= "container " >
        <div className="row">
          <Link className="col" style={buttonStyle} to="/merge">
            Merge
          </Link>
          <Link className="col" style={buttonStyle} to="/compress">
            Compress
          </Link>
        </div>
        <div className="row" > 
          <Link className="col" style={buttonStyle} to="/ExtractText">
            Extract Text
          </Link>
          <Link className="col" style={buttonStyle} to="/ExtractImage">
            Extract Image
          </Link>
        </div>
        <div className="row">

          <Link className="col" style={buttonStyle} to="/DeletePages">
            Delete Pages
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Gridd;

import React from "react";
import { Link } from "react-router-dom";

function Gridd() {
  let stylee = {
    height: 250,
    backgroundColor: "powderblue",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    fontSize: 40,
    fontFamily: "Marck Script",
    borderRadius: 60,
    padding: 20,
    margin: 20,
    border: "2px solid black",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      textDecoration: 'none',
      color : "black"
  };

  const [smerge, setSmerge] = React.useState(stylee);
  const [smerge2, setSmerge2] = React.useState(stylee);
  const [smerge3, setSmerge3] = React.useState(stylee);
  const [smerge4, setSmerge4] = React.useState(stylee);

  return (
    <>
      <div className="container">
        <div className="row">
          <Link
            className="col"
            aria-current="page"
            style={smerge}
            onMouseEnter={() => {
              setSmerge({ ...smerge, backgroundColor: "#1dacd6" });
            }}
            onMouseLeave={() => {
              setSmerge({ ...smerge, backgroundColor: "powderblue" });
            }}
            to="/merge"
          >
            Merge
          </Link>
          <Link
            to="/compress"
            className="col"
            style={smerge2}
            onMouseEnter={() => {
              setSmerge2({ ...smerge, backgroundColor: "#1dacd6" });
            }}
            onMouseLeave={() => {
              setSmerge2({ ...smerge, backgroundColor: "powderblue" });
            }}
          >
            Compress
          </Link>
        </div>
        <div className="row">
          <Link
            to="/ExtractText"
            className="col"
            style={smerge3}
            onMouseEnter={() => {
              setSmerge3({ ...smerge, backgroundColor: "#1dacd6" });
            }}
            onMouseLeave={() => {
              setSmerge3({ ...smerge, backgroundColor: "powderblue" });
            }}
          >
            Extract Text
          </Link>
          <Link
            to="/ExtractImage"
            className="col"
            style={smerge4}
            onMouseEnter={() => {
              setSmerge4({ ...smerge, backgroundColor: "#1dacd6" });
            }}
            onMouseLeave={() => {
              setSmerge4({ ...smerge, backgroundColor: "powderblue" });
            }}
          >
            Extract Image
          </Link>
        </div>
      </div>
    </>
  );
}

export default Gridd;

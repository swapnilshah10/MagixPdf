import React from "react";
import { useState } from "react";
// import Pdfview from "./Pdfview";
import PreviewPdf from "./Preview";

function Compress() {
  let stylee = {
    // fontFamily: "Marck Script",
    fontSize: 30,
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    padding: 20,
    // margin: 20,
    height : "100vh",
    justifyContent: "center",
    color: "#fff",
    backgroundColor: "#000",
  };
  const [file, setFile] = useState(false);
  let url = "http://127.0.0.1:8000/file/reduce/";
  const [output, setOutput] = useState(false);
  const [res, setRes] = useState("");

  let onChangeGetFilesSelected = (e) => {
    setFile(e.target.files);
  };

  var f = [];

  let showFiles = () => {
    f.push(<h1>Sequence</h1>);
    for (let i = 0; i < file.length; i++) {
      f.push(
        <div key={i}>
          {i + 1}. {file[i].name}
          <br />
        </div>
      );
    }
    // f.push(<PreviewPdf file={file}/>)
    return f;
  };

  let uploadfiles = () => {
    var formData = new FormData();

    for (let i = 0; i < file.length; i++) {
      formData.append(`file${i}`, file[i]);
    }

    var myHeaders = new Headers();

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formData,
      redirect: "follow",
    };

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setRes(result);
        setOutput(true);
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div style={stylee}>
      Select Files For Compressing
      <input
        type="file"
        id="files"
        name="files"
        onClick={(e) => {
          e.currentTarget.value = null;
        }}
        onChange={(e) => {
          onChangeGetFilesSelected(e);
        }}
        accept=".pdf"
        multiple={true}
      />
      {output ? (
        <button type="button" className="btn btn-outline-primary">
          <a href={res} target="_blank" rel="noopener noreferrer">
            Download
          </a>
        </button>
      ) : null}

      {file ? showFiles() : null}

      <button className="btn btn-primary" type="submit" onClick={uploadfiles}>
        Submit
      </button>
      {/* {output ? <Pdfview url={res} /> : null} */}
    </div>
  );
}

export default Compress;

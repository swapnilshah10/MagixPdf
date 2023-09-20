import React from "react";
import { useState } from "react";
// import Pdfview from "./Pdfview";
// import PDFPreview from "./Preview";

function Mergee() {
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
  let url = "http://127.0.0.1:8000/file/merge/";
  const [output, setOutput] = useState(false);
  const [res, setRes] = useState("");
  const [err, setError] = useState("");

  var FileSaver = require("file-saver");
  let onChangeGetFilesSelected = (e) => {
    setFile(e.target.files);
    console.log(e.target.files);
  };

  let savee = () => {
    FileSaver.saveAs(res, "Merged.pdf");
  };

  var f = [];

  let showFiles = () => {
    f.push(<h1>Sequence</h1>);
    for (let i = 0; i < file.length; i++) {
      f.push(
        <div key={i} style = {{fontFamily: "Poppins"}}>
          {i + 1}. {file[i].name}
          <br />
        </div>
      );
    }
    return f;
  };

  let uploadfiles = () => {
    setError(false);
    setRes(false);
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
      .catch((error) => {
        console.log("error", error);
        setError(error);
      });
  };

  return (
    <div style={stylee}>
      Select File for merging
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
      {err ? <div style={{ color: "Red"}}>"An Error Occured"</div> : null}
      {file ? showFiles() : null}
      {!output ? (
      <button className="btn btn-primary" type="submit" onClick={uploadfiles}>
        Submit
      </button>) : null
      }
      {output && !err  ? (
        <button type="button" className="btn btn-outline-primary" onClick={savee} >       
            Download
        </button>
      ) : null}
    </div>
  );
}

export default Mergee;

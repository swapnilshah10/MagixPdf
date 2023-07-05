import React from "react";
import { useState } from "react";
// import { saveAs } from 'file-saver';
// import Pdfview from "./Pdfview";

function Extext() {
  var FileSaver = require("file-saver");
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
  let url = "http://127.0.0.1:8000/file/read/";
  const [output, setOutput] = useState(false);
  const [res, setRes] = useState("");
  const [err, setError] = useState("");

  let onChangeGetFilesSelected = (e) => {
    setFile(e.target.files);
  };

  var f = [];

  let showFiles = () => {
    f.push(<h1>Sequence</h1>);
    for (let i = 0; i < file.length; i++) {
      f.push(
        <>
          {i + 1}. {file[i].name}
          <br />
        </>
      );
    }
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
      .then((response) => {
        // console.log(response);
        return response.json();
      })
      .then((result) => {
        setOutput(true);
        console.log(result);
        setRes(result);
      })
      .catch((error) => {
        console.log("error", error);
        setError(error);
      });
  };
  let savee = () => {
    FileSaver.saveAs(res, "Extracted.txt");
  };

  return (
    <div style={stylee}>
      Select FILES to Extract text
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
      {output && !err ? (
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={savee}
        >
          Download
        </button>
      ) : null}
      {err ? <div style={{ color: "Red"}}>"An Error Occured"</div> : null}
      {file ? showFiles() : null}
      <button className="btn btn-primary" type="submit" onClick={uploadfiles}>
        Submit
      </button>
    </div>
  );
}

export default Extext;

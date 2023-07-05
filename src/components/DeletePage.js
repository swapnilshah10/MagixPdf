import React from "react";
import { useState } from "react";
// import Pdfview from "./Pdfview";

function DeletePage() {
  let stylee = {
    // fontFamily: "Marck Script",
    fontSize: 30,
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    padding: 40,
    // margin: 20,
    height: "100vh",
    justifyContent: "center",
    color: "#fff",
    backgroundColor: "#000",
  };
  const [file, setFile] = useState(false);
  let url = "http://127.0.0.1:8000/file/delete/";
  const [output, setOutput] = useState(false);
  const [res, setRes] = useState("");
  const [pagesToDelete, setPagesToDelete] = useState("");

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
      Select Pdf to Delete Pages
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
        multiple={false}
        style={{ padding: "10px", margin: "10px" }}
      />
      {output ? (
        <button type="button" className="btn btn-outline-primary">
          <a href={res} target="_blank" rel="noopener noreferrer">
            Download
          </a>
        </button>
      ) : null}
      <div style={{ padding: "10px", margin: "10px" }}>
        <label>Pages to Delete:</label>
        <input
          type="text"
          value={pagesToDelete}
          onChange={(e) => setPagesToDelete(e.target.value)}
          style={{ margin : '10px' , color : '#fff' , backgroundColor : '#000' , border : '1px solid #fff'}}
        />
      </div>
      {file ? showFiles() : null}
      {/* {output ? <Pdfview url={res} /> : null} */}
      <button className="btn btn-primary" type="submit" onClick={uploadfiles}>
        {" "}
        Submit
      </button>
    </div>
  );
}

export default DeletePage;

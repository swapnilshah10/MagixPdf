import { useState } from "react";

function DeletePage() {
  let stylee = {
    fontSize: 30,
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    padding: 40,
    height: "100vh",
    justifyContent: "center",
    color: "#fff",
    backgroundColor: "#000",
  };

  let url = "http://127.0.0.1:8000/file/delete_page/";
  const [file, setFile] = useState([]);
  const [output, setOutput] = useState(false);
  const [res, setRes] = useState("");
  const [pagesToDelete, setPagesToDelete] = useState("");
  const [err, setError] = useState("");

  let onChangeGetFilesSelected = (e) => {
    setFile(e.target.files);
  };

  var FileSaver = require("file-saver");
  let savee = () => {
    FileSaver.saveAs(res, "Deleted_pages.pdf");
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

    formData.append(`pdf_file`, file[0]);
    formData.append(`pages`, pagesToDelete);
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
        setError(true);
        console.log("error", error)
      });
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
      <div style={{ padding: "10px", margin: "10px" }}>
        <label>Pages to Delete:</label>
        <input
          type="text"
          value={pagesToDelete}
          onChange={(e) => setPagesToDelete(e.target.value)}
          style={{
            margin: "10px",
            color: "#fff",
            backgroundColor: "#000",
            border: "1px solid #fff",
          }}
        />
      </div>
      {file ? showFiles() : null}
      {!output ? (
        <button className="btn btn-primary" type="submit" onClick={uploadfiles}>
          {" "}
          Submit
        </button>
      ) : null}
      {output ? (

          <button className="btn btn-outline-primary"  target="_blank" rel="noopener noreferrer"  onClick={savee}>
            Download
          </button>

      ) : null}
    </div>
  );
}

export default DeletePage;

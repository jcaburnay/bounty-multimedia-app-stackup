import React, { useState, useEffect } from "react";
import { data } from "./data";
import { Header } from "./components/Header";
import { Chart } from "./components/Chart";
import { File } from "./components/File";
import { ViewFile } from "./components/ViewFile";

export default function App() {
  const filesData = [...data];
  const filePath = "/file-server/";
  const [myFiles, setMyFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [showChartModal, setShowChartModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setMyFiles(data);
  }, []);

  const handleOnRename = () => {
    if (selectedFile) {
      const newFiles = myFiles.map((file) => {
        if (file.id === selectedFile.id) {
          return {
            ...file,
            name: prompt("Enter new name"),
          };
        }
        return file;
      });
      setMyFiles(newFiles);
      setSelectedFile(null);
    }
  };

  const handleViewChart = () => {
    setShowChartModal(true);
  };

  const handleOnDownload = () => {
    if (selectedFile) {
      window.open(selectedFile.path, "_blank");
    }
  };

  const handleOnDelete = () => {
    if (selectedFile) {
      setMyFiles(myFiles.filter((file) => file.name !== selectedFile.name));
      setSelectedFile(null);
    }
  };

  const handleOnChange = (event) => {
    if (event.target.value === "") {
      setMyFiles(filesData);
    }
    if (event.target.value === "name") {
      setMyFiles([...myFiles].sort((a, b) => a.name.localeCompare(b.name)));
    }
    if (event.target.value === "type") {
      const typeCounts = {};
      myFiles.forEach((obj) => {
        const type = obj.type.toLowerCase();
        typeCounts[type] = (typeCounts[type] || 0) + 1;
      });
      setMyFiles(
        [...myFiles].sort((a, b) => {
          const countA = typeCounts[a.type.toLowerCase()];
          const countB = typeCounts[b.type.toLowerCase()];
          return countB - countA;
        })
      );
    }
    if (event.target.value === "size") {
      setMyFiles([...myFiles].sort((a, b) => b.size - a.size));
    }
  };

  const handleClickFile = (file) => {
    if (selectedFile && selectedFile.id === file.id) {
      setSelectedFile(null);
      return;
    }
    setSelectedFile(file);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    if (!event.target.value) {
      setMyFiles(filesData);
    }
  };

  const handleClickSearch = () => {
    const filteredItems = myFiles.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setMyFiles(filteredItems);
  };

  const handleSubmitSearch = (event) => {
    event.preventDefault();
    handleClickSearch();
  };

  const handleFocus = (event) => {
    event.target.style.outline = "1px solid #000";
    event.target.style.border = "none";
  };
  const handleBlur = (event) => {
    event.target.style.outline = "";
    event.target.style.border = "1px solid #ccc";
  };
  return (
    <>
      <Chart
        myFiles={myFiles}
        showChartModal={showChartModal}
        setShowChartModal={setShowChartModal}
      />
      <div className="App">
        <Header />
        <div style={styles.container}>
          <div style={{ padding: 10, paddingBottom: 0 }}>
            <p style={{ fontWeight: "bold" }}>My Files</p>
            <p>{selectedFile ? selectedFile.path : filePath}</p>
          </div>
          <div style={styles.controlTools}>
            <button style={styles.controlButton} onClick={handleOnRename}>
              Rename
            </button>
            <button style={styles.controlButton} onClick={handleViewChart}>
              Files Breakdown
            </button>
            <button style={styles.controlButton} onClick={handleOnDownload}>
              Download
            </button>
            <button style={styles.controlButton} onClick={handleOnDelete}>
              Delete
            </button>
            <select style={styles.controlButton} onChange={handleOnChange}>
              <option value="">Sort By</option>
              <option value="name">Name</option>
              <option value="type">Type</option>
              <option value="size">Size</option>
            </select>
            <form onSubmit={handleSubmitSearch} style={styles.form}>
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search file name..."
                style={styles.inputSearch}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              <button type="submit" style={styles.searchBtn}>
                Search
              </button>
            </form>
          </div>
          <div style={styles.fileContainer}>
            <div style={{ width: "100%", padding: 10 }}>
              {myFiles.map((file) => {
                const isActiveFile =
                  !!selectedFile && selectedFile.id === file.id;
                return (
                  <File
                    isActiveFile={isActiveFile}
                    handleClickFile={() => handleClickFile(file)}
                    file={file}
                    key={file.id}
                  />
                );
              })}
            </div>
            <ViewFile selectedFile={selectedFile} />
          </div>
        </div>
      </div>
    </>
  );
}

const styles = {
  container: {
    backgroundColor: "#fff",
    color: "#000",
  },
  fileContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexDirection: "row",
  },
  controlTools: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    flexDirection: "row",
    padding: "10px",
  },
  controlButton: {
    padding: "10px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    backgroundColor: "#eee",
    outline: "none",
  },
  inputSearch: {
    padding: "10px",
    border: "1px solid #ccc",
  },
  searchBtn: {
    padding: "10px",
    border: "none",
  },
  form: {
    display: "flex",
    gap: "12px",
  },
};

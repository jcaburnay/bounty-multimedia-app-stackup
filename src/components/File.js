export const File = (props) => {
  const { isActiveFile, file, handleClickFile } = props;
  return (
    <div
      style={isActiveFile ? styles.activeFile : styles.inactiveFile}
      className="files"
      key={file.id}
      onClick={handleClickFile}
    >
      <p>{file.name}</p>
    </div>
  );
};

const styles = {
  inactiveFile: {
    backgroundColor: "#eee",
    padding: "10px",
    marginBottom: "10px",
    cursor: "pointer",
    width: "100%",
  },
  activeFile: {
    backgroundColor: "#44B3FF",
    padding: "10px",
    marginBottom: "10px",
    cursor: "pointer",
    width: "100%",
  },
};

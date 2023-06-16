import { AudioPlayer } from "./AudioPlayer";
import { DocumentViewer } from "./DocumentViewer";
import { ImageViewer } from "./ImageViewer";
import { VideoPlayer } from "./VideoPlayer";

export const ViewFile = ({ selectedFile }) => {
  if (!selectedFile) return null;
  return (
    <div style={styles.fileViewer}>
      {selectedFile.type === "video" && (
        <VideoPlayer path={selectedFile.path} />
      )}
      {selectedFile.type === "audio" && (
        <AudioPlayer path={selectedFile.path} />
      )}
      {selectedFile.type === "document" && (
        <DocumentViewer path={selectedFile.path} />
      )}
      {selectedFile.type === "image" && (
        <ImageViewer path={selectedFile.path} />
      )}
      <p style={{ fontWeight: "bold", marginTop: 10 }}>{selectedFile.name}</p>
      <p>
        path: <span style={{ fontStyle: "italic" }}>{selectedFile.path}</span>
      </p>
      <p>
        file type:{" "}
        <span style={{ fontStyle: "italic" }}>{selectedFile.type}</span>
      </p>
      <p>
        file size:{" "}
        <span style={{ fontStyle: "italic" }}>
          {selectedFile.size > 1000
            ? `${selectedFile.size / 1000}MB`
            : `${selectedFile.size}KB`}
        </span>
      </p>
    </div>
  );
};

const styles = {
  fileViewer: {
    padding: "10px",
    margin: "10px",
    width: "30vw",
    height: "100vh",
    cursor: "pointer",
    borderLeft: "1px solid #000",
  },
};

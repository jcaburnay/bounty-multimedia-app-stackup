import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export function Chart({ myFiles, showChartModal, setShowChartModal }) {
  const barChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Files Breakdown",
      },
    },
  };
  if (!showChartModal) return null;

  return (
    <div style={styles.modal}>
      <div style={styles.modalContent}>
        <div style={styles.modalHeader}>
          <p style={{ fontWeight: "bold" }}>Files Breakdown</p>
          <button
            style={styles.closeButton}
            onClick={() => setShowChartModal(false)}
          >
            close
          </button>
        </div>
        <div style={styles.modalBody}>
          <Pie
            data={{
              labels: ["Video", "Audio", "Document", "Image"],
              datasets: [
                {
                  label: "Files Breakdown",
                  data: [
                    myFiles.filter((file) => file.type === "video").length,
                    myFiles.filter((file) => file.type === "audio").length,
                    myFiles.filter((file) => file.type === "document").length,
                    myFiles.filter((file) => file.type === "image").length,
                  ],
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                  ],
                  borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                  ],
                  borderWidth: 1,
                },
              ],
            }}
          />
          <Bar
            data={{
              labels: ["Video", "Audio", "Document", "Image"],
              datasets: [
                {
                  label: "Files Breakdown",
                  data: [
                    myFiles.filter((file) => file.type === "video").length,
                    myFiles.filter((file) => file.type === "audio").length,
                    myFiles.filter((file) => file.type === "document").length,
                    myFiles.filter((file) => file.type === "image").length,
                  ],
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                  ],
                  borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                  ],
                  borderWidth: 1,
                },
              ],
            }}
            options={barChartOptions}
          />
        </div>
      </div>
    </div>
  );
}

const styles = {
  modal: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "1",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: "20px",
    height: "50vh",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
  },
  modalBody: {
    width: "100%",
    height: "90%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: "10px",
  },
  modalHeader: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  closeButton: {
    padding: "10px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    backgroundColor: "#eee",
  },
};

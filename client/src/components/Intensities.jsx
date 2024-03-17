import { Bar } from "react-chartjs-2";
import graphsDataLabels from "chartjs-plugin-datalabels";
import { Heading, Box } from "@chakra-ui/react";
import Pagination from "@mui/material/Pagination";

const Intensities = ({ fullData }) => {
  const data = fullData.slice(0, 30);
  const intensities = data.map((each) => each.intensity);
  const years = data.map((item) => item.start_year);

  const barColor = (value) => {
    const colors = ["#4CAF50", "#FFC107", "#2196F3", "#FF5722"];
    const limits = Math.max(...intensities) / 4;
    if (value < limits) {
      return colors[0];
    } else if (value < limits * 2) {
      return colors[1];
    } else if (value < limits * 3) {
      return colors[2];
    } else {
      return colors[3];
    }
  };

  const graphsData = {
    labels: years,
    datasets: [
      {
        label: "Intensity",
        backgroundColor: intensities.map((value) => barColor(value)),
        data: intensities,
        barThickness: 35,
      },
      intensities,
    ],
  };

  const chartOptions = {
    layout: {
      padding: { top: 20, bottom: 20, left: 20, right: 20 },
    },
    plugins: {
      tooltip: {
        enabled: true,
        backgroundColor: "rgba(0,0,0,0.8)",
        titleColor: "white",
        bodyColor: "white",
        borderColor: "white",
        borderWidth: 1,
        cornerRadius: 5,
        displayColors: false,
      },
      legend: { display: false },
      datalabels: {
        anchor: "end",
        align: "start",
        offset: -20,
        font: { size: 14, weight: "bold" },
        formatter: (value) => value + "%",
        shadowBlur: 10,
        shadowColor: "white",
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { font: { family: "Poppins", size: 14, weight: "bold" } },
      },
      y: {
        grid: { display: false },
        ticks: {
          font: { family: "Poppins", size: 14, weight: "bold" },
          callback: (value) => value + "%",
        },
      },
    },
    animation: {
      duration: 4000,
      easing: "easeInOutQuart",
      mode: "progressive",
    },
  };

  return (
    <Box
      m={5}
      p={5}
      borderRadius="8px"
      boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
    >
      <Heading as="h2" mb={4}>
        Intensity Chart
      </Heading>
      <Bar
        data={graphsData}
        options={chartOptions}
        plugins={[graphsDataLabels]}
      />
      <Pagination count={10} color="secondary" />
    </Box>
  );
};

export default Intensities;

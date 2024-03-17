import { Bar } from "react-chartjs-2";
import graphsDataLabels from "chartjs-plugin-datalabels";
import { Heading, Box } from "@chakra-ui/react";

const Intensities = ({ fullData }) => {
  const data = fullData.slice(0, 30);
  const intensities = data.map((each) => each.intensity);
  const years = data.map((item) => item.start_year);

  const colorRanges = [
    { min: 0, max: 10, color: "green" },
    { min: 10, max: 20, color: "orange" },
    { min: 10, max: 20, color: "yellow" },
    { min: 20, max: 30, color: "magenta" },
    { min: 30, max: 40, color: "#0080FF" },
    { min: 40, max: 50, color: "skyblue" },
    { min: 50, max: 60, color: "maroon" },
    { min: 60, max: 100, color: "darkred" },
  ];

  const getColor = (intensity) => {
    for (const range of colorRanges) {
      if (intensity >= range.min && intensity < range.max) {
        return range.color;
      }
    }
    return "gray";
  };

  const graphsData = {
    labels: years,
    datasets: [
      {
        label: "Intensity",
        backgroundColor: intensities.map((value) => getColor(value)),
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
      borderRadius="10px"
      boxShadow="0px 0px 15px gray"
      backgroundColor="#e3e3e342"
    >
      <Heading as="h2" mb={4}>
        Intensities
      </Heading>
      <Bar
        data={graphsData}
        options={chartOptions}
        plugins={[graphsDataLabels]}
      />
    </Box>
  );
};

export default Intensities;

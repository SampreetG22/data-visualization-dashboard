import React from "react";
import { Pie } from "react-chartjs-2";
import { Box, Heading } from "@chakra-ui/react";

const PieChart = ({ data }) => {
  const calculateSectorIntensities = (data) => {
    const sectors = {};
    data.forEach((entry) => {
      if (!sectors[entry.sector]) {
        sectors[entry.sector] = 0;
      }
      sectors[entry.sector] += entry.intensity;
    });
    return sectors;
  };
  const getRandomColor = (index) => {
    const colors = [
      "#FF0080",
      "#00BFFF",
      "#FFD700",
      "#32CD32",
      "#FF4500",
      "#9400D3",
      // Add more colors as needed
    ];
    return colors[index % colors.length];
  };

  const sectors = calculateSectorIntensities(data);

  const chartData = {
    labels: Object.keys(sectors),
    datasets: [
      {
        data: Object.values(sectors),
        backgroundColor: Object.keys(sectors).map((_, index) =>
          getRandomColor(index)
        ),
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        position: "average",
      },
    },
  };

  return (
    <Box m={5} pb={100} maxHeight={700} overflow="hidden">
      <Heading as="h2" mb={4}>
        Sectors{" "}
      </Heading>
      <Pie data={chartData} options={chartOptions} />
    </Box>
  );
};

export default PieChart;

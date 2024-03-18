import React from "react";
import { PolarArea } from "react-chartjs-2";
import { Box, Heading } from "@chakra-ui/react";

const Topics = ({ data }) => {
  const topics = data.map((item) => item.topic);
  const colors = [
    "rgba(255, 99, 132, 0.9)",
    "rgba(54, 162, 235, 0.9)",
    "rgba(255, 205, 86, 0.9)",
    "rgba(75, 192, 192, 0.9)",
    "rgba(153, 102, 255, 0.6)",
  ];

  // Function to generate chart data
  const generateChartData = (data) => {
    return {
      labels: data.map((item) => item.topic),
      datasets: [
        {
          data: data.map((item) => item.relevance),
          backgroundColor: colors,
          borderColor: colors.map((color) => color.replace("0.6", "1")), // Adjust border opacity
          borderWidth: 1,
        },
      ],
    };
  };

  const chartData = generateChartData(data);

  const chartOptions = {
    scale: {
      ticks: {
        beginAtZero: true,
        stepSize: 1,
        max: 5,
      },
    },
  };

  return (
    <Box>
      <Heading as="h2" mb={4} textAlign="center">
        Topics
      </Heading>
      <PolarArea data={chartData} options={chartOptions} />
    </Box>
  );
};

export default Topics;

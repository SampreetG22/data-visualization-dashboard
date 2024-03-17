import React from "react";
import { Radar } from "react-chartjs-2";
import { Box, useColorModeValue, Heading } from "@chakra-ui/react";

const Likelyhood = ({ fullData }) => {
  const data = fullData.slice(0, 30);
  const chartData = {
    labels: data.map((entry) => entry.country),
    datasets: [
      {
        label: "Likelihood",
        data: data.map((entry) => entry.likelihood),
        backgroundColor: useColorModeValue(
          "rgba(79, 59, 169, 0.7)",
          "rgba(144, 104, 190, 0.7)"
        ),
        borderColor: useColorModeValue(
          "rgba(79, 59, 169, 1)",
          "rgba(144, 104, 190, 1)"
        ),
        borderWidth: 2,
        pointBackgroundColor: useColorModeValue("white", "black"),
        pointBorderColor: useColorModeValue(
          "rgba(79, 59, 169, 1)",
          "rgba(144, 104, 190, 1)"
        ),
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scale: {
      ticks: {
        beginAtZero: true,
        min: 0,
        max: 5,
        stepSize: 1,
      },
    },
  };

  return (
    <Box pb={100} maxHeight={700} overflow="hidden">
      <Heading as="h2" mb={4}>
        Likelihood Chart
      </Heading>
      <Radar data={chartData} options={chartOptions} />
    </Box>
  );
};

export default Likelyhood;

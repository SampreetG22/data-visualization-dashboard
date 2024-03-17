import React from "react";
import { Bubble } from "react-chartjs-2";
import { Box, Heading } from "@chakra-ui/react";

const Relevance = ({ fullData }) => {
  const data = fullData.slice(0, 30);

  // Define a function to determine bubble color based on relevance
  const getBubbleColor = (relevance) => {
    if (relevance >= 0.75) {
      return "rgba(0, 255, 0, 0.7)"; // Green
    } else if (relevance >= 0.5) {
      return "rgba(255, 255, 0, 0.7)"; // Yellow
    } else if (relevance >= 0.25) {
      return "rgba(255, 165, 0, 0.7)"; // Orange
    } else {
      return "rgba(255, 0, 0, 0.7)"; // Red
    }
  };

  const chartData = {
    datasets: [
      {
        label: "Relevance",
        data: data.map((item) => ({
          x: item.likelihood,
          y: item.impact,
          r: item.relevance * 5,
          backgroundColor: getBubbleColor(item.relevance), // Set bubble color based on relevance
        })),
      },
      {
        label: "Intensity",
        data: data.map((item) => ({
          x: item.likelihood,
          y: item.impact,
          r: item.intensity,
        })),
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        type: "linear",
        position: "bottom",
        title: {
          display: true,
          text: "Likelihood",
        },
      },
      y: {
        title: {
          display: true,
          text: "Impact",
        },
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  return (
    <Box
      w="97%"
      ml={5}
      mb={20}
      p={4}
      mt={8}
      borderRadius="10px"
      boxShadow="0px 0px 15px gray"
      backgroundColor="#e3e3e342"
    >
      <Heading as="h2" mb={4}>
        Relevances
      </Heading>
      <Bubble data={chartData} options={chartOptions} />
    </Box>
  );
};

export default Relevance;

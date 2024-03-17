import React from "react";
import { Bubble } from "react-chartjs-2";
import { Box, Heading } from "@chakra-ui/react";

const Relevance = ({ fullData }) => {
  const data = fullData.slice(0, 30);
  const chartData = {
    datasets: [
      {
        label: "Relevance",
        data: data.map((item) => ({
          x: item.likelihood,
          y: item.impact,
          r: item.relevance * 5,
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
      w="92%"
      margin={50}
      p={4}
      mt={8}
      borderRadius="10px"
      boxShadow="0px 0px 15px gray"
      backgroundColor="#e3e3e342"
    >
      <Heading as="h2" mb={4}>
        Relevance Chart
      </Heading>
      <Bubble data={chartData} options={chartOptions} />
    </Box>
  );
};

export default Relevance;

import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Box, Heading } from "@chakra-ui/react";

const Regions = ({ fullData }) => {
  const data = fullData.slice(0, 50);
  const regionCounts = {};
  data.forEach((item) => {
    if (item.region in regionCounts) {
      regionCounts[item.region]++;
    } else {
      regionCounts[item.region] = 1;
    }
  });

  const chartData = {
    labels: Object.keys(regionCounts),
    datasets: [
      {
        data: Object.values(regionCounts),
        backgroundColor: [
          "green",
          "orange",
          "#FFCE56",
          "magenta",
          "#FF9800",
          "#0080FF",
          "skyblue",
        ],
      },
    ],
  };

  return (
    <Box>
      <Heading as="h2" mb={4}>
        Regions
      </Heading>
      <Doughnut data={chartData} />
    </Box>
  );
};

export default Regions;

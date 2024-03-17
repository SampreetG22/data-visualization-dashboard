import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Box, Heading } from "@chakra-ui/react";

const Regions = ({ fullData }) => {
  const data = fullData.slice(0, 50);

  // Function to count occurrences of each region
  const countRegions = (data) => {
    const regionCounts = {};
    data.forEach((item) => {
      if (item.region in regionCounts) {
        regionCounts[item.region]++;
      } else {
        regionCounts[item.region] = 1;
      }
    });
    return regionCounts;
  };
  const generateColors = (count) => {
    const colors = [];
    for (let i = 0; i < count; i++) {
      const hue = (i * 137.508) % 360;
      colors.push(`hsl(${hue}, 70%, 50%)`);
    }
    return colors;
  };

  const regionCounts = countRegions(data);
  const labels = Object.keys(regionCounts);
  const counts = Object.values(regionCounts);

  const chartData = {
    labels: labels,
    datasets: [
      {
        data: counts,
        backgroundColor: generateColors(labels.length),
      },
    ],
  };

  return (
    <Box>
      <Heading as="h2" mb={4} textAlign="center">
        Regions
      </Heading>
      <Doughnut data={chartData} />
    </Box>
  );
};

export default Regions;

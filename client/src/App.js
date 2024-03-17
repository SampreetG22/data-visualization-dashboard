import { useState, useEffect } from "react";
import axios from "axios";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { ChakraProvider, Flex, Box, Grid } from "@chakra-ui/react";

import Intensities from "./components/Intensities";
import Regions from "./components/Regions";
import Relevance from "./components/Relevance";
import Topics from "./components/Topics";
import PieChart from "./components/SectorChart";
import Countries from "./components/Countries";
import Likelyhood from "./components/Likelyhood";

Chart.register(CategoryScale);

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/data");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <ChakraProvider>
      <Intensities fullData={data} />
      <Flex direction={{ base: "column", md: "row" }} m={0}>
        <Box
          flex={{ base: "1", md: "0.5" }}
          maxW="50%"
          p={5}
          m={2}
          boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
          borderRadius={20}
        >
          <Regions data={data} />
        </Box>
        <Box
          flex={{ base: "1", md: "0.5" }}
          maxW="50%"
          p={5}
          m={2}
          boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
          borderRadius={20}
        >
          <Topics data={data} />
        </Box>
      </Flex>
      <Relevance data={data} />
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
        <Box>
          <PieChart data={data} />
        </Box>
        <Box>
          <Likelyhood data={data} />
        </Box>
      </Grid>
      <Countries data={data} />
    </ChakraProvider>
  );
};

export default App;

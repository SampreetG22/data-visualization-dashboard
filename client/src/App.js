import { useState, useEffect } from "react";
import axios from "axios";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { ChakraProvider, Flex, Box, Grid } from "@chakra-ui/react";
import Intensities from "./components/Intensities";
import Regions from "./components/Regions";
import Relevance from "./components/Relevances";
import Topics from "./components/Topics";
import PieChart from "./components/Sectors";
import Countries from "./components/Countries";
import Likelyhood from "./components/Likelyhoods";
import "./App.css";

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
      <Relevance fullData={data} />
      <Flex direction={{ base: "column", md: "row" }}>
        <Box
          flex={{ base: "1", md: "0.5" }}
          maxW="45%"
          p={5}
          ml={10}
          mb={20}
          borderRadius="10px"
          boxShadow="0px 0px 15px gray"
          backgroundColor="#e3e3e342"
        >
          <Regions fullData={data} />
        </Box>
        <Box
          flex={{ base: "1", md: "0.5" }}
          maxW="45%"
          p={5}
          ml={10}
          mb={20}
          borderRadius="10px"
          boxShadow="0px 0px 15px gray"
          backgroundColor="#e3e3e342"
        >
          <Topics fullData={data} />
        </Box>
      </Flex>
      <Countries fullData={data} />
      <Flex direction={{ base: "column", md: "row" }}>
        <Box
          flex={{ base: "1", md: "0.5" }}
          maxW="45%"
          p={5}
          ml={10}
          borderRadius="10px"
          boxShadow="0px 0px 15px gray"
          backgroundColor="#e3e3e342"
        >
          <PieChart fullData={data} />
        </Box>
        <Box
          flex={{ base: "1", md: "0.5" }}
          maxW="45%"
          p={5}
          ml={10}
          borderRadius="10px"
          boxShadow="0px 0px 15px gray"
          backgroundColor="#e3e3e342"
        >
          <Likelyhood fullData={data} />
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

export default App;

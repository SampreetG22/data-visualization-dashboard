import { useState, useEffect } from "react";
import axios from "axios";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import {
  ChakraProvider,
  Flex,
  Box,
  Spinner,
  Tooltip,
  Heading,
  Center,
} from "@chakra-ui/react";
import Intensities from "./components/Intensities";
import Regions from "./components/Regions";
import Relevance from "./components/Relevances";
import Topics from "./components/Topics";
import PieChart from "./components/Sectors";
import Countries from "./components/Countries";
import Likelyhood from "./components/Likelyhoods";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import "./App.css";

Chart.register(CategoryScale);

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 30;

  useEffect(() => {
    fetchData();
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/data");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevious = () => {
    currentPage > 0 && setCurrentPage((prevPage) => prevPage - 1);
  };

  const slicedData = data.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <>
      {loading ? (
        <>
          <Spinner
            mt="20%"
            ml="48%"
            thickness="4px"
            speed="0.65s"
            emptyColor="purple.200"
            color="purple"
            size="xl"
          />
          <p
            style={{
              marginLeft: "35%",
              fontSize: "1.6vw",
              marginTop: "2%",
              color: "purple",
              fontWeight: 550,
            }}
          >
            Hold on. We're getting the stats for you....
          </p>
        </>
      ) : (
        <ChakraProvider>
          <Heading
            as="h1"
            textAlign={"center"}
            color={"white"}
            fontFamily={"Poppins"}
            fontWeight={"500"}
            m="auto"
            mt={10}
            mb={-10}
            p={3}
            borderRadius={10}
            textTransform={"uppercase"}
            backgroundColor={"purple"}
            w="50%"
          >
            Data Visualization Board
          </Heading>
          <Tooltip label="Previous">
            <ArrowBackIcon
              onClick={handlePrevious}
              w={41}
              h={41}
              color="white"
              style={{
                position: "sticky",
                top: "25vw",
                backgroundColor: currentPage === 0 ? "gray" : "purple",
                borderRadius: "50%",
                padding: "5px",
                cursor: currentPage === 0 ? "default" : "pointer",
              }}
            />
          </Tooltip>
          <Tooltip label="Next">
            <ArrowForwardIcon
              onClick={handleNext}
              w={41}
              h={41}
              color={"white"}
              style={{
                position: "sticky",
                top: "25vw",
                left: "100vw",
                backgroundColor: "purple",
                borderRadius: "50%",
                padding: "7px",
                cursor: "pointer",
              }}
            />
          </Tooltip>
          <Intensities data={slicedData} />
          <Flex direction={{ base: "column", md: "row" }} mt={20} mb={20}>
            <Box
              flex={{ base: "1", md: "0.5" }}
              maxW="50%"
              p={5}
              m={5}
              borderRadius="10px"
              boxShadow="0px 0px 15px gray"
              backgroundColor="#e3e3e342"
            >
              <PieChart data={slicedData} />
            </Box>
            <Box
              flex={{ base: "1", md: "0.5" }}
              maxW="50%"
              p={5}
              m={5}
              borderRadius="10px"
              boxShadow="0px 0px 15px gray"
              backgroundColor="#e3e3e342"
            >
              <Likelyhood data={slicedData} />
            </Box>
          </Flex>
          <Relevance data={slicedData} />
          <Flex direction={{ base: "column", md: "row" }}>
            <Box
              flex={{ base: "1", md: "0.5" }}
              maxW="50%"
              p={5}
              m={5}
              borderRadius="10px"
              boxShadow="0px 0px 15px gray"
              backgroundColor="#e3e3e342"
            >
              <Regions data={slicedData} />
            </Box>
            <Box
              flex={{ base: "1", md: "0.5" }}
              maxW="50%"
              p={5}
              m={5}
              borderRadius="10px"
              boxShadow="0px 0px 15px gray"
              backgroundColor="#e3e3e342"
            >
              <Topics data={slicedData} />
            </Box>
          </Flex>
          <Countries data={slicedData} />
        </ChakraProvider>
      )}
    </>
  );
};

export default App;

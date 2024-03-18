import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lander from "./components/Lander";

ReactDOM.render(
  <Router>
    <ChakraProvider>
      <Routes>
        <Route path="/" exact Component={Lander} />
        <Route path="/statistics" Component={App} />
      </Routes>
    </ChakraProvider>
  </Router>,
  document.getElementById("root")
);

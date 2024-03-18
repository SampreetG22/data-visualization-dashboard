import React, { useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./Lander.css";

const Lander = () => {
  const [firstTypedText, setFirstTypedText] = useState("");
  const [secondTypedText, setSecondTypedText] = useState("");

  const firstFullText =
    "Welcome to the U.S. Energy Information Administration's (EIA) ";
  const secondFullText = "Annual Energy Outlook";

  useEffect(() => {
    let index = 0;
    const firstInterval = setInterval(() => {
      if (index === firstFullText.length) {
        clearInterval(firstInterval);
        startSecondTyping();
        return;
      }
      setFirstTypedText(
        (prevTypedText) => prevTypedText + firstFullText[index]
      );
      index++;
    }, 30);

    return () => clearInterval(firstInterval);
  }, []);

  const startSecondTyping = () => {
    let index = 0;
    const secondInterval = setInterval(() => {
      if (index === secondFullText.length) {
        clearInterval(secondInterval);
        return;
      }
      setSecondTypedText(
        (prevTypedText) => prevTypedText + secondFullText[index]
      );
      index += 1;
    }, 30);
  };

  return (
    <div className="landerContainer">
      <div className="headerAndGif">
        <h1 className="mainHeading">
          {firstTypedText}
          <br /> <span className="mainHeader">{secondTypedText}</span>
        </h1>
        <img src="./statistics.gif" alt="Gif" className="gif" />
      </div>
      <Link to="/statistics">
        <Button className="button">Get Statistics</Button>
      </Link>
    </div>
  );
};

export default Lander;

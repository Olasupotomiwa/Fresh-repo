import React from "react";
import { Container } from "@chakra-ui/react";
import "../Homepage/Homepage.css";
import Card from "../Homepage/Card";
import Faqs from "../Homepage/Faqs";
import Countdown from "../Homepage/Countdown";
import Hero from "../Homepage/Hero";

import Conditional from "../Homepage/Conditional";
import Footer from "components/Footer";

const Homepage = () => {
  return (
    <Container maxW="full" bg="black" px={0}>
      <Hero />
      <Card />
      <Conditional />
      <Countdown />
      <Faqs />
      <Footer />
    </Container>
  );
};

export default Homepage;

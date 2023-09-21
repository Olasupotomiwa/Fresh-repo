import React from "react";
import { Container } from "@chakra-ui/react";
import Card from "../Homepage/Card";
import Faqs from "../Homepage/Faqs";
import Countdown from "../Homepage/Countdown";
import Hero from "../Homepage/Hero";
import Testimonial from '../Homepage/Testimonial'

import Conditional from "../Homepage/Conditional";
import Footer from "components/Footer";

const Homepage = () => {
  return (
    <Container maxW="full" bg="black" pt='20' px={0}>
      <Hero />
      <Card />
      <Conditional />
      <Countdown />
      <Testimonial/>
      <Faqs />
      <Footer />
    </Container>
  );
};

export default Homepage;

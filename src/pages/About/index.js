import React from "react";
import { Container, Heading, Box } from "@chakra-ui/react";
import Business from "../Homepage/Business";
import Earners from "../Homepage/Earners";
import Individuals from "../Homepage/Individuals";

import Hero from "../About/Hero";


import Footer from "components/Footer";

const Homepage = () => {
  return (
    <Container maxW="full" bg="black" px={0}>
      <Hero />

      <Box py={3} px={6}>
        <Heading
          textAlign="center"
          color="white"
          mt={8}
          fontWeight={600}
          fontSize="32px"
        >
          Our offers <span style={{ color: "#CB29BE" }}>for Earners</span>
        </Heading>
        <Earners />
      </Box>

      <Box pt={3} px={{ base: "6", md: "6" }} mt={-6} fontSize="32px">
        <Heading textAlign="center" color="white" fontWeight={600}fontSize='32px'>
          Our offers <span style={{ color: "#CB29BE" }}>for Businesses</span>
        </Heading>
        <Business />
      </Box>

      <Box pt={3} px={{ base: "10", md: "6" }} mt={-6}>
        <Heading
          textAlign="center"
          color="white"
          fontWeight={600}
          fontSize="32px"
        >
          Our offers <span style={{ color: "#CB29BE" }}>for Individuals</span>
        </Heading>
        <Individuals />
      </Box>

      <Footer />
    </Container>
  );
};

export default Homepage;

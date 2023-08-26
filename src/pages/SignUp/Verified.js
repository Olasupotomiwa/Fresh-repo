import React from "react";
import {
  Container,
  Grid,
  Center,
  Image,
  Heading,
  Text,
  Box,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import Onboard from "assets/images/onboard.png";
import Footer from "components/Footer";

const Verified = () => {
  return (
    <Container maxWidth="100vw" bg="black" px={0} pt='10'>
      <Grid
        templateColumns={{ base: "1fr", md: "2.3fr 7.7fr" }}
      
        fontFamily="clash grotesk"
      >
        <Image
          src={Onboard}
          alt="Onboarding_pics"
          objectFit="cover"
          display={{ base: "none", md: "flex" }}
          height='full'
         
        />
       
      </Grid>

      <Footer />
    </Container>
  );
};

export default Verified;



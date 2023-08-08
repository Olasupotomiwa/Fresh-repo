import React from "react";
import {
  Container,
  Grid,
 
  Image,
  Heading,
  Text,
  Box,

} from "@chakra-ui/react";

import Onboard from "assets/images/onboard.png";
import Footer from "components/Footer";

const Login = () => {
  return (
    <Container maxWidth="100vw" bg="black" px={0}>
      <Grid
        templateColumns={{ base: "1fr", md: "2.6fr 7.4fr" }}
        fontFamily="clash grotesk"
      >
        <Image
          src={Onboard}
          alt="Onboarding_pics"
          objectFit="cover"
          display={{ base: "none", md: "flex" }}
          width="full"
          height="100%"
        />
        <Box
          color="white"
          bg="black"
          textAlign="center"
          mx="auto"
          my={20}
          fontFamily="clash grotesk"
          width={{ base: "80%", md: "400px" }}
        >
          <Heading
            textAlign="center"
            fontFamily="clash grotesk"
            fontWeight="500"
          >
           Welcome back
            
          </Heading>
          <Text fontSize="sm" color="#808080" textAlign="center" mt={2}>
           This page is under development, check back later
          </Text>
         
        </Box>
      </Grid>

      <Footer />
    </Container>
  );
};

export default Login;

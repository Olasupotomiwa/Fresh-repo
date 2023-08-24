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
        <Box
          color="white"
          bg="black"
          textAlign="center"
        
          mx="auto"
          mt='100'
          height='100vh'
          fontFamily="clash grotesk"
          width={{ base: "80%", md: "500px" }}
        >
          <iconify-icon
            icon="solar:verified-check-bold"
            style={{ color: "#CB29BE" }}
            width="120"
          ></iconify-icon>
          <Heading
            textAlign="center"
            fontFamily="clash grotesk"
            fontWeight="500"
          >
            Account verified
          </Heading>
          <Text fontSize="sm" color="#808080" textAlign="center" mt={2}>
            Your account has been verified successfully
          </Text>
          <Center>
            <Button
              bg="#CB29BE"
              color="white"
              fontWeight={500}
              rounded="25px"
              px={10}
              width={{ base: "80%", md: "500px" }}
              mt={8}
              mb={2}
              _hover={{ bg: "#CB29BE", opacity: "0.9" }}
              fontFamily="clash grotesk"
              display="flex"
              justifyContent="center"
              as={Link}
              to='/log-in'
            >
              Go to profile <ArrowForwardIcon ml={3} />
            </Button>
          </Center>
        </Box>
      </Grid>

      <Footer />
    </Container>
  );
};

export default Verified;



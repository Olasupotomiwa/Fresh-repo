import { Container, Box, Text, Button, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import {Goback } from './Earnhome'
import ADtasks from './Adtasks'

const ButtonComponent2 = () => {
  return <Box  color='white'>Engagement tasks</Box>;
};

const AdHomepage = () => {
  const [showComponent1, setShowComponent1] = useState(true);
  const [showComponent2, setShowComponent2] = useState(false);

  const handleClick1 = () => {
    setShowComponent1(true);
    setShowComponent2(false);
  };

  const handleClick2 = () => {
    setShowComponent1(false);
    setShowComponent2(true);
  };

  return (
    <Container
      ml={{ base: 0, md: "25%" }}
      p={{ base: "4", md: "10" }}
      maxW={{ base: "100%", md: "75%" }}
      bg="black"
      height={{ base: "100vh", md: "100vh" }}
      mt="20"
      fontFamily="clash grotesk"
    >
        <Goback/>
        <Box mt={10}>
        <Heading fontWeight='400' pt={3} color='white' mt={10} fontSize={{base: '18px', md: '25px'}} fontFamily="clash grotesk">Earn</Heading>
      <Box>
        <Text color="#808080">
          Here you will find variety of adverts and engagement tasks. Engagement
          tasks include following people and pages, giving app reviews on the
          App Store or Google play store, suscribing to YouTube channels,
          joining groups and so much more.
        </Text>
        </Box>
        <div>
     
          <Box py={2} my={5}>
            <Button
              onClick={handleClick1}
              mr={2}
              bg={showComponent1 ? "#CB29BE" : "#121212"}
              color={showComponent1 ? "white" : "#808080"}
              fontWeight="500"
              transition="background 0.3s, color 0.3s"
              _hover={{
                bg: "#CB29BE",
                color: "white",
                opacity: "0.9",
              }}
              rounded='lg'
            >
              Advert tasks
            </Button>
            <Button
              onClick={handleClick2}
              rounded='lg'
              mr={0}
              transition="background 0.3s, color 0.3s"
              bg={showComponent2 ? "#CB29BE" : "#121212"}
              color={showComponent2 ? "white" : "#808080"}
              fontWeight="500"
              _hover={{
                bg: "#CB29BE",
                color: "white",
                opacity: "0.9",
              }}
            >
              Engagement task
            </Button>
          </Box>

          {showComponent1 && <ADtasks/>}
          {showComponent2 && <ButtonComponent2 />}
        </div>
      </Box>
    </Container>
  );
};

export default AdHomepage;

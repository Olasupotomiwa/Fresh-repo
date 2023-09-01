import { Container, Box, Text, Button, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import { Goback } from "../Earn/Earnhome";
import CreateAd from "./CreateAdvertsTasks";
import CreateEngagement from './CreateEngagementTasks'

const Advertise = () => {
  const [showCreateAd, setShowCreateAd] = useState(true);
  const [showCreateEngagement, setShowCreateEngagement] = useState(false);

  const handleClick1 = () => {
    setShowCreateAd(true);
    setShowCreateEngagement(false);
  };

  const handleClick2 = () => {
    setShowCreateAd(false);
    setShowCreateEngagement(true);
  };

  return (
    <Container
      ml={{ base: 0, md: "25%" }}
      p={{ base: "4", md: "10" }}
      maxW={{ base: "100%", md: "75%" }}
      bg="black"
      height="100%"
      mt="20"
      fontFamily="clash grotesk"
    >
      <Goback />
      <Box mt={10} textAlign={{ base: "center", md: "left" }}>
        <Heading
          fontWeight="400"
          pt={3}
          color="white"
          mt={10}
          fontSize={{ base: "20px", md: "28px" }}
          fontFamily="clash grotesk"
        >
          Advertise
        </Heading>
        <Box>
          <Text color="#808080">
            You can create a variety of advert and engagement tasks for our
            users to carry out for you. Engagement tasks include getting people
            to follow your accounts or pages, getting them to subscribe to your
            channels, joining your groups and so much more!
          </Text>
        </Box>
        <div>
          <Box py={2} my={5}>
            <Button
              onClick={handleClick1}
              mr={2}
              bg={showCreateAd ? "#CB29BE" : "#121212"}
              color={showCreateAd ? "white" : "#808080"}
              fontWeight="600"
              transition="background 0.3s, color 0.3s"
              _hover={{
                bg: "#CB29BE",
                color: "white",
                opacity: "0.9",
              }}
              rounded="lg"
            >
              Create advert tasks
            </Button>
            <Button
              onClick={handleClick2}
              rounded="lg"
              mr={0}
              transition="background 0.3s, color 0.3s"
              bg={showCreateEngagement ? "#CB29BE" : "#121212"}
              color={showCreateEngagement ? "white" : "#808080"}
              fontWeight="600"
              _hover={{
                bg: "#CB29BE",
                color: "white",
                opacity: "0.9",
              }}
            >
             Create engagement task
            </Button>
          </Box>

          {showCreateAd && <CreateAd />}
          {showCreateEngagement && <CreateEngagement/>}
        </div>
      </Box>
    </Container>
  );
};

export default Advertise;

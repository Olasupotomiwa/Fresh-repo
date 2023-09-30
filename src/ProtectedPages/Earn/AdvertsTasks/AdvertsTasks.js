import { Container, Box, Text, Button, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import {Goback } from '../Earnhome'
import ADtasks from './AdsList'
import EngagementTasks from '../EngagementTasks/EngagementTasklist'



const AdHomepage = () => {
  const [showAdtasks, setShowAdtasks] = useState(true);
  const [showEngagementTasks, setShowEngagementTasks] = useState(false);

  const handleClick1 = () => {
    setShowAdtasks(true);
    setShowEngagementTasks(false);
  };

  const handleClick2 = () => {
    setShowAdtasks(false);
    setShowEngagementTasks(true);
  };

  return (
    <Container
      ml={{ base: 0, md: "25%" }}
      p={{ base: "4", md: "10" }}
      maxW={{ base: "100%", md: "75%" }}
      bg="black"
      height='100%'
      fontFamily="clash grotesk"
    >
        <Goback/>
        <Box mt={0} textAlign={{base: 'center', md: 'left'}}>
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
              bg={showAdtasks ? "#CB29BE" : "#121212"}
              color={showAdtasks ? "white" : "#808080"}
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
              bg={ showEngagementTasks ? "#CB29BE" : "#121212"}
              color={ showEngagementTasks ? "white" : "#808080"}
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

          { showAdtasks && <ADtasks/>}
          { showEngagementTasks && <EngagementTasks />}
        </div>
      </Box>
    </Container>
  );
};

export default AdHomepage;

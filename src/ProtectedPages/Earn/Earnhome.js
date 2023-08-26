import React from "react";

import { Box, Flex, Text, Heading, Button, Container } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const cardContent = [
  {
    icon: "bi:phone-vibrate-fill",
    header: "Social tasks",
    content:
      "Our platform features a variety of income-generating strategies for users by having them carry out simple social media activities.",
    to: "/earn/adverts-tasks",
    text: "click",
  },
  {
    icon: "healthicons:money-bag",
    header: "Resell",
    content:
      "We connect you to real people that will help you achieve your business goals in a way that is both effective and cost-efficient.",
    to: "/market-place2",
    text: "Go to market place",
  },
];

const Card = ({ icon, header, content, to, text }) => {
    const navigate = useNavigate();
  return (
    <Box
      bg="#121212"
      p={4}
      shadow="md"
      borderRadius="md"
      width={{ base: "85%", md: "350px" }} 
      height="300px"
      mx="20px"
      my={4}
    >
      <Box alignItems="center" p={1}>
        <Box
          bg="#222222"
          w={10}
          h={10}
          borderRadius="md"
          marginRight={4}
          mt={2}
          mb={6}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <iconify-icon
            icon={icon}
            style={{ color: "#808080" }}
            width="30"
          ></iconify-icon>
        </Box>
        <Box>
          <Heading
            as="h2"
            size="md"
            display="flex"
            mt={0}
            mb={1}
            color=" #CB29BE"
            fontFamily="Clash Grotesk"
            fontWeight="600"
          >
            {header}
          </Heading>
          <Text fontSize="15px" py={0} letterSpacing="0.369px" color="#808080">
            {content}
          </Text>
        </Box>
      </Box>
      <Button
        width="full"
        rounded="full"
        bg="#cb29be"
        fontWeight="400"
        color="white"
        mt={8}
        mb={0}
        onClick={() => navigate(to)}
        _hover={{
          bg: "#CB29BE",
          color: "white",
          opacity: "0.9",
        }}
      >
        {text}
        <ArrowForwardIcon ml={3} />
      </Button>
    </Box>
  );
};

const CardsSection = () => {
  return (
    <Container
      ml={{ base: 0, md: "25%" }}
      p={{ base: "4", md: "10" }}
      maxW={{ base: "100%", md: "75%" }}
      bg="black"
      height={{ base: "full", md: "100vh" }}
      mt="20"
      fontFamily="clash grotesk"
    >
      <Box my={5}>
        <Flex
          direction={{ base: "column", md: "row" }}
          align={{ base: "center", md: "center" }} 
          justify={{ base: "center", md: "space-between" }} 
          justifyContent="center"
          wrap="wrap"
          fontFamily="Clash Grotesk"
        >
          {cardContent.map((card, index) => (
            <Card
              key={index}
              icon={card.icon}
              header={card.header}
              content={card.content}
              to={card.to}
              text={card.text}
            />
          ))}
        </Flex>
      </Box>
     
    </Container>
  );
};

export default CardsSection;

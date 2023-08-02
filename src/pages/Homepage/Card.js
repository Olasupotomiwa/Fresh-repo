import React from "react";

import { Box, Flex, Text, Heading } from "@chakra-ui/react";

const cardContent = [
  {
    icon: "fluent:money-20-filled",
    header: "Earners",
    content:
      "Our platform features a variety of income-generating strategies for users by having them carry out simple social media activities.",
  },
  {
    icon: "healthicons:money-bag",
    header: "Businesses",
    content:
      "We connect you to real people that will help you achieve your business goals in a way that is both effective and cost-efficient.",
  },
  {
    icon: "ion:person-sharp",
    header: "Individuals",
    content:
      "We connect you to real people that will help you grow and achieve other goals on your social media platforms.",
  },
];

const Card = ({ icon, header, content }) => {
  return (
    <Box
      bg="#121212"
      p={4}
      shadow="md"
      borderRadius="md"
      width={{ base: "90%", md: "335px" }}
      height="250px"
      mx={4}
      my={4}
    >
      <Box alignItems="center" p={1}>
        {/* Replace 'icon' with the actual icon component you want to use */}
        <Box
          bg="#222222"
          w={8}
          h={8}
          borderRadius="md"
          marginRight={4}
          mt={2}
          mb={9}
          display="flex"
          justifyContent='center'
          alignItems='center'
        >
          <iconify-icon
            icon={icon}
            style={{ color: "#808080" }}
            width="22"
          ></iconify-icon>
        </Box>
        <Box>
          <Heading
            as="h2"
            size="md"
            display="flex"
            mt={4}
            mb={1}
            color=" #CB29BE"
            fontFamily="Clash Grotesk"
            fontWeight="400"
          >
            <Text mr={1.5} color="white">
              For
            </Text>{" "}
            {header}
          </Heading>
          <Text fontSize="16px" py={0} letterSpacing="0.369px" color="#808080">
            {content}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

const CardsSection = () => {
  return (
    <Box>
      <Heading textAlign="center" color="white" fontFamily="Clash Grotesk">
        {" "}
        Who is Trendit<sup>3</sup> for{" "}
      </Heading>
      <Flex
        direction={{ base: "column", md: "row" }}
        align={{ base: "center", md: "flex-start" }}
        justify={{ base: "center", md: "space-around" }}
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
          />
        ))}
      </Flex>
    </Box>
  );
};

export default CardsSection;

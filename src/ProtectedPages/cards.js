import React from "react";

import { Box, Flex, Text, Heading, Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const cardContent = [
  {
    icon: "solar:hand-money-bold",
    header: "Earn",
    content:
      "Earn by carrying out simple social media tasks for businesses and individuals or by reselling their products.",
    text: "Start earning",
  },
  {
    icon: "healthicons:money-bag",
    header: "Advertise",
    content:
      "Get real people with active followers to help repost your ads and carry out other social media tasks you create on our platform.",
    text: "Start advertising",
  },
  {
    icon: "ion:person-sharp",
    header: "Sell",
    content:
      "Advertise your products directly to the traffic on our platform or get our active users to resell your products for you.",
    text: "Start selling",
  },
];

const Card = ({ icon, header, content, text }) => {
    console.log("button:", text); 
  return (
    <Box
      bg="#121212"
      p={4}
      shadow="md"
      borderRadius="md"
      width={{ base: "85%", md: "300px" }}
      height="300px"
      mx='auto'
      my={4}
    >
      <Box alignItems="center" p={1}>
        {/* Replace 'icon' with the actual icon component you want to use */}
        <Box
          bg="#222222"
          w={10}
          h={10}
          borderRadius="md"
          marginRight={4}
          mt={2}
          mb={9}
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
      <Button width="full" rounded="full" bg="#cb29be" fontWeight='400' color="white" mt={3} mb={5}>
        {text}  <ArrowForwardIcon  ml={3}/>
      </Button>
    </Box>
  );
};

const CardsSection = () => {
  return (
    <Box my={5}>
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
            text={card.text}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default CardsSection;

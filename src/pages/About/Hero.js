import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
import BannerJPG from 'assets/images/banner.png'



const Notes = () => {
  return (
    <Box>
      <Flex
        direction={{ base: "column", md: "row" }}
        pt={30}
        py={{ base: "5", md: "8" }}
        fontFamily="Clash Grotesk"
      >
        <Box flex="1" mb={2} px={{ base: "5", md: "8" }}>
          <Heading
            fontFamily="Clash Grotesk"
            fontSize="32px"
            lineHeight="30px"
            fontWeight={700}
            textAlign={{ base: "center", md: "left" }}
            color="white"
            mt={5}
          >
            We help bridge the gap between
            <span style={{ color: "#CB29BE" }}> businesses </span>and{" "}
            <span style={{ color: "#CB29BE" }}> customers </span>
          </Heading>
        </Box>

        <Box flex="1" pt={{ base: "2", md: "5" }} color="#808080">
          <Text
            textAlign={{ base: "center", md: "left" }}
            my={3}
            color="#808080"
            px={{ base: "5", md: "8" }}
          >
            We connect businesses to users who will help them grow their
            customer base and make more profit by carrying out social media
            tasks for a small fee
          </Text>
        </Box>
      </Flex>
      <Image src={BannerJPG} alt="banner" width="full" />
    </Box>
  );
};

export default Notes;

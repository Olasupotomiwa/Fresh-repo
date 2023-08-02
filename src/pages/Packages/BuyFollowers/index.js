import InstagramBtn from "./Instagrambtn";
import Tiktok from "./Tiktok";
import Twitter from "./Twitter";
import YoutubeBtn from "./YoutubeBtn";
import Footer from "components/Footer";
import { Box, Container, Heading, Text } from "@chakra-ui/react";

const BuyFollowers = () => {
  return (
    <Container maxW="100%" px={0} bg="black" fontFamily="Clash Grotesk">
      <Box py="30px" px={5}>
        <Heading
          fontSize="24px"
          textAlign="center"
          fontWeight={400}
          color="white"
          fontFamily="Clash Grotesk"
        >
          Buy authentic followers, suscribers & engagement
        </Heading>
        <Text
          color="#808080"
          px={6}
          textAlign="center"
          py={3}
          lineHeight={5}
          mt={2}
        >
          We understand that building a strong social media presence can be a
          time consuming and challenging task. This is why we offer a range of
          package to help businesses of all sizes achieve their social media
          goals quickly and efficiently. Our packages are all 100% authentic and
          come from real, active accounts, no bots.
        </Text>
      </Box>
      <Box py={4} px={3}>
        <Heading
          fontSize="20px"
          textAlign="center"
          fontWeight={400}
          color="white"
          fontFamily="Clash Grotesk"
        >
          Our hottest
          <span style={{ color: "#CB29BE" }}> Instagram </span> services
        </Heading>
        <InstagramBtn />
      </Box>

      <Box py={4} px={4}>
        <Heading
          fontSize="20px"
          textAlign="center"
          fontWeight={400}
          color="white"
          fontFamily="Clash Grotesk"
        >
          Our hottest
          <span style={{ color: "#CB29BE" }}> Tiktok </span> services
        </Heading>
        <Tiktok />
      </Box>

      <Box py={4} px={4}>
        <Heading
          fontSize="20px"
          textAlign="center"
          fontWeight={400}
          color="white"
        >
          Our hottest
          <span style={{ color: "#CB29BE" }}> Youtube </span> services
        </Heading>
        <YoutubeBtn />
      </Box>

      <Box py={4} px={4}>
        <Heading
          fontSize="20px"
          textAlign="center"
          fontWeight={400}
          color="white"
        >
          Our hottest
          <span style={{ color: "#CB29BE" }}> Twitter </span> services
        </Heading>
        <Twitter />
      </Box>
      <Footer />
    </Container>
  );
};
export default BuyFollowers;

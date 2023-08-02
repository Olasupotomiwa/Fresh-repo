import { Box, Heading, Button, Text, Container } from "@chakra-ui/react";
import Logos from './SocialMediaCards'
import Footer from "components/Footer";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const Adverts = () => {
  return (
    <Container maxW="100%" bg="black" px={0}>
      <Box>
        <Box
          fontFamily="clash grotesk"
          textAlign="center"
          width={{ base: "100%", md: "75%" }}
          m="auto"
        >
          <Heading
            color="white"
            py={5}
            fontSize="30px"
            fontWeight="500"
            fontFamily="clash grotesk"
          >
            Social media adverts
          </Heading>
          <Text
            color={"#808080"}
            textAlign="center"
            mb={5}
            px={{ base: "5", md: "10" }}
          >
            Our advert package is a win-win for both earners and businesses.
            With our user-friendly interface, business owners are able to post
            ads and other content, select the social media platform they want
            the ads shared to, set their and sit back while our users reposts
            their ads and content to wider audience
          </Text>

          <Button
            bg=" #CB29BE"
            color="white"
            px={10}
            fontWeight="400"
            rounded="full"
            variant="unstyled"
            width={{ base: "60%", md: "350px" }}
          >
            Post Adverts <ArrowForwardIcon  ml={3}/>
          </Button>
        </Box>
        <Logos />
      </Box>
      <Footer />
    </Container>
  );
};
export default Adverts;

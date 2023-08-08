import { Box, Heading, Button, Text, Container } from "@chakra-ui/react";
import Logos from "./SocialMediaCards";
import Footer from "components/Footer";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const Tasks = () => {
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
            Create social media tasks to help you achieve your social media
            goals, and post for our users to carry out. <br />
            Social media tasks on our platform will help you get followers, get
            likes, get comments, get suscribers, get app reviews on the app
            store or playstore, get people to join your groups and so much more!
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
            Create Tasks <ArrowForwardIcon ml={3} />
          </Button>
        </Box>
        <Logos />
      </Box>
      <Footer />
    </Container>
  );
};
export default Tasks;

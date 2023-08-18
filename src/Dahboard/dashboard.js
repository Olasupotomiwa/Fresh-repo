
import { Container,  Heading, Text } from "@chakra-ui/react";

const Home = () => {
  return (
    <Container
      maxW="100%"
      px={0}
      fontFamily="clash grotesk"
      bg="black"
      height="100vh"
    >
      <Heading
        textAlign="left"
        fontFamily="clash grotesk"
        color="white"
        fontSize="20px"
        fontWeight="400"
        pt="20px"
        px={10}
      >
        Welcome, dear user
      </Heading>

      <Text color="white" px={10}>
        This page is under development. Check back later{" "}
      </Text>
    </Container>
  );
};

export default Home;

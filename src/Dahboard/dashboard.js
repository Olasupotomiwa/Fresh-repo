
import { Container,  Heading, Text } from "@chakra-ui/react";
import { useSelector } from 'react-redux';


const Home = () => {


  const user = useSelector((state) => state.auth.user);
  const isLoading = useSelector((state) => state.auth.isLoading);
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
      {isLoading ? (
        <Text>Loading user data...</Text>
      ) : user ? (
        <p>Welcome, {user.username}!</p>
      ) : (
        <p>User data not available.</p>
      )}
      </Heading>

      <Text color="white" px={10}>
        This page is under development. Check back later{" "}
      </Text>
    </Container>
  );
};

export default Home;

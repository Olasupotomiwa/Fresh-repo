
import { Container, Button, Heading, Text, Center } from "@chakra-ui/react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from '../Redux-files/slices/authSlice'; // Import your logout action
import { Navigate } from 'react-router-dom';




const Home = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
  
    // Dispatch the logout action
    dispatch(logout());
    // Redirect to the login page
    return <Navigate to="/log-in" />;
  };


  const user = useSelector((state) => state.auth.user);
  const isLoading = useSelector((state) => state.auth.isLoading);
  return (
    <Container
     maxW={{base: '100%', md: '80%'}}
      px={0}
      fontFamily="clash grotesk"
      bg="black"
      height="200vh"
      ml={{ base: 0, md: '20%'}}
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

    <Center>  <Button onClick={handleLogout} py='5'>
      Logout
    </Button></Center>
    </Container>
  );
};

export default Home;

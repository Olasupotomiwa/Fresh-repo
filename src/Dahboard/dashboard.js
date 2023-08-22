
import { Container, Button, Heading, Text } from "@chakra-ui/react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from '../slices/authSlice'; // Import your logout action
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

      <Button onClick={handleLogout}>
      Logout
    </Button>
    </Container>
  );
};

export default Home;

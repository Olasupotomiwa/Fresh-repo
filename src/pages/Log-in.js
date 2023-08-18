import React, { useState } from "react";
import { Container, Grid, Image, Heading, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Text,
  useToast,
} from "@chakra-ui/react";
import {
  ViewIcon,
  ViewOffIcon,
  CheckCircleIcon,
  CloseIcon,
} from "@chakra-ui/icons";
import { Spinner } from "@chakra-ui/react";

import Onboard from "assets/images/onboard.png";
import Footer from "components/Footer";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isUsernameVerified, setIsUsernameVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Add this line
  const [showPassword, setShowPassword] = useState(false);

  const toast = useToast();
  const navigate = useNavigate();

  // Simulated username verification function
  const verifyUsername = (inputUsername) => {
    const correctUsername = "Trendit3"; // Change this to the correct username
    return inputUsername === correctUsername;
  };

  const handleUsernameChange = (event) => {
    const newUsername = event.target.value;
    setUsername(newUsername);
    setIsUsernameVerified(verifyUsername(newUsername));
    // Reset username verification
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = () => {
    // Handle form submission here
    if (username === "Trendit3" && password === "Trendit3") {
      // Successful login
      console.log("Login successful!");
       setIsLoading(true); // Start loading
      setTimeout(() => {
        // Simulate loading for 2 seconds
        navigate("/dashboard");
      }, 2000);
    }
   
     else {
      // Incorrect username or password
      toast({
        title: "Error",
        description: "Invalid username or password.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Container maxWidth="100vw" bg="black" px={0}>
      <Grid
        templateColumns={{ base: "1fr", md: "2.6fr 7.4fr" }}
        fontFamily="clash grotesk"
      >
        <Image
          src={Onboard}
          alt="Onboarding_pics"
          objectFit="cover"
          display={{ base: "none", md: "flex" }}
          width="full"
          height="100%"
        />
        <Box
          color="white"
          bg="black"
          textAlign="center"
          mx="auto"
          my={10}
          fontFamily="clash grotesk"
          width={{ base: "80%", md: "400px" }}
          height={{ base: "100vh", md: "auto" }}
        >
          <Heading
            textAlign="center"
            fontFamily="clash grotesk"
            fontWeight="500"
          >
            Welcome back
          </Heading>
          <Box p={0} my={15}>
            <FormControl>
              <FormLabel>Email address</FormLabel>
              <InputGroup>
                <Input
                  type="text"
                  value={username}
                  onChange={handleUsernameChange}
                  pr={isUsernameVerified ? "2.5rem" : "0.5rem"}
                  borderColor="#808080"
                  borderRadius="12px"
                  color="white"
                  placeholder="E.g Dezfoods"
                  fontFamily="clash grotesk"
                />
                {isUsernameVerified ? (
                  <InputRightElement
                    children={<CheckCircleIcon color="#CB29BE" />}
                  />
                ) : (
                  username && (
                    <InputRightElement
                      children={<CloseIcon color="#CB29BE" />}
                    />
                  )
                )}
              </InputGroup>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={handlePasswordChange}
                  borderColor="#808080"
                  borderRadius="12px"
                />
                <InputRightElement width="4.5rem">
                  <Button
                    h="1.75rem"
                    size="sm"
                    onClick={handleTogglePassword}
                    bg="black"
                    _hover={{ bg: "inherit" }}
                    _active={{ bg: "inherit" }}
                  >
                    {showPassword ? <ViewOffIcon /> : <ViewIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Text
              fontSize="14px"
              mt={2}
              textAlign="right"
              color="#CB29BE"
              fontFamily="clash grotesk"
            >
              Forgot password ?
            </Text>

            <Button
              my="35px"
              bg="#CB29BE"
              onClick={handleSubmit}
              _hover={{ bg: "#CB29BE", opacity: "0.9" }}
              rounded="25px"
              width="full"
            >
              {isLoading ? <Spinner size="sm" color="white" /> : "Log in"}
            </Button>
            <Text
              textAlign="center"
              color="white"
              fontFamily="clash grotesk"
              fontSize="14px"
            >
              Not registered ?{" "}
              <Button
                variant="unstyled"
                style={{ color: "#CB29BE" }}
                fontSize="14px"
                as={Link}
                to="/sign-up"
              >
                Register now
              </Button>
            </Text>
          </Box>
        </Box>
      </Grid>

      <Footer />
    </Container>
  );
};

export default LoginPage;

import React, { useState } from "react";
import { Container, Grid, Image, Heading, Box } from "@chakra-ui/react";

import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  useToast,
} from "@chakra-ui/react";
import {
  ViewIcon,
  ViewOffIcon,
  CheckCircleIcon,
  CloseIcon,
} from "@chakra-ui/icons";

import Onboard from "assets/images/onboard.png";
import Footer from "components/Footer";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isUsernameVerified, setIsUsernameVerified] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const toast = useToast();

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
    } else {
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
          my={20}
          fontFamily="clash grotesk"
          width={{ base: "80%", md: "400px" }}
          height="100vh"
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
              <FormLabel>Username</FormLabel>
              <InputGroup>
                <Input
                  type="text"
                  value={username}
                  onChange={handleUsernameChange}
                  pr={isUsernameVerified ? "2.5rem" : "0.5rem"}
                  borderColor="#808080"
                  borderRadius="12px"
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

            <Button
              mt={6}
              bg="#CB29BE"
              onClick={handleSubmit}
              _hover={{ bg: "#CB29BE", opacity: "0.9" }}
              rounded="25px"
              width="full"
            >
              Log in
            </Button>
          </Box>
        </Box>
      </Grid>

      <Footer />
    </Container>
  );
};

export default LoginPage;

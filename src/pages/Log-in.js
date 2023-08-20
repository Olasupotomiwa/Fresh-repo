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
  const [emailaddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailAddressVerified, setIsEmailAddressVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Add this line
  const [showPassword, setShowPassword] = useState(false);

  const toast = useToast();
  const navigate = useNavigate();

  // Simulated username verification function
  const verifyEmailAddress = (inputEmailAddress) => {
    const correctEmailAddress = "Trendit3@gmail.com"; // Change this to the correct username
    return inputEmailAddress === correctEmailAddress;
  };

  const handleEmailAddressChange = (event) => {
    const newEmailAddress = event.target.value;
    setEmailAddress(newEmailAddress);
    setIsEmailAddressVerified(verifyEmailAddress(newEmailAddress));
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
    if (emailaddress === "Trendit3@gmail.com" && password === "Trendit3") {
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
        templateColumns={{ base: "1fr", md: "2.3fr 7.7fr" }}
        fontFamily="clash grotesk"
      >
        <Image
          src={Onboard}
          alt="Onboarding_pics"
          objectFit="cover"
          display={{ base: "none", md: "flex" }}
          height='100vh'
         
        />
        <Box
          color="white"
          bg="black"
          textAlign="center"
          mx="auto"
          my={100}
          fontFamily="clash grotesk"
          width={{ base: "80%", md: "500px" }}
         

        >
          <Heading
            textAlign="center"
            fontFamily="clash grotesk"
            fontWeight="500"
            mb={10}
          >
            Welcome back <iconify-icon icon="noto:waving-hand"></iconify-icon>
          </Heading>
          <Box p={0} my={{base: '5', md: '15'}}>
            <FormControl>
              <FormLabel>Email address</FormLabel>
              <InputGroup>
                <Input
                  type="text"
                  value={emailaddress}
                  onChange={handleEmailAddressChange}
                  pr={isEmailAddressVerified ? "2.5rem" : "0.5rem"}
                  borderColor="#808080"
                  borderRadius="12px"
                  color="white"
                  placeholder="E.g Trendit3@gmail.com"
                  fontFamily="clash grotesk"
                />
                {isEmailAddressVerified ? (
                  <InputRightElement
                    children={<CheckCircleIcon color="#CB29BE" />}
                  />
                ) : (
                 emailaddress && (
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
              as={Link}
              to="/forgot-password"
            
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
              fontWeight="400"
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
                fontWeight="400"
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

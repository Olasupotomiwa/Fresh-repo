import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  Select,
  Grid,
  Flex,
  Image,
  Container,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ArrowBackIcon } from "@chakra-ui/icons";

import { Center, Heading } from "@chakra-ui/react";
import { Stack, HStack } from "@chakra-ui/react";
import { PinInput, PinInputField } from "@chakra-ui/react";

import { Box, InputGroup, InputRightElement, VStack } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

import Onboard from "assets/images/onboard.png";

function SignUpComponent() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };
  const [selectedOption, setSelectedOption] = useState("");
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <Flex
            color="white"
            display="flex"
            bg="black"
            alignItems="center"
            justifyContent="center"
            mt="40px"
            fontFamily="clash grotesk"
          >
            <VStack spacing={6} width={{ base: "80%", md: "400px" }}>
              <Box>
                <Text
                  textAlign="left"
                  fontSize="13px"
                  fontFamily="clash grotesk"
                >
                  Step 1 out of 3
                </Text>
                <Heading fontWeight={500} fontFamily="clash grotesk" fontSize='30px'>
                  Create account
                </Heading>
              </Box>
              <FormControl fontFamily="clash grotesk">
                <FormLabel color="#808080">Username</FormLabel>
                <Input
                  type="text"
                  color="white"
                  borderColor="#808080"
                  borderRadius="12px"
                  placeholder="E.g Dezfoods"
                  fontFamily="clash grotesk"
                />
              </FormControl>
              <FormControl fontFamily="clash grotesk">
                <FormLabel color="#808080">Email Address</FormLabel>
                <Input
                  type="email"
                  borderColor="#808080"
                  borderRadius="12px"
                  placeholder="Enter your email address"
                />
              </FormControl>
              <FormControl fontFamily="clash grotesk">
                <FormLabel color="#808080">Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword1 ? "text" : "password"}
                    borderColor="#808080"
                    borderRadius="12px"
                    placeholder="Enter your password"
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      h="1.75rem"
                      bg="inherit"
                      size="sm"
                      _hover={{ bg: "inherit" }}
                      _active={{ bg: "inherit" }}
                      _focus={{ boxShadow: "none" }}
                      onClick={handleTogglePassword1}
                    >
                      {showPassword1 ? <ViewOffIcon /> : <ViewIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <FormControl fontFamily="clash grotesk">
                <FormLabel color="#808080">Confirm Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword2 ? "text" : "password"}
                    borderColor="#808080"
                    borderRadius="12px"
                    placeholder="Confirm your password"
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      h="1.75rem"
                      bg="inherit"
                      _hover={{ bg: "inherit" }}
                      _active={{ bg: "inherit" }}
                      _focus={{ boxShadow: "none" }}
                      size="sm"
                      onClick={handleTogglePassword2}
                    >
                      {showPassword2 ? <ViewOffIcon /> : <ViewIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
            </VStack>
          </Flex>
        );

      case 2:
        return (
          <Flex
            color="white"
            bg="black"
            alignItems="center"
            justifyContent="center"
            mt="40px"
            fontFamily="clash grotesk"
          >
            <VStack spacing={6} width={{ base: "80%", md: "400px" }}>
              <Box>
                <Text textAlign="left" fontSize="13px">
                  Step 2 out of 3
                </Text>
                <Heading
                  fontWeight={500}
                  fontSize="30px"
                  fontFamily="clash grotesk"
                >
                  Create account
                </Heading>
              </Box>

              <FormControl>
                <FormLabel color="#808080">Gender</FormLabel>
                <Select
                  borderColor="#808080"
                  borderRadius="12px"
                  value={selectedOption}
                  onChange={handleOptionChange}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  {/* Add more options */}
                </Select>
              </FormControl>
              <FormControl fontFamily="clash grotesk">
                <FormLabel color="#808080">Country</FormLabel>
                <Select
                  borderColor="#808080"
                  borderRadius="12px"
                  value={selectedOption}
                  onChange={handleOptionChange}
                >
                  <option value="Nigeria">Nigeria</option>
                  <option value="Kenya">Kenya</option>
                  {/* Add more options */}
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel color="#808080">State</FormLabel>
                <Select
                  borderColor="#808080"
                  borderRadius="12px"
                  value={selectedOption}
                  onChange={handleOptionChange}
                >
                  <option value="Lagos">Lagos</option>
                  <option value="Oyo">Oyo</option>
                  {/* Add more options */}
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel color="#808080">Local Government Area</FormLabel>
                <Select
                  borderColor="#808080"
                  borderRadius="12px"
                  value={selectedOption}
                  onChange={handleOptionChange}
                >
                  <option value="Eti-Osa">Eti-Osa East</option>
                  <option value="VGC">VGC</option>
                  {/* Add more options */}
                </Select>
                <Text color="#808080" fontSize="14px">
                  This helps us match you with vendors close to your market
                  place
                </Text>
              </FormControl>
            </VStack>
          </Flex>
        );

      case 3:
        return (
          <Flex justify={"center"}>
            <Stack
              spacing={4}
              w={"full"}
              maxW={"sm"}
              rounded={"xl"}
              boxShadow={"lg"}
              p={6}
              my={10}
              fontFamily="clash grotesk"
            >
              <Box color="white" textAlign="center" fontFamily="clash grotesk">
                <Text fontSize="13px" textAlign="center">
                  Step 3 out of 3
                </Text>
                <Heading
                  lineHeight={1.1}
                  fontSize="20px"
                  fontWeight="500"
                  fontFamily="clash grotesk"
                >
                  Verify your email address
                </Heading>
              </Box>

              <FormControl>
                <Text
                  textAlign="center"
                  color="#808080"
                  fontFamily="clash grotesk"
                  mb={8}
                >
                  We've sent an email with your account activation code to
                  <span style={{ color: "#CB29BE" }}> dezfood@gmail.com</span>
                </Text>
                <Center>
                  <HStack>
                    <PinInput fontFamily="clash grotesk" mt={4}>
                      <PinInputField color="white" />
                      <PinInputField color="white" />
                      <PinInputField color="white" />
                      <PinInputField color="white" />
                      <PinInputField color="white" />
                      <PinInputField color="white" />
                    </PinInput>
                  </HStack>
                </Center>
                <Text
                  textAlign="center"
                  color="white"
                  fontFamily="clash grotesk"
                >
                  Didn't receive a code ?{" "}
                  <span style={{ color: "#CB29BE" }}> Resend </span>
                </Text>
              </FormControl>
            </Stack>
          </Flex>
        );
      default:
        return;
    }
  };

  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const handleTogglePassword1 = () => {
    setShowPassword1(!showPassword1);
  };

  const handleTogglePassword2 = () => {
    setShowPassword2(!showPassword2);
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
        <Box mb={40}>
          {renderStepContent()}
          <Box
            display="flex"
            justifyContent="center"
            fontFamily="clash grotesk"
          >
            {currentStep > 1 && (
              <ArrowBackIcon
                color="white"
                fontSize="30px"
                position="absolute"
                left={{ base: "10px", md: "30%" }}
                top={{ base: "80px", md: "120px" }}
                cursor="pointer"
                onClick={handlePreviousStep}
              />
            )}
            {currentStep < 3 ? (
              <Button
                onClick={handleNextStep}
                bg="#CB29BE"
                color="white"
                fontWeight={500}
                rounded="25px"
                px={10}
                width={{ base: "80%", md: "400px" }}
                mt={8}
                mb={2}
                _hover={{ bg: "#CB29BE", opacity: "0.9" }}
                fontFamily="clash grotesk"
              >
                Proceed
              </Button>
            ) : (
              <Button
                bg="#CB29BE"
                color="white"
                fontWeight={500}
                rounded="25px"
                px={10}
                width={{ base: "80%", md: "400px" }}
                _hover={{ bg: "#CB29BE", opacity: "0.9" }}
                fontFamily="clash grotesk"
                as={Link}
                to="/verified"
              >
                Verify & Create account
              </Button>
            )}
          </Box>
          <Text textAlign="center" color="white" fontFamily="clash grotesk">
            Already have an account ?{" "}
            <Button variant='unstyled' style={{ color: "#CB29BE" }} as={Link} to="/log-in">
              {" "}
              Log in{" "}
            </Button>
          </Text>
        </Box>
      </Grid>
    </Container>
  );
}

export default SignUpComponent;

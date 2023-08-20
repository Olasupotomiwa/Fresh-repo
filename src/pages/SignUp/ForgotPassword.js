import React, { useState } from "react";
import {
  Container,
  Grid,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Progress,
  Image,
  Text, 
} from "@chakra-ui/react";
import {Center, HStack } from "@chakra-ui/react";
import { PinInput, PinInputField } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import Onboard from "assets/images/onboard.png";

const ForgotPasswordPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [email, setEmail] = useState("");

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
    setIsLoading(false)
  };

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };


   // States to handle the code verificaation step
  
   const [pin, setPin] = useState(["", "", "", "", "", ""]);
   const [error, setError] = useState("");
   const [isLoading, setIsLoading] = useState(false);
   const [isResending, setIsResending] = useState(false);
   const [resendSuccess, setResendSuccess] = useState(false);

   const handlePinChange = (e, index) => {
    const updatedPin = [...pin];
    updatedPin[index] = e.target.value;
    setPin(updatedPin);
    setError("");
  };
   // Function to check if the PIN input is filled
   const isPinFilled = () => {
    return pin.every((digit) => digit.trim() !== "");
  };

  const handleResendClick = () => {
    // Implement your resend logic here
    setIsResending(true); // Activate the loading spinner for resend
    setTimeout(() => {
      // Simulate a resend process (e.g., sending a new code)
      setIsResending(false); // Deactivate the loading spinner for resend
      setResendSuccess(true); // Set resend success to true
     // Start the countdown timer
    }, 2000); // Simulate a 2-second resend process
  };

// Define the specific six-digit PIN that should be matched
const correctPin = "123456"; // Replace with your specific PIN

  // Function to check if the pin matches before verying users
  const handleVerifyButton = () => {
    const enteredPin = pin.join(""); // Combine the array into a string
    if (enteredPin === correctPin) {
      setIsLoading(true); // Activate the loading spinner
      setTimeout(() => {
        // Simulate some asynchronous operation (e.g., API call)
        setIsLoading(false); // Deactivate the loading spinner
        setCurrentStep(currentStep + 1);
       
        
      }, 2000); // Simulate a 2-second delay
    } else {
      setError("Incorrect PIN. Please try again."); // Display an error message
    }
  };


  const handleSubmit = () => {
    // Handle form submission logic here (e.g., send data to the server)
    // You can use a state or context to manage the success or failure of the process
  };

  return (
    <Container maxWidth="100vw" bg="black" minHeight="100vh" py={5}>
      <Grid
        templateColumns={{ base: "1fr", md: "2.3fr 7.7fr" }}
        gap={6}
        fontFamily="clash grotesk"
      >
        <Image
          src={Onboard}
          alt="Onboarding_pics"
          objectFit="cover"
          display={{ base: "none", md: "flex" }}
          height="100vh"
        />
        <Box
          color="white"
          bg="black"
          textAlign="center"
          mx="auto"
          px={6}
          py={10}
          width={{ base: "80%", md: "600px" }}
          borderRadius="md"
          boxShadow="lg"
          my={100}
        >
         
          {currentStep === 1 && (
            <>
             <Heading fontFamily="clash grotesk" fontWeight="400" mb={6}>
            Forgot Password ?
          </Heading>
          <Box color='#808080' textAlign={{base: 'left', md: 'center'}} mb={10}>
          <Text>Don't worry! it happens.</Text>
          <Text>Please enter the email associated with your account</Text>
          </Box>
              <FormControl>
                <FormLabel color='#808080'>Email Address</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  borderColor="#808080"
                  borderRadius="12px"
                />
              </FormControl>
             
              <Button
                mt={10}
                bg="#CB29BE"
                onClick={handleNextStep}
                _hover={{ bg: "#CB29BE", opacity: "0.9" }}
                rounded="25px"
                width="full"
                fontWeight='400'
              >
                {isLoading ? "Authenticating...." : "Send code"}
              </Button>

              <Text textAlign="center" color="white" fontFamily="clash grotesk" mt={5}>
            Already have an account ?{" "}
            <Button
              variant="unstyled"
              style={{ color: "#CB29BE" }}
              as={Link}
              to="/log-in"
              fontWeight="400"
            >
             
              Log in{" "}
            </Button>
          </Text>
            </>
          )}
          {currentStep === 2 && (
            <> <Heading fontSize='30px' fontWeight='500'>
                Verify your account to reset your password
            </Heading>
            <FormControl>
                <Text
                  textAlign="center"
                  color="#808080"
                  fontFamily="clash grotesk"
                  mb={8}
                >
                  We've sent an email with your account activation code to
                  <span style={{ color: "#CB29BE" }}> {email}</span>
                </Text>
                <Center>
                  <HStack>
                    <PinInput size="lg" autoFocus>
                      {pin.map((digit, index) => (
                        <PinInputField
                          key={index}
                          placeholder=''
                          value={digit}
                          rounded='15px'
                          width={{base: '50px', md: '60px'}}
                          height={{base: '50px', md: '60px'}}
                          onChange={(e) => handlePinChange(e, index)}
                          color="white"
                        />
                      ))}
                    </PinInput>
                  </HStack>
                </Center>
                <Text
                  textAlign="center"
                  color="white"
                  fontFamily="clash grotesk"
                  mt={5}
                >
                  Didn't receive a code ?{" "}
                  <Button
                  variant='unstyled'
                    style={{ color: "#CB29BE" }}
                    onClick={handleResendClick}
                    isDisabled={isResending || resendSuccess}
                    fontWeight='400'
                  >
                     {isResending ? <Spinner size="sm" color="white" /> : 'Resend'}
                  </Button>
                </Text>
              </FormControl>

              {resendSuccess && (
        <Text color='#cb29be'>
          New code sent to your email. Please Check
        </Text>
      )}

              {error && (
                <Text textAlign="center" color="#CB29BE">
                  {error}
                </Text>
              )}

              <Button
                mt={6}
                bg="#CB29BE"
                fontWeight='400'
                onClick={handleVerifyButton}
                _hover={{ bg: "#CB29BE", opacity: "0.9" }}
                rounded="25px"
                width="full"
                isDisabled={!isPinFilled()}
              >
                {isLoading ? "Authenticating...." : "Verify account"}
              </Button>
              <Button
                mt={3}
                variant="link"
                color="#CB29BE"
                onClick={handlePreviousStep}
              >
                Previous
              </Button>
            </>
          )}
          {currentStep === 3 && (
            <>
              <FormControl>
                <FormLabel>New Password</FormLabel>
                <Input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  borderColor="#808080"
                  borderRadius="12px"
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Confirm Password</FormLabel>
                <Input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  borderColor="#808080"
                  borderRadius="12px"
                />
              </FormControl>
              <Button
                mt={6}
                bg="#CB29BE"
                onClick={handleSubmit}
                _hover={{ bg: "#CB29BE", opacity: "0.9" }}
                rounded="25px"
                width="full"
              >
                Reset Password
              </Button>
              <Button
                mt={3}
                variant="link"
                color="#CB29BE"
                onClick={handlePreviousStep}
              >
                Previous
              </Button>
            </>
          )}
          {currentStep === 4 && (
            <>
              <Heading fontSize="xl" mb={4}>
                Password Reset Successful
              </Heading>
              <Button
                mt={6}
                bg="#CB29BE"
                onClick={() => setCurrentStep(1)}
                _hover={{ bg: "#CB29BE", opacity: "0.9" }}
                rounded="25px"
                width="full"
              >
                Start Over
              </Button>
            </>
          )}
          <Progress
            mt={3}
            value={(currentStep / 4) * 100}
            size="sm"
            colorScheme="pink"
          />
        </Box>
      </Grid>
    </Container>
  );
};

export default ForgotPasswordPage;

import React, { useEffect, useState } from "react";
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
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import Footer from "components/Footer";
import { Center, HStack } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { ArrowBackIcon } from "@chakra-ui/icons";

import Loader from "../../Loader";

import Onboard from "assets/images/onboard.png";

const ForgotPasswordPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [email, setEmail] = useState("");

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
    setIsLoading(false);
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

    // Check if the input exceeds a length of 1
    const inputValue = e.target.value;
    if (inputValue.length > 1) {
      // If it does, only take the first character
      updatedPin[index] = inputValue.charAt(0);
    } else {
      updatedPin[index] = inputValue;
    }
    setPin(updatedPin);
    setError("");
    setResendSuccess(false);

    // Automatically focus on the next input if available
    if (index < 5 && e.target.value !== "") {
      document.getElementById(`pin${index + 1}`).focus();
    } else if (index > 0 && e.target.value === "") {
      document.getElementById(`pin${index - 1}`).focus();
    }
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

      setError("");

      // Start the countdown timer
    }, 2000); // Simulate a 2-second resend process
  };

  useEffect(() => {
    // This effect runs after each render
    if (resendSuccess) {
      console.log("Resend successful. Clearing PIN input.");
      // Clear the PIN input if resendSuccess is true
      setPin(["", "", "", "", "", ""]);
    }
  }, [resendSuccess]);

  // Define the specific six-digit PIN that should be matched
  const correctPin = "123456"; // Replace with your specific PIN

  // Function to check if the pin matches before verying users
  const handleVerifyButton = () => {
    const enteredPin = pin.join(""); // Combine the array into a string
    setError(""); // Clear any previous error
    setIsLoading(true); // Set isLoading to true

    // Simulate some asynchronous operation (e.g., API call)
    setTimeout(() => {
      if (enteredPin === correctPin) {
        setIsLoading(false); // Deactivate the loading spinner
        setCurrentStep(currentStep + 1);
      } else {
        setError("Incorrect PIN. Verification failed");
        setIsLoading(false); // Deactivate the loading spinner
      }
    }, 2000); // Simulate a 2-second delay
  };

  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const handleTogglePassword1 = () => {
    setShowPassword1(!showPassword1);
  };

  const handleTogglePassword2 = () => {
    setShowPassword2(!showPassword2);
  };

  

  const [passwordValidationError, setPasswordValidationError] = useState("");

  const handleSubmit = () => {

     // Check if newPassword and confirmPassword are empty
  if (!newPassword || !confirmPassword) {
    setPasswordValidationError("Password fields cannot be empty.");
    setIsLoading(false); // Disable loading state immediately
    return;
  }
   
    const passwordRegex = /^(?=.*\d)(?=.*[@#$%^&+=!])(?=.*[a-zA-Z]).{8,}$/;
    const isValidPassword = passwordRegex.test(newPassword);

    if (!isValidPassword) {
      setPasswordValidationError(
        "Password must contain at least one digit and one special character."
      );
      return;
    }
    // Check if passwords match
    if (newPassword !== confirmPassword) {
      setPasswordValidationError("Passwords do not match.");
      return; // Prevent form submission if validation fails
    }
    setIsLoading(true); 
    setTimeout(() => {
      setIsLoading(false); // Disable loading state after the delay
      setCurrentStep(currentStep + 1);
    }, 2000); // Simulate a 2-second delay
  };

  return (
    <Container maxWidth="100vw" bg="black" minHeight="100vh" pt={5} px={0}>
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
          height="full"
        />
        <Box
          color="white"
          bg="black"
          textAlign="center"
          mx="auto"
          width={{ base: "80%", md: "600px" }}
          borderRadius="md"
          boxShadow="lg"
          mt='100'
         
          height='100vh'
          fontFamily="clash grotesk"
        >
          {currentStep === 1 && (
            <>
              <Heading fontFamily="clash grotesk" fontWeight="400" mb={6}>
                Forgot Password ?
              </Heading>
              <Box
                color="#808080"
                textAlign={{ base: "left", md: "center" }}
                mb={10}
                fontFamily="clash grotesk"
              >
                <Text>Don't worry! it happens.</Text>
                <Text>Please enter the email associated with your account</Text>
              </Box>
              <FormControl>
                <FormLabel color="#808080">Email Address</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  borderColor="#808080"
                  placeholder="Enter your registed email"
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
                fontWeight="400"
                fontFamily="clash grotesk"
              >
                Send code
              </Button>

              <Text
                textAlign="center"
                color="white"
                fontFamily="clash grotesk"
                mt={5}
              >
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
            <>
              {" "}
              <Heading fontSize="30px" fontWeight="500"  fontFamily="clash grotesk">
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
                <Center  fontFamily="clash grotesk">
                  <HStack spacing={2}>
                    {[0, 1, 2, 3, 4, 5].map((index) => (
                      <Input
                        key={index}
                        type="number"
                        id={`pin${index}`}
                        value={pin[index]}
                        onChange={(e) => handlePinChange(e, index)}
                        maxLength={1} // Allow only one digit per input
                        borderColor="#808080"
                        borderRadius="12px"
                        width={{ base: "45px", md: "60px" }}
                        height={{ base: "45px", md: "60px" }}
                        textAlign="center"
                        color="white"
                        autoFocus={index === 0} // Autofocus on the first input
                      />
                    ))}
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
                    variant="unstyled"
                    style={{ color: "#CB29BE" }}
                    onClick={handleResendClick}
                    isDisabled={isResending || resendSuccess}
                    fontWeight="400"
                    fontFamily="clash grotesk"
                  >
                    {isResending ? (
                      <Spinner size="sm" color="white" />
                    ) : (
                      "Resend"
                    )}
                  </Button>
                </Text>
              </FormControl>
              {resendSuccess && (
                <Text color="#cb29be"  fontFamily="clash grotesk">
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
                fontWeight="400"
                onClick={handleVerifyButton}
                _hover={{ bg: "#CB29BE", opacity: "0.9" }}
                rounded="25px"
                width="full"
                isDisabled={!isPinFilled()}
                fontFamily="clash grotesk"
              >
                {isLoading ? (
                  <>
                    <Loader />
                    Authenticating code....
                  </>
                ) : (
                  "Verify & reset password"
                )}
              </Button>
              <ArrowBackIcon
                color="white"
                fontSize="30px"
                position="absolute"
                left={{ base: "10px", md: "30%" }}
                top={{ base: "80px", md: "120px" }}
                cursor="pointer"
                onClick={handlePreviousStep}
              />
            </>
          )}
          {currentStep === 3 && (
            <>
              <Heading fontSize="30px" textAlign="center" fontWeight="500"  fontFamily="clash grotesk">
                Reset password
              </Heading>
              <Text
                textAlign="center"
                color="#808080"
                fontFamily="clash grotesk"
                mb={8}
              >
                Kindly use a password you will remember
              </Text>
              <FormControl  fontFamily="clash grotesk">
                <FormLabel>New Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword1 ? "text" : "password"}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    onFocus={() => setPasswordValidationError("")}
                    borderColor="#808080"
                    borderRadius="12px"
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      h="1.75rem"
                      size="sm"
                      onClick={handleTogglePassword1}
                      bg="black"
                      _hover={{ bg: "inherit" }}
                      _active={{ bg: "inherit" }}
                    >
                      {showPassword1 ? <ViewOffIcon /> : <ViewIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              <FormControl mt={4}> 
                <FormLabel>Confirm Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword2 ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    onFocus={() => setPasswordValidationError("")}
                    borderColor="#808080"
                    borderRadius="12px"
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      h="1.75rem"
                      size="sm"
                    
                      onClick={handleTogglePassword2}
                      bg="black"
                      _hover={{ bg: "inherit" }}
                      _active={{ bg: "inherit" }}
                    >
                      {showPassword2 ? <ViewOffIcon /> : <ViewIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              {passwordValidationError && (
  <div style={{ color: "red" }}>{passwordValidationError}</div>
)}

              <Button
                mt={6}
                bg="#CB29BE"
                onClick={handleSubmit}
                _hover={{ bg: "#CB29BE", opacity: "0.9" }}
                rounded="25px"
                width="full"
                fontWeight='400'
                fontFamily="clash grotesk"
              >
                {isLoading ? (
                  <>
                    <Loader />
                    Updating new password....
                  </>
                ) : (
                  "Reset password"
                )}
              </Button>
              <ArrowBackIcon
                color="white"
                fontSize="30px"
                position="absolute"
                left={{ base: "10px", md: "30%" }}
                top={{ base: "80px", md: "120px" }}
                cursor="pointer"
                onClick={handlePreviousStep}
              />
            </>
          )}
          {currentStep === 4 && (
            <>

              <iconify-icon icon="mdi:password-check"  style={{ color: "#CB29BE" }}
            width="120"></iconify-icon>
              <Heading fontSize="xl" mb={4} fontWeight='400'  fontFamily="clash grotesk">
                Password Changed
              </Heading>
             <Text color='#808080'>Your password was changed succesfully</Text>
             <Button
                mt={6}
                bg="#CB29BE"
                onClick={handleSubmit}
                _hover={{ bg: "#CB29BE", opacity: "0.9" }}
                rounded="25px"
                width="full"
                fontWeight='400'
                as={Link}
                to='/log-in'
              >
               
                  Back to login
               
              </Button>
            </>
          )}
          <Progress
            mt={3}
            value={(currentStep / 4) * 100}
            size="sm"
            color="#CB29BE"
          />
        </Box>
      </Grid>
       <Footer />
    </Container>
  );
};

export default ForgotPasswordPage;

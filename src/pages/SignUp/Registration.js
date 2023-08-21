import React, { useState, useEffect} from "react";
import locationData from "./LocationArray";
import { useNavigate } from "react-router-dom";

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
import Loader from "../../Loader";


import { Box, InputGroup, InputRightElement, VStack } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Spinner } from "@chakra-ui/react";

import Onboard from "assets/images/onboard.png";

function SignUpComponent() {
  const [currentStep, setCurrentStep] = useState(1);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  // Add error state variables
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Function to clear error messages after a delay
  const clearErrors = () => {
    setTimeout(() => {
      setUsernameError("");
      setEmailError("");
      setPasswordError("");
    }, 3000); // 3000 milliseconds (3 seconds)
  };


  // Function to proceed to the next registration step
  const handleNextStep = () => {
    if (currentStep === 1) {
      // Check for empty fields
      if (!username || !email || !password1 || !password2) {
        console.log("Empty field detected.");
        // Display a generic error if any field is empty
        setUsernameError(!username ? "Please fill in this field." : "");
        setEmailError(!email ? "Please fill in this field." : "");
        setPasswordError(!password1 ? "Please fill in this field." : "");
        // Check if password2 is empty and display an error
        if (!password2) {
          setPasswordError("Please fill in this field.");
        }

        // Clear errors after 3 seconds
        clearErrors();
        return;
      }

      // Add authentication and error handling for username and email
      if (!isValidUsername(username)) {
        console.log("Invalid username.");
        setUsernameError("Username is not available.");
        // Clear errors after 3 seconds
        clearErrors();
      } else if (!isValidEmail(email)) {
        console.log("Invalid email.");
        setEmailError("Invalid email address.");
        // Clear errors after 3 seconds
        clearErrors();
      } else if (!isValidPassword(password1)) {
        console.log("Invalid password.");
        setPasswordError(
          "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number."
        );
        // Clear errors after 3 seconds
        clearErrors();
      } else if (password1 !== password2) {
        console.log("Passwords do not match.");
        setPasswordError("Passwords do not match.");
        // Clear errors after 3 seconds
        clearErrors();
      } else {
        console.log("Validation passed. Proceeding to the next step.");
        setCurrentStep(currentStep + 1);
      }
    }

    if (currentStep === 2) {
      if (!selectedGender) {
        setgenderError("Please select your gender.");
        return;
      }

      if (!selectedCountry) {
        setCountryError("Please select a country.");
        return;
      }

      if (!selectedState) {
        setStateError("Please select a state.");
        return;
      }

      if (!selectedCity) {
        setCityError("Please select a city.");
        return;
      }
      // Validation for Step 1 passed; proceed to Step 2
      setCurrentStep(currentStep + 1);
    }
  };




// Function to go back to the previous step

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };



  // Define the allowed username
  const allowedUsername = "Trendit3";

  // Function to simulate username validation
  const isValidUsername = (username) => {
    if (username !== allowedUsername) {
      setUsernameError("Username is not allowed.");
      return false;
    }
    return true;
  };


  // Function to validate password
  const isValidEmail = (email) => {
    // Implement your email validation logic here
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailPattern.test(email);
  };

  const isValidPassword = (password) => {
    // Implement your password validation logic here
    // Return true if valid, false otherwise
    return (
      password.length >= 8 &&
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /\d/.test(password)
    );
  };


  // States to handle the second step
  const [selectedCountry, setSelectedCountry] = useState(""); // State to store the selected country
  const [selectedState, setSelectedState] = useState(""); // State to store the selected state
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [countryError, setCountryError] = useState("");
  const [stateError, setStateError] = useState("");
  const [cityError, setCityError] = useState("");
  const [genderError, setgenderError] = useState("");

  // Function to handle gender selection
  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
    setgenderError(""); // Reset the Gender error
  };

  const handleCountryChange = (event) => {
    const selectedCountry = event.target.value;
    setSelectedCountry(selectedCountry);
    setSelectedState(""); // Reset selected state when changing the country
    setSelectedCity(""); // Reset selected city when changing the country
    setCountryError(""); // Reset the country error
  };

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    setSelectedCity(""); // Reset selected city when changing the country
    setStateError(""); // Reset the state error
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
    setCityError(""); // Reset the city error
  };

  // Create arrays of countries, states, and cities based on the selected values
  const countries = locationData.map((data) => data.country);
  const states =
    locationData
      .find((data) => data.country === selectedCountry)
      ?.states.map((state) => state.state) || [];
  const cities =
    locationData
      .find((data) => data.country === selectedCountry)
      ?.states.find((state) => state.state === selectedState)?.cities || [];

  // Define CSS styles for the dropdown options
  const dropdownOptionStyles = {
    color: "#121212", // Change the text color as needed
  };


  // States to handle the code verificaation step
  const navigate = useNavigate();
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
       navigate('/verified')
       logInputs()
      } else {
        setError("Incorrect PIN. Please try again.");
        setIsLoading(false); // Deactivate the loading spinner
      }
    }, 2000); // Simulate a 2-second delay
  };
  


  // Function to handle resending of code
  const handleResendClick = () => {
    // Implement your resend logic here
    setIsResending(true); // Activate the loading spinner for resend
    setTimeout(() => {
      // Simulate a resend process (e.g., sending a new code)
      setIsResending(false); // Deactivate the loading spinner for resend
      setResendSuccess(true); // Set resend success to true
      setPin(["", "", "", "", "", ""]); // Clear the PIN input
      setError("");
     
     // Start the countdown timer
    }, 2000); // Simulate a 2-second resend process
  };



  // Function to collect and log step 1 and step 2 input values into console
  const logInputs = () => {
    console.log("Step 1 Inputs:");
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password1:", password1);
    console.log("Password2:", password2);

    console.log("Step 2 Inputs:");
    console.log("Gender:", selectedGender);
    console.log("Country:", selectedCountry);
    console.log("State:", selectedState);
    console.log("City:", selectedCity);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:

    //First registration step. Uesernmae, email and password
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
            <VStack spacing={6} width={{ base: "80%", md: "500px" }}>
              <Box>
                <Text
                  textAlign="left"
                  fontSize="13px"
                  fontFamily="clash grotesk"
                >
                  Step 1 out of 3
                </Text>
                <Heading
                  fontWeight={500}
                  fontFamily="clash grotesk"
                  fontSize="30px"
                >
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
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />

                {/* Display username error */}
                <Text color="#CB29BE" fontSize="14px">
                  {usernameError}
                </Text>
              </FormControl>
              <FormControl fontFamily="clash grotesk">
                <FormLabel color="#808080">Email Address</FormLabel>
                <Input
                  type="email"
                  borderColor="#808080"
                  borderRadius="12px"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {/* Display email error */}
                <Text color="#CB29BE" fontSize="14px">
                  {emailError}
                </Text>
              </FormControl>
              <FormControl fontFamily="clash grotesk">
                <FormLabel color="#808080">Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword1 ? "text" : "password"}
                    borderColor="#808080"
                    borderRadius="12px"
                    placeholder="Enter your password"
                    value={password1}
                    onChange={(e) => setPassword1(e.target.value)}
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
                {/* Display password error */}
                <Text color="#CB29BE" fontSize="14px">
                  {passwordError}
                </Text>
              </FormControl>
              <FormControl fontFamily="clash grotesk">
                <FormLabel color="#808080">Confirm Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword2 ? "text" : "password"}
                    borderColor="#808080"
                    borderRadius="12px"
                    placeholder="Confirm your password"
                    value={password2}
                    onChange={(e) => setPassword2(e.target.value)}
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
                {/* Display password error */}
                <Text color="#CB29BE" fontSize="14px">
                  {passwordError}
                </Text>
              </FormControl>
            </VStack>
          </Flex>
        );


          //Second registration step. Gender, country and states
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
            <VStack spacing={6} width={{ base: "80%", md: "500px" }}>
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
                <Select value={selectedGender} onChange={handleGenderChange}>
                  <option value="">Select Gender</option>
                  <option value="male" style={dropdownOptionStyles}>
                    Male
                  </option>
                  <option value="female" style={dropdownOptionStyles}>
                    Female
                  </option>
                  {/* Add more gender options as needed */}
                </Select>
                {genderError && <Text color="#CB29BE">{genderError}</Text>}
              </FormControl>
              <FormControl fontFamily="clash grotesk">
                <FormLabel>Country:</FormLabel>
                <Select
                  borderColor="#808080"
                  borderRadius="12px"
                  value={selectedCountry}
                  onChange={handleCountryChange}
                >
                  <option value="">Select Country</option>
                  {countries.map((country) => (
                    <option
                      key={country}
                      value={country}
                      style={dropdownOptionStyles}
                    >
                      {country}
                    </option>
                  ))}
                </Select>
                {countryError && <Text color="#CB29BE">{countryError}</Text>}
              </FormControl>

              <FormControl>
                <FormLabel>State:</FormLabel>
                <Select
                  borderColor="#808080"
                  borderRadius="12px"
                  value={selectedState}
                  onChange={handleStateChange}
                >
                  <option value="">Select State</option>
                  {states.map((state) => (
                    <option
                      key={state}
                      value={state}
                      style={dropdownOptionStyles}
                    >
                      {state}
                    </option>
                  ))}
                </Select>
                {stateError && <Text color="#CB29BE">{stateError}</Text>}
              </FormControl>

              <FormControl>
                <FormLabel color="#808080">Local Government Area</FormLabel>
                <Select
                  borderColor="#808080"
                  borderRadius="12px"
                  value={selectedCity}
                  onChange={handleCityChange}
                >
                  <option value="">Select City</option>
                  {cities.map((city) => (
                    <option
                      key={city}
                      value={city}
                      style={dropdownOptionStyles}
                    >
                      {city}
                    </option>
                  ))}
                </Select>
                <Text color="#808080" fontSize="14px">
                  This helps us match you with vendors close to your market
                  place
                </Text>
                {cityError && <Text color="#CB29BE">{cityError}</Text>}
              </FormControl>
            </VStack>
          </Flex>
        );


   //Third registration step. Verification of email
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
                  <span style={{ color: "#CB29BE" }}> {email}</span>
                </Text>
                <Center>
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
    <Container maxWidth="100vw"  bg="black" px={0}>
      <Grid
        templateColumns={{ base: "1fr", md: "2.3fr 7.7fr" }}
        fontFamily="clash grotesk"
      >
        <Image
          src={Onboard}
          alt="Onboarding_pics"
          objectFit="cover"
          display={{ base: "none", md: "flex" }}
          height="full"
         
         
        />
        <Box mt={{base: '5', md: '20'}} >
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
                width={{ base: "80%", md: "500px" }}
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
                width={{ base: "80%", md: "500px" }}
                _hover={{ bg: "#CB29BE", opacity: "0.9" }}
                fontFamily="clash grotesk"
                onClick={handleVerifyButton}
                isDisabled={!isPinFilled()}
               
              >
                 {isLoading ? (
                <>
                  <Loader />
                  Authenticating code....
                </>
              ) : (
                "Verify & create account"
              )}
              </Button>
            )}
          </Box>
          <Text textAlign="center" color="white" fontFamily="clash grotesk" mb={40}>
            Already have an account ?{" "}
            <Button
              variant="unstyled"
              style={{ color: "#CB29BE" }}
              as={Link}
              to="/log-in"
              fontWeight="400"
            >
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

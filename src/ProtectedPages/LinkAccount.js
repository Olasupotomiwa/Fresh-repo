import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'; 


import {
  Container,
  Box,
  Heading,
  Center,
  Text,
  InputGroup,
  Button,
  FormControl,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Goback } from "./Earn/Earnhome";
import Loader from "../Loader";
import { useSelector, useDispatch } from 'react-redux';
import { setIsLinked, selectIsLinked } from '../slices/linkedslice';

const LinkAcct = () => {

    const isLinked = useSelector(selectIsLinked);
    const dispatch = useDispatch();
    const navigate = useNavigate();

  const [inputValue, setInputValue] = useState("");
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
 
  console.log(isLinked);

  // Function to handle input changes
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setIsButtonActive(value.trim() !== "");
  };

  useEffect(() => {
    if (isLinked) {
      // If isLinked is true, wait for a brief moment and then redirect
      setTimeout(() => {
        navigate("/earn/adverts-tasks");
      }, 3000); // Adjust the delay time as needed
    }
  }, [isLinked,  navigate]);

 // Function to handle button click
const handleButtonClick = () => {
    setIsLoading(true); // Show spinner
    setTimeout(() => {
      setIsLoading(false); // Hide spinner after 2 seconds
      setShowModal(true); // Show modal with default content
      if (inputValue === "Trendit3") {
        setIsLinked(true); // Set isLinked to true after showing the modal
        dispatch(setIsLinked(true));
      } else {
        setIsLinked(false);
      }
    }, 3000);
  };
  

  // Function to close the modal
  const closeModal = () => {
    setShowModal(false);
    // Optionally, reset modal content or perform other actions
  };

  return (
    <Container
      ml={{ base: 0, md: "25%" }}
      p={{ base: "4", md: "10" }}
      maxW={{ base: "100%", md: "75%" }}
      bg="black"
      height={{ base: "100vh", md: "100vh" }}
      mt="20"
      fontFamily="clash grotesk"
    >


{isLinked ? (
        // Content when isLinked is true
        <Center>
       
         <Loader/>
         <Text color='white'>Redirecting....</Text>
        </Center>


) : (
    <>
      <Box
        bg="#121212"
        width="full"
        p={4}
        mt={10}
        textDecoration="none"
        border="1px"
        borderColor="#808080"
        borderRadius="lg"
      >
        <Text color="white" fontWeight="500">
          Disclaimer
        </Text>
        <Text color="#808080">
          To be eligible for our social tasks: <br />
          1. Your selected must have at least 1000 real followers <br />
          2. Your account must be an active one. Your last post must not be
          later than 30 days
        </Text>
      </Box>

      <Box width={{ base: "100%", md: "75%", lg: "55%" }} mt="80px">
        <FormControl
          borderRadius="8px"
          borderWidth="2px"
          borderColor="#808080"
          display="flex"
          width={{ base: "100%", md: "100%" }}
          m={{ base: "auto", md: "0" }}
        >
          <InputGroup variant="unstyled">
            <Input
              type="email"
              color="#CB29BE"
              placeholder="paste profile link"
              fontSize="15px"
              pl="2.5rem"
              borderTopRightRadius={0}
              borderBottomRightRadius={0}
              value={inputValue}
              onChange={handleInputChange}
            />
          </InputGroup>
          <Button
            rounded="8px"
            textDecoration="none"
            px={10}
            fontWeight="500"
            borderWidth="1px"
            _hover={{ bg: "CB29BE", opacity: "0,9" }}
            borderColor="#808080"
            color={isButtonActive ? "white" : "#808080"}
            py={6}
            outline="1px"
            bg={isButtonActive ? "#CB29BE" : "#121212"} // Change background color
            fontSize="16px"
            onClick={handleButtonClick}
            isDisabled={!isButtonActive} // Disable button when input is empty or during loading
          >
            {isLoading ? (
                <>
                  <Loader />
                Linking account...
                </>
              ) : (
                "Link account"
              )}
          </Button>
        </FormControl>
      </Box>
      </>
 )}
      <Goback />

      {/* Modal */}
      <Modal
        isOpen={showModal}
        onClose={closeModal}
        size={{ base: "sm", md: "md" }}
        isCentered
      >
        <ModalOverlay />
        <ModalContent
          bg="black"
          border="1px"
          borderColor="#808080"
          borderRadius="25px"
          fontFamily="clash grotesk"
          p={{ base: "0", md: "6" }}
        >
          <ModalCloseButton
            bg="#808080"
            rounded="full"
            position="absolute"
            top="-8px"
            right="-5px"
          />
          <ModalBody color="#808080">
            {isLinked ? (
              <div>
            <Center>
              <iconify-icon
                icon="solar:verified-check-bold"
                style={{ color: "#CB29BE" }}
                mx="auto"
                justifyContent="center"
                alignItems="center"
                width="80"
              ></iconify-icon>
              
            </Center>
            <Heading color="white" fontWeight="400" my={3} fontSize="24px" fontFamily='clash grotesk' textAlign='center'>
             Linked
            </Heading>
                <Text textAlign='center'>
                  Your account has been linked succesfully <br /> You can now
                  carry out{" "}
                  <span style={{ color: "#CB29BE", fontWeight: "600" }}>
                    Instagram Tasks
                  </span>{" "}
                  Tasks on our platform! <br />
                  Please wait while you are being directed to the task page
                </Text>
              </div>
            ) : (
              <div>

<Center>
              <iconify-icon
                icon="material-symbols:error-rounded"
                style={{ color: "#F13A5B" }}
                mx="auto"
                justifyContent="center"
                alignItems="center"
                width="80"
              ></iconify-icon>
              
            </Center>
            <Heading color="white" fontWeight="400" my={3} fontSize="24px" fontFamily='clash grotesk' textAlign='center'>
            Not linked
            </Heading>
                <Text textAlign='center'>
                  Your Instagram account was not linked. <br /> If this account passess 1000 followers minimum required. Please try to
                  
                  <span style={{ color: "#CB29BE", fontWeight: "600" }} >
                  {" "} link it again
                  </span>{" "}
                 
                </Text>
              </div>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default LinkAcct;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Goback } from "../Earnhome";
import {
  InputGroup,
  Button,
  FormControl,
  Input,
 Menu, MenuButton, MenuList, MenuItem,
  Image,
  Flex,
} from "@chakra-ui/react";
import {ChevronDownIcon } from '@chakra-ui/icons'

import {
  Center,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Container, Box, Heading, Text } from "@chakra-ui/react";
import img from "assets/images/youtube.png"
import Loader from "Loader";

//Api should be wrapped with task id to fetch this page content (Link and social media to perfom task on)
//const {taskId} = useParams()   //import useParams

const TaskPage = () => {
  // Function to handle file drop
  const handleFileDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setSelectedFile(file);
  };

  // Prevent default behavior of drag-and-drop events
  const preventDefault = (event) => {
    event.preventDefault();
  };

  // Set the initial countdown time to 60 minutes (60 minutes * 60 seconds)
  const initialCountdown = 60 * 60;
  const [countdown, setCountdown] = useState(initialCountdown);

  // Format seconds as minutes and seconds (e.g., "5:30")
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  useEffect(() => {
    // Create an interval to update the countdown every second
    const interval = setInterval(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      }
    }, 1000);

    // Clear the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, [countdown]);

  const [selectedFile, setSelectedFile] = useState(null);

  // Determine if the button should be disabled
  const isButtonDisabled = !selectedFile;

  // Function to handle file selection
  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  //handle modal

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [isLoading, setIsLoading] = useState(false); // loading state to submit task

  const handleButtonClick = () => {
    setIsLoading(true); // Show loader
    setTimeout(() => {
      setIsLoading(false); // Hide loader after 2 seconds
      openModal(); // Show the modal
    }, 2000); // 2-second delay
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (!isModalOpen) return; // Only navigate when the modal is closed
    setTimeout(() => {
      navigate("/earn/adverts-tasks"); // Navigate to the homepage after 3 seconds
    }, 3000);

    return; // Clear the timeout on unmount
  }, [isModalOpen, navigate]);

  const [selectedSocialMedia, setSelectedSocialMedia] = useState("");
  const socialMediaAccounts = ["Instagram", "Facebook", "Twitter", "YouTube", "TikTok"];

  return (
    <Container
      ml={{ base: 0, md: "25%" }}
      p={{ base: "4", md: "10" }}
      maxW={{ base: "100%", md: "75%" }}
      mx="auto"
      bg="black"
      height="auto"
      mt="20"
      fontFamily="clash grotesk"
    >
      <Goback />
      <Box
        justifyContent="center"
        alignItems="center"
        textAlign="center" // Add this line for text alignment
        width={{ base: "100%", md: "60%" }}
        mx="auto"
        onDrop={handleFileDrop} // Handle file drop event
        onDragOver={preventDefault} // Prevent default behavior for drag-over event
        onDragEnter={preventDefault} //
      >
        <Heading
          fontSize={{ base: "20px", md: "30px" }}
          color="white"
          fontWeight="600"
          fontFamily="clash grotesk"
        >
          Perform task
        </Heading>

        <Text color="white" py={2} fontSize="16px">
          This task will expire in{" "}
          <span style={{ color: "#CB29BE", fontWeight: "600" }}>
            {formatTime(countdown)}
          </span>{" "}
        </Text>



 {/*Task to be done */}
        <Box mt={30}>
          <Box>
          <Box py={10}>
  <Text color="#808080" fontSize="16px" textAlign="left">
    Select platform to perform task on
    <Menu>
      <MenuButton
        as={Text}
        color="#808080"
        fontSize="16px"
        textAlign="left"
        borderColor="#808080"
        borderWidth="2px"
        borderRadius="lg"
        px={4}
        py={2}
        _focus={{ outline: "none" }}
      >
        {selectedSocialMedia || "Select social media account" }
        <ChevronDownIcon  color='white' ml='2'/>
      </MenuButton>
      <MenuList>
        {socialMediaAccounts.map((account) => (
          <MenuItem key={account} onClick={() => setSelectedSocialMedia(account)} color='#121212'>
            {account}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  </Text>
</Box>


            <Box
              bg="#121212"
              width="full"
              p={2}
              border="1px"
              borderColor="#808080"
              borderRadius="lg"
            >
              <Text textAlign="left" color="white">
                <iconify-icon
                  icon="ion:checkbox"
                  style={{ color: "white", width: "35" }}
                ></iconify-icon>
               {
  selectedSocialMedia === 'YouTube'
    ? 'Subscribe to YouTube channel - earn '
    : `Follow ${selectedSocialMedia} account - earn `
}               

                <span style={{ color: "#CB29BE", fontWeight: "600" }}>$10</span>{" "}
              </Text>
            </Box>
          </Box>

          {/*Link account */}
          <Box my="40px">
            <Text color="#808080" textAlign="left">
              Link to account
            </Text>
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
                  pl="0.5rem"
                  borderTopRightRadius={0}
                  borderBottomRightRadius={0}
                  value="testing"
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
                color="white"
                py={6}
                outline="1px"
                bg="#CB29BE"
                fontSize="16px"
              >
                Visit link
              </Button>
            </FormControl>
          </Box>



          {selectedSocialMedia === "YouTube" && (
    <div>
      {/*  content to render when YouTube is selected */}
     
      <Box my={10}>
            <Text textAlign="left" color="#ffffff">
             Channel cover
            </Text>
            <Box
              border="1px"
              borderColor="#808080"
              borderRadius="15px"
              height="300px"
              width="full"
              textAlign="center"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Image src={img} width="300px" height="295px" />
              <Box
                display="flex"
                alignItems="center"
                cursor="pointer"
                as="a"
                href={img}
                download={img}
              >
                
                
              </Box>
            </Box>
          </Box>
    </div>
  )}



          {/*Proof of task done */}
          <Text textAlign="left" color="#808080">
            Proof of task done -{" "}
            <span style={{ color: "white", fontWeight: "600" }}>
              screenshot
            </span>{" "}
          </Text>
          <Box
            border="1px"
            borderColor="#808080"
            borderRadius="15px"
            height="300px"
            width="full"
            textAlign="center"
            display="flex"
            justifyContent="center"
            alignItems="center"
            fontFamily="clash grotesk"
          >
            <Box style={{ color: "#808080", fontWeight: "500" }}>
              <Box px={5}>
                <Box bg="white" h={10} w={10} rounded="full" mx="auto" my={2}>
                  <iconify-icon
                    icon="solar:gallery-bold"
                    style={{ color: "#808080", marginTop: "10px" }}
                  ></iconify-icon>
                </Box>
                Drag and drop your screenshot here or{" "}
                <label
                  style={{
                    color: "#CB29BE",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                  htmlFor="file-upload"
                >
                  click here to browse
                </label>{" "}
                <Text>Image must be 10MB max file size</Text>
              </Box>
            </Box>

            <Input
              type="file"
              id="file-upload"
              accept="image/*"
              onChange={handleFileSelect}
              style={{ display: "none" }}
            />
            {selectedFile && (
              <Box mt="2">
                <Flex flexDirection="column" alignItems="center">
                  <Image
                    src={URL.createObjectURL(selectedFile)}
                    alt="Selected Image"
                    maxW="100%"
                    width="200px" // Specify your width here
                    height="220px" // Specify your height here
                  />
                  <Text color="white" mt="2">
                    {selectedFile.name}
                  </Text>
                </Flex>
              </Box>
            )}
          </Box>
          <Text color="#808080" fontSize="smaller">
            After submitting this task, you must not delete the ad from your
            profile, our team will continually check your account for this task.
            You risk a ban on your Trendit account if you delete this ad after
            submission.
          </Text>
        </Box>

        {/* Submit task */}
        <Box pt={10} pb={20}>
          <Button
            bg="#CB29BE"
            color="white"
            fontWeight="500"
            width="full"
            transition="background 0.3s, color 0.3s"
            _hover={{
              bg: "#CB29BE",
              color: "white",
              opacity: "0.9",
            }}
            rounded="full"
            isDisabled={isButtonDisabled}
            isOpen={isModalOpen}
            onClick={handleButtonClick}
          >
            {isLoading ? (
              <>
                <Loader />
                submitting.....
              </>
            ) : (
              "Submit task"
            )}
          </Button>
        </Box>
      </Box>

      <Modal
        isOpen={isModalOpen}
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
            <Heading
              color="white"
              fontWeight="400"
              my={3}
              fontSize="24px"
              fontFamily="clash grotesk"
              textAlign="center"
            >
              Submitted
            </Heading>
            <Text textAlign="center">
              Our team will review your submission and once it's approved you
              will be paid for the task. Meanwhile, you can carry out{" "}
              <span style={{ color: "#CB29BE", fontWeight: "600" }}>
                more Tasks
              </span>{" "}
              and continue earning! <br />
              Please wait while you are being directed to the task page
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default TaskPage;

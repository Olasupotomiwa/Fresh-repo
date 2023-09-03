import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'; 
import {Goback } from '../Earnhome'
import {
  
  Button,
  
  Input,
  Image,
  Flex,
} from "@chakra-ui/react";

import {
  Center,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Container, Box, Heading, Text } from "@chakra-ui/react";
import img from "assets/bg.jpg";
import Loader from 'Loader'
import { useLocation, useParams } from "react-router-dom";




//Api should be wrapped with task id to fetch this page content
//const {taskId} = useParams()   //import useParams
const TaskPage = () => {

  const { taskId } = useParams();
   //function to receive the specified Api from the link that led to this task page
   const location = useLocation();
   const searchParams = new URLSearchParams(location.search);
   const apiEndpoint = searchParams.get("apiEndpoint");
 
 
   useEffect(() => {
     // Log the apiEndpoint and taskId to the console
     console.log("API Endpoint:", apiEndpoint);
     console.log("Task ID:", taskId);
 
 
   }, [apiEndpoint, taskId]);
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

    return // Clear the timeout on unmount
  }, [isModalOpen, navigate]);

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
          mt={{base: '10', md: '2'}}
        >
          Perform task
        </Heading>

        <Text color="white" py={2} fontSize="16px">
          This task will expire in{" "}
          <span style={{ color: "#CB29BE", fontWeight: "600" }}>
            {formatTime(countdown)}
          </span>{" "}
        </Text>

        <Box mt={30}>
          {/*Task to be done */}
          <Box>
            <Text color="#808080" fontSize="sm" textAlign="left">
              task to be done
            </Text>
            <Box
              bg="#121212"
              width="full"
              p={2}
              border="1px"
              borderColor="#808080"
              borderRadius="lg"
            >
              <Text textAlign="left" color="white">
                Share ad to your {""} account story - earn{" "}
                <span style={{ color: "#CB29BE", fontWeight: "600" }}>$10</span>{" "}
              </Text>
            </Box>
          </Box>

          {/*Download Ad image or video */}
          <Box mt={10}>
            <Text textAlign="left" color="#ffffff">
              Download Ad image/video
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
              <Image src={img} width="200px" height="295px" />
              <Box
                display="flex"
                alignItems="center"
                cursor="pointer"
                as="a"
                href={img}
                download={img}
              >
                <iconify-icon
                  icon="ic:baseline-download-for-offline"
                  width="20px"
                  style={{ color: "#ffffff", marginTop: "0px" }}
                ></iconify-icon>
                <Text color="#ffffff">Download</Text>
              </Box>
            </Box>
          </Box>

          {/*Caption to use*/}
          <Box my={8}>
            <Text color="#ffffff" fontSize="sm" textAlign="left">
              Caption to use
            </Text>
            <Box
              bg="#121212"
              width="full"
              p={5}
              border="1px"
              borderColor="#808080"
              borderRadius="lg"
            >
              <Text textAlign="left" color="white">
                Satisfy your cravings at Dezfoods, the ultimate destination for
                unforgettable flavors. Indulge in our mouthwatering creations,
                meticulously crafted with love and expertise.
              </Text>
            </Box>
          </Box>

          {/*Hashtag to use*/}
          <Box my={5}>
            <Text color="#ffffff" fontSize="sm" textAlign="left">
              Hashtags to use
            </Text>
            <Box
              bg="#121212"
              width="full"
              p={5}
              border="1px"
              borderColor="#808080"
              borderRadius="lg"
            >
              <Box>
                <Button
                  bg="#CB29BE"
                  rounded="full"
                  color="white"
                  fontWeight="400"
                  mx={2}
                  py="10px"
                >
                  Foodlovers
                </Button>
                <Button
                  bg="#CB29BE"
                  rounded="full"
                  color="white"
                  fontWeight="400"
                >
                  Lagosfoodusiness
                </Button>
              </Box>
            </Box>
          </Box>

        
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
              will be paid for the task. Meanwhile, you can carry out
             {" "}
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

import React, { useEffect, useState } from "react";

import {
  InputGroup,
  Button,
  FormControl,
  Input,
  Image,
  Flex,
} from "@chakra-ui/react";
import { Container, Box, Heading, Text } from "@chakra-ui/react";
import img from "assets/bg.jpg";

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

  // Function to handle file selection
  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };
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

        <Box mt={30}>
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
                Share ad to Instagram story - earn $10{" "}
                <span style={{ color: "#CB29BE", fontWeight: "600" }}>$10</span>{" "}
              </Text>
            </Box>
          </Box>

          <Box mt={6}>
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

          <Box my={4}>
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

          <Box my={4}>
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
                  py='10px'
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
            mt="4"
            textAlign="center"
            display="flex"
            justifyContent="center"
            alignItems="center"
            fontFamily="clash grotesk"
          >
            <label
              htmlFor="file-upload"
              style={{ color: "#808080", fontWeight: "500" }}
            >
              <Box cursor="pointer" px={5}>
                <Box bg="white" h={10} w={10} rounded="full" mx="auto" my={2}>
                  <iconify-icon
                    icon="solar:gallery-bold"
                    style={{ color: "#808080", marginTop: "10px" }}
                  ></iconify-icon>
                </Box>
                Drag and drop your screenshot here or{" "}
                <span style={{ color: "#CB29BE", fontWeight: "600" }}>
                  click here to browse
                </span>{" "}
                <Text>Image must be 10MB max file size</Text>
              </Box>
            </label>

            <Input
              type="file"
              id="file-upload"
              accept="image/*"
              onChange={handleFileSelect}
              style={{ display: "none" }}
            />
            {selectedFile && (
              <Box mt="2">
                <Flex flexDirection="column" alignItems="center" mt="2">
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
        </Box>
      </Box>
    </Container>
  );
};

export default TaskPage;

import React, { useState } from "react";
import { Goback } from "../Earn/Earnhome";
import { Button, Input, Image, Flex } from "@chakra-ui/react";
import CheckOut from "./CheckoutProcess";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

import { Container, Box, Heading, Text } from "@chakra-ui/react";

//Api should be wrapped with task id to fetch this page content
//const {taskId} = useParams()   //import useParams

const PostEngagemntTasks = () => {
  // Function to handle file drop
  const handleFileDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setSelectedFile(file);
    // Clear the file error when a file is dropped
    setFileError("");
  };

  // Prevent default behavior of drag-and-drop events
  const preventDefault = (event) => {
    event.preventDefault();
  };

  // Function to handle file selection
  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    // Clear the file error when a file is selected
    setFileError("");
  };

  //handle modal

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleButtonClick = () => {
    // Validate the inputs
    const isFileValid = !!selectedFile;
    const isSocialMediaValid = !!selectedSocialMedia;
    const isEngagementTaskValid = !!selectedEngagementTask;
    const isNumberOfPostsValid = !!numberOfPosts;

    // Update error messages immediately
    setFileError(isFileValid ? "" : "Kindly upload your ad image or video");
    setSocialMediaError(
      isSocialMediaValid ? "" : "Kindly select your desired platform"
    );

    setEngagementTaskError(
      isEngagementTaskValid ? "" : "Kindly select your desired task"
    );

    setNumberOfPostsError(
      isNumberOfPostsValid ? "" : "Number of Posts is required."
    );

    const isFormValid =
      isFileValid &&
      isSocialMediaValid &&
      isEngagementTaskValid &&
      isNumberOfPostsValid;

    if (isFormValid) {
      openModal();
    }
  };

  const socialMediaAccounts = [
    "Instagram",
    "Facebook",
    "Twitter",
    "YouTube",
    "TikTok",
  ];

  const EngagementTasks = [
    "Follow my account",
    "Likes my post",
    "Comments for my post",
    "Reshare my post",
    "Suscribers for my YouTube Channel",
    "Likes, views and  comment for my YouTube video",
    "Join my WhatsApp group",
    "Follow my Audiomack account",
    "Join my Telegram channel",
    "Download and review my App on Playstore",
    "Download and review my App on Appstore",
    "Join my discord channel",
  ];

  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedSocialMedia, setSelectedSocialMedia] = useState("");
  const [selectedEngagementTask, setSelectedEngagementTask] = useState("");
  const [numberOfPosts, setNumberOfPosts] = useState("");

  // State variables for error messages
  const [fileError, setFileError] = useState("");
  const [socialMediaError, setSocialMediaError] = useState("");
  const [EngagementTaskError, setEngagementTaskError] = useState("");
  const [numberOfPostsError, setNumberOfPostsError] = useState("");

  const handleNumberOfPostsChange = (event) => {
    const value = event.target.value;
    setNumberOfPosts(value);
    // Clear the error when the input is focused
    setNumberOfPostsError("");
  };

  const result = numberOfPosts ? numberOfPosts * 10 : null;

  // Function to render special content for "Likes for my post" task
  const renderContentForSelectedTask = () => {
    if (selectedEngagementTask === "Likes my post") {
      return (
        <Box>
          <Text color="white">Special content for Likes for my post task</Text>
          {/* Add your specific content for this task here */}
        </Box>
      );
    }

    if (selectedEngagementTask === "Follow my account") {
      return (
        <Box>
          <Text color="white">Special content for follow for my post task</Text>
          {/* Add your specific content for this task here */}
        </Box>
      );
    }




    if (
      selectedEngagementTask ===
      "Likes, views and  comment for my YouTube video"
    ) {
      return (
        <Box>
          <Text color="white">Special content for Youtube</Text>
          
         
          
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
              <Box px={5} fontWeight="600">
                <Box bg="white" h={10} w={10} rounded="full" mx="auto" my={2}>
                  <iconify-icon
                    icon="solar:gallery-bold"
                    style={{ color: "#808080", marginTop: "10px" }}
                  ></iconify-icon>
                </Box>
                Drag and drop your image/Video here or{" "}
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
                <Text fontWeight="400">
                  Image or video must be 200MB max file size
                </Text>
              </Box>
            </Box>

            <Input
              type="file"
              id="file-upload"
              accept="image/*,video/*" // Accept both images and videos
              onChange={handleFileSelect}
              style={{ display: "none" }}
              onClick={() => {
                // Clear the error when the input is focused
                setFileError("");
              }}
            />
            {selectedFile && (
              <Box mt="2">
                <Flex flexDirection="column" alignItems="center">
                  {/* Display the selected image or video */}
                  {selectedFile.type.startsWith("image/") ? (
                    <Image
                      src={URL.createObjectURL(selectedFile)}
                      alt="Selected Image"
                      maxW="100%"
                      width="200px"
                      height="220px"
                    />
                  ) : (
                    <video
                      src={URL.createObjectURL(selectedFile)}
                      alt="Selected Video"
                      controls
                      width="200px"
                      height="220px"
                    ></video>
                  )}
                  <Text color="white" mt="2">
                    {selectedFile.name}
                  </Text>
                </Flex>
              </Box>
            )}
          </Box>
          {fileError && <Text color="#CB29BE">{fileError}</Text>}
        </Box>

      
      );
    }
    return null;
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
      <Goback />
      <Box
        justifyContent="center"
        alignItems="center"
        textAlign={{ base: "center", md: "left" }}
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
          Create task
        </Heading>

       
          {/*Select task to e done */}
          <Box>
            <Box py={0}>
              <Text color="#808080" fontSize="16px" textAlign="left">
                Select desired task
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
                    {selectedEngagementTask || "Select Task"}
                    <ChevronDownIcon color="white" ml="2" />
                  </MenuButton>
                  <MenuList>
                    {EngagementTasks.map((task) => (
                      <MenuItem
                        key={task}
                        onClick={() => setSelectedEngagementTask(task)}
                        color="#121212"
                        onFocus={() => {
                          // Clear the error when the input is focused
                          setEngagementTaskError("");
                        }}
                      >
                        {task}
                      </MenuItem>
                    ))}
                  </MenuList>
                </Menu>
              </Text>
              {EngagementTaskError && (
                <Text color="#CB29BE">{EngagementTaskError}</Text>
              )}
            </Box>
          </Box>

          {/*Select platform */}
          <Box>
            <Box py={10}>
              <Text color="#808080" fontSize="16px" textAlign="left">
                Select platform
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
                    {selectedSocialMedia || "Select platform"}
                    <ChevronDownIcon color="white" ml="2" />
                  </MenuButton>
                  <MenuList>
                    {socialMediaAccounts.map((account) => (
                      <MenuItem
                        key={account}
                        onClick={() => setSelectedSocialMedia(account)}
                        color="#121212"
                        onFocus={() => {
                          // Clear the error when the input is focused
                          setSocialMediaError("");
                        }}
                      >
                        {account}
                      </MenuItem>
                    ))}
                  </MenuList>
                </Menu>
              </Text>
              {socialMediaError && (
                <Text color="#CB29BE">{socialMediaError}</Text>
              )}
            </Box>
          </Box>

          {renderContentForSelectedTask()}

          {/* Enter number of posts */}

          <Box>
            <FormControl>
              <FormLabel color="#808080">
                How many posts do you want for this ad ({" "}
                <span style={{ color: "#CB29BE", fontWeight: "600" }}>$10</span>{" "}
                per post)
              </FormLabel>
              <Input
                type="number"
                borderColor="#808080"
                placeholder="Ex 100"
                borderRadius="12px"
                color="#808080"
                py={5}
                _focus={{ outline: "none" }}
                onChange={handleNumberOfPostsChange}
                onFocus={() => {
                  // Clear the error when the input is focused
                  setNumberOfPostsError("");
                }}
              />
              {/* Calculated amount */}
              {result !== null && (
                <Text color="#808080" mt={2}>
                  <Text color="#808080" mt={2}>
                    Payment due:{" "}
                    <span style={{ color: "#CB29BE", fontWeight: "600" }}>
                      {" "}
                      ${result}
                    </span>{" "}
                    for {numberOfPosts} posts
                  </Text>
                </Text>
              )}
            </FormControl>
            {numberOfPostsError && (
              <Text color="#CB29BE">{numberOfPostsError}</Text>
            )}
          </Box>

        {/* Render special content for "Likes for my post" task */}

        {fileError && <Text color="#CB29BE">{fileError}</Text>}
        {EngagementTaskError && (
          <Text color="#CB29BE">{EngagementTaskError}</Text>
        )}
        {socialMediaError && <Text color="#CB29BE">{socialMediaError}</Text>}
        {numberOfPostsError && (
          <Text color="#CB29BE">{numberOfPostsError}</Text>
        )}

        {/* Pay and upload task */}
        <Box pt={10} pb={20}>
          <Button
            bg="#CB29BE"
            color="white"
            fontWeight="600"
            width="full"
            transition="background 0.3s, color 0.3s"
            _hover={{
              bg: "#CB29BE",
              color: "white",
              opacity: "0.9",
            }}
            rounded="full"
            isOpen={isModalOpen}
            onClick={handleButtonClick}
          >
            Pay & upload task
          </Button>
        </Box>
      </Box>
      <CheckOut
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        amount={result}
      />
    </Container>
  );
};

export default PostEngagemntTasks;

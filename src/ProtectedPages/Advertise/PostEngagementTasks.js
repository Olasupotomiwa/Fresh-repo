import React, { useState } from "react";
import { Goback } from "../Earn/Earnhome";
import { Button, Input, Image, Flex } from "@chakra-ui/react";
import CheckOut from "./CheckoutProcess";
import generateLabelsAndText from "./Labels";

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
    const isPasteLinkValid = !!pasteLink;

    // Update error messages immediately
    setFileError(isFileValid ? "" : "Kindly upload your ad image or video");
    setSocialMediaError(
      isSocialMediaValid ? "" : "Kindly select your desired platform"
    );

    setEngagementTaskError(
      isEngagementTaskValid ? "" : "Kindly select your desired task"
    );

    setNumberOfPostsError(
      isNumberOfPostsValid ? "" : "This is required."
    );
    setPasteLinkError(
      isPasteLinkValid ? "" : "Paste your link here." // Customize this error message
    );

    let isFormValid =
      isSocialMediaValid && isEngagementTaskValid &&  isPasteLinkValid && isNumberOfPostsValid;

    // Check file validation only if the file upload section is rendered
    if (
      selectedEngagementTask ===
        "Likes, views and  comment for my YouTube video" ||
      selectedEngagementTask === "Suscribers for my YouTube channel"
    ) {
      const isFileValid = !!selectedFile;
      setFileError(isFileValid ? "" : "Kindly upload your ad image or video");
      isFormValid = isFormValid && isFileValid;
    }

    if (isFormValid) {
      openModal();
    }
  };

  const socialMediaAccounts = [
    "Instagram",
    "Facebook",
    "Twitter",
    "YouTube",
    "WhatsApp",
    "Telegram",
    "Audiomack",
    "Playstore",
    "Appstore",
    "Discord",
   
  ];

  const EngagementTasks = [
    "Follow my account",
    "Likes for my post",
    "Comments for my post",
    "Reshare my post",
    "Suscribers for my YouTube channel",
    "Likes, views and  comment for my YouTube video",
    "Join my WhatsApp group",
    "Follow my Audiomack account",
    "Join my Telegram channel",
    "Download and review my App on Playstore",
    "Download and review my App on Appstore",
    "Join my discord channel",
  ];

  const [selectedFile, setSelectedFile] = useState(null);
  const [pasteLink, setPasteLink] = useState("");
  const [selectedSocialMedia, setSelectedSocialMedia] = useState("");
  const [selectedEngagementTask, setSelectedEngagementTask] = useState("");
  const [numberOfPosts, setNumberOfPosts] = useState("");

  // State variables for error messages
  const [fileError, setFileError] = useState("");
  const [socialMediaError, setSocialMediaError] = useState("");
  const [pasteLinkError, setPasteLinkError] = useState("")
  const [EngagementTaskError, setEngagementTaskError] = useState("");
  const [numberOfPostsError, setNumberOfPostsError] = useState("");

  const handleNumberOfPostsChange = (event) => {
    const value = event.target.value;
    setNumberOfPosts(value);
    // Clear the error when the input is focused
    setNumberOfPostsError("");
  };

  const result = numberOfPosts ? numberOfPosts * 10 : null;

  const { label1, label2, label3, textContent3, textContent4 } =
    generateLabelsAndText({ selectedEngagementTask });

  return (
    <Container
      ml={{ base: 0, md: "25%" }}
      p={{ base: "4", md: "10" }}
      maxW={{ base: "100%", md: "75%" }}
      mx="auto"
      bg="black"
      height="100%"
      mt="20"
      fontFamily="clash grotesk"
    >
      <Goback />

      {/* overall container */}
      <Box
        justifyContent="center"
        textAlign='left'
        width={{ base: "100%", md: "60%" }}
        mx="auto"
        onDrop={handleFileDrop} // Handle file drop event
        onDragOver={preventDefault} // Prevent default behavior for drag-over event
        onDragEnter={preventDefault} //
      >
        <Heading
          fontSize={{ base: "25px", md: "30px" }}
          color="white"
          fontWeight="600"
          fontFamily="clash grotesk"
          my={10}
        >
          Create task
        </Heading>

        {/*Select task to e done */}
        <Box>
          <Box py={5}>
            <Text color="#808080" fontSize="16px" textAlign="left">
              What is your goal for this task ?
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
                  {selectedEngagementTask || "Choose"}
                  <ChevronDownIcon color="white" ml="2" />
                </MenuButton>
                <MenuList maxH="200px" overflow="auto">
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
          <Box py={4}>
            <Text color="#808080" fontSize="16px" textAlign="left">
              {label1}
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
                <MenuList maxH="200px" overflow="auto">
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

        {/* Paste link */}
        <FormControl py={4}>
          <FormLabel color="#808080"> {label2}</FormLabel>

          <Input
            type="text"
            borderColor="#808080"
            borderRadius="12px"
            placeholder="Paste link here"
            onChange={(e) => setPasteLink(e.target.value)}
            onFocus={() => {
              // Clear the error when the input is focused
              setPasteLinkError("");
            }}
            bg="black"
            color="white"
            fontFamily="clash grotesk"
          />
           {pasteLinkError && <Text color="#CB29BE">{pasteLinkError}</Text>}
        </FormControl>


        {/* Conditional rendering of chanel cover */}
        <Box my={4}>
          {selectedEngagementTask ===
            "Likes, views and  comment for my YouTube video" ||
          selectedEngagementTask === "Suscribers for my YouTube channel" ? (
            <Box>
              <Text color="#808080">{label3}</Text>
              {/* Render the label for this specific task */}

              {/* File upload section */}
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
                    <Box
                      bg="white"
                      h={10}
                      w={10}
                      rounded="full"
                      mx="auto"
                      my={2}
                    >
                      {/* Replace this icon with your preferred icon */}
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
                    <Text fontWeight="400">10MB max file size</Text>
                  </Box>
                </Box>

                {/* File input */}
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
          ) : null}
        </Box>

        {/* Enter number of posts */}

        <Box my={5}>
          <FormControl>
            <FormLabel color="#808080">
              How many {textContent3} do you want for this ad ({" "}
              <span style={{ color: "#CB29BE", fontWeight: "600" }}>$10</span>{" "}
              per {textContent4})
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
                  for {numberOfPosts} {textContent4}
                </Text>
              </Text>
            )}
          </FormControl>
          {numberOfPostsError && (
            <Text color="#CB29BE">{numberOfPostsError}</Text>
          )}
        </Box>

        {/* Display the file error conditionally 
        {selectedEngagementTask ===
          "Likes, views and  comment for my YouTube video" ||
        selectedEngagementTask === "Suscribers for my YouTube channel"
          ? fileError && <Text color="#CB29BE">{fileError}</Text>
          : null}
        {EngagementTaskError && (
          <Text color="#CB29BE">{EngagementTaskError}</Text>
        )}
        {socialMediaError && <Text color="#CB29BE">{socialMediaError}</Text>}
        {numberOfPostsError && (
          <Text color="#CB29BE">{numberOfPostsError}</Text>
        )}

        */}

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

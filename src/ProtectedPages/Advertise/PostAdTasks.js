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
  Select,
  Textarea,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";


import { Container, Box, Heading, Text } from "@chakra-ui/react";

import locationData from "../../pages/SignUp/LocationArray";

//Api should be wrapped with task id to fetch this page content
//const {taskId} = useParams()   //import useParams
const PostAdTasks = () => {
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
  const isCountryValid = !!selectedCountry;
  const isStateValid = !!selectedState;
  const isGenderValid = !!selectedGender;
  const isCaptionValid = !!caption;
  const isHashtagsValid = !!hashtags;
  const isNumberOfPostsValid = !!numberOfPosts;

  // Update error messages immediately
  setFileError(isFileValid ? "" : "Kindly upload your ad image or video");
  setSocialMediaError(
    isSocialMediaValid ? "" : "Kindly select your desired platform"
  );
  setCountryError(
    isCountryValid ? "" : "Your target location (Country) is required."
  );
  setStateError(
    isStateValid ? "" : "Your target location (State) is required."
  );
  setGenderError(isGenderValid ? "" : "Gender is required.");
  setCaptionError(isCaptionValid ? "" : "Caption is required.");
  setHashtagsError(isHashtagsValid ? "" : "Hashtags are required.");
  setNumberOfPostsError(isNumberOfPostsValid ? "" : "Number of Posts is required.");


  const isFormValid =
    isFileValid &&
    isSocialMediaValid &&
    isCountryValid &&
    isStateValid &&
    isGenderValid &&
    isCaptionValid &&
    isNumberOfPostsValid &&
    isHashtagsValid;
   

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

  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedSocialMedia, setSelectedSocialMedia] = useState("");
  const [numberOfPosts, setNumberOfPosts] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [caption, setCaption] = useState("");
  const [hashtags, setHashtags] = useState("");
  

  // State variables for error messages
  const [fileError, setFileError] = useState("");
  const [socialMediaError, setSocialMediaError] = useState("");
  const [numberOfPostsError, setNumberOfPostsError] = useState("");
  const [countryError, setCountryError] = useState("");
  const [stateError, setStateError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [captionError, setCaptionError] = useState("");
  const [hashtagsError, setHashtagsError] = useState("");

  // Function to validate all inputs
  
  // Create arrays of countries, states, and cities based on the selected values
  const countries = locationData.map((data) => data.country);
  const states =
    locationData
      .find((data) => data.country === selectedCountry)
      ?.states.map((state) => state.state) || [];

  const handleCountryChange = (event) => {
    const selectedCountry = event.target.value;
    setSelectedCountry(selectedCountry);
  };

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
    setGenderError(""); // Reset the Gender error
  };

  const handleNumberOfPostsChange = (event) => {
    const value = event.target.value;
    setNumberOfPosts(value);
    // Clear the error when the input is focused
    setNumberOfPostsError("");
  };
 
  //calculated price
  const result = numberOfPosts ? numberOfPosts * 10 : null;
  return (
    <Container
      ml={{ base: 0, md: "25%" }}
      p={{ base: "4", md: "10" }}
      maxW={{ base: "100%", md: "75%" }}
      mx="auto"
      bg="black"
      height="auto"
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
        pt={20}
      >
        <Heading
          fontSize={{ base: "20px", md: "30px" }}
          color="white"
          fontWeight="600"
          fontFamily="clash grotesk"
        >
          Upload Ad
        </Heading>

        <Text color="white" fontSize="16px" fontWeight="600" py="3">
          Part 1 0f 2
        </Text>

        {/*Task to be done */}
        <Box mt={30}>
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

          {/* Select country */}

          <FormControl fontFamily="clash grotesk" color="#808080" py={5}>
            <FormLabel>Target location for this ad:</FormLabel>
            <Select
              borderColor="#808080"
              borderRadius="12px"
              value={selectedCountry}
              onChange={handleCountryChange}
              color="#808080"
              onFocus={() => {
                // Clear the error when the input is focused
                setCountryError("");
              }}
            >
              <option value="" py="3">
                Select Country
              </option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </Select>
            {countryError && <Text color="#CB29BE">{countryError}</Text>}
          </FormControl>

          {/* Select state */}

          <FormControl color="#808080" py={5}>
            <FormLabel>Target state for this ad :</FormLabel>
            <Select
              borderColor="#808080"
              borderRadius="12px"
              value={selectedState}
              onChange={handleStateChange}
              color="#808080"
              py={0}
              onFocus={() => {
                // Clear the error when the input is focused
                setStateError("");
              }}
            >
              <option value="">Select State</option>
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </Select>
            {stateError && <Text color="#CB29BE">{stateError}</Text>}
          </FormControl>

          {/* Select gender */}

          <FormControl pb={10}>
            <FormLabel color="#808080">Gender</FormLabel>
            <Select
              value={selectedGender}
              onChange={handleGenderChange}
              borderColor="#808080"
              onFocus={() => {
                // Clear the error when the input is focused
                setGenderError("");
              }}
              borderRadius="12px"
              color="#808080"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              {/* Add more gender options as needed */}
            </Select>
            {genderError && <Text color="#CB29BE">{genderError}</Text>}
          </FormControl>

          <Box py={10}>
            <Text color="white" fontWeight="600">
              Part 2 of 2
            </Text>
          </Box>

          {/*Proof of task done */}
          <Text textAlign="left" color="#808080">
            Upload ad image or video
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

        {/*Caption to use*/}
        <Box my={8}>
          <Text color="#808080" fontSize="16px" textAlign="left">
            Add Caption
          </Text>
          <Textarea
            bg="#121212"
            width="full"
            p={5}
            border="1px"
            borderColor="#808080"
            placeholder="Max. 800 words"
            borderRadius="lg"
            color="white"
            resize="vertical" // Allow vertical resizing
            onChange={(e) => setCaption(e.target.value)}
            onFocus={() => {
              // Clear the error when the input is focused
              setCaptionError("");
            }}
          />
          {captionError && <Text color="#CB29BE">{captionError}</Text>}
        </Box>

        {/*Hashtag to use*/}

        <Box my={8}>
          <Text color="#808080" fontSize="16px" textAlign="left">
            Hashtags for post
          </Text>
          <Textarea
            bg="#121212"
            width="full"
            p={5}
            border="1px"
            borderColor="#808080"
            borderRadius="lg"
            color="white"
            resize="vertical"
            placeholder="Type then use double space to create hashtag"
            onChange={(e) => setHashtags(e.target.value)}
            onFocus={() => {
              // Clear the error when the input is focused
              setHashtagsError("");
            }}
          />
          {hashtagsError && <Text color="#CB29BE">{hashtagsError}</Text>}
        </Box>

        {fileError && <Text color="#CB29BE">{fileError}</Text>}
        {socialMediaError && <Text color="#CB29BE">{socialMediaError}</Text>}
        {numberOfPostsError && (
          <Text color="#CB29BE">{numberOfPostsError}</Text>
        )}
        {countryError && <Text color="#CB29BE">{countryError}</Text>}
        {stateError && <Text color="#CB29BE">{stateError}</Text>}
        {genderError && <Text color="#CB29BE">{genderError}</Text>}
        {captionError && <Text color="#CB29BE">{captionError}</Text>}
        {hashtagsError && <Text color="#CB29BE">{hashtagsError}</Text>}

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
   <CheckOut isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} amount={result} />
     
    </Container>
  );
};

export default PostAdTasks;

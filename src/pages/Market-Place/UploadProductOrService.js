import {
  Container,
  IconButton,
  Heading,
  Text,
  Input,
  Textarea,
  Flex,
  Image,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  FormControl,
  FormLabel,
  Select,
  Box,
  Button,
  HStack,
} from "@chakra-ui/react";

import NGN from "assets/images/naira.jpg";
import locationData from "../../pages/SignUp/LocationArray";

const UploadProducts = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [countryError, setCountryError] = useState("");
  const [stateError, setStateError] = useState("");
  const [cityError, setCityError] = useState("");
  const [step, setStep] = useState(1);

  const handleCountryChange = (event) => {
    const selectedCountry = event.target.value;
    setSelectedCountry(selectedCountry);
    setSelectedState("");
    setSelectedCity("");
    setCountryError("");
  };

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    setSelectedCity("");
    setStateError("");
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
    setCityError("");
  };

  const currencyOptions = [
    { code: "NGN", image: NGN },
    { code: "EUR", image: "" },
    { code: "GBP", image: "" },
    // Add more currencies as needed
  ];

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

  const handleProceed = () => {
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
    setStep(step + 1);
  };

  const handleProceed2 = () => {
    if (!selectedType) {
      // Validate that a type (Product or Service) is selected
      // If not, show an error message and prevent proceeding
      setSelectedTypeError("Please select a type (Product or Service).");
      return;
    }
    if (!productName) {
      // Validate that a product name is entered
      // If not, show an error message and prevent proceeding
      setProductNameError("Please enter a name.");
      return;
    }
    if (!productDescription) {
      // Validate that a product description is entered
      // If not, show an error message and prevent proceeding
      setProductDescriptionError("Please enter a  description.");
      return;
    }
    if (!selectedFile) {
      // Validate that an image is selected
      // If not, show an error message and prevent proceeding
      setSelectedFileError("Please select an image for your product/service.");
    }
    if (!servicePrice) {
      // Validate that a service price is entered
      // If not, show an error message and prevent proceeding
      setServicePriceError("Please enter  price.");
      return;
    }
    // If all validations pass, proceed to the next step

    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    // Navigate back to the previous step
    setStep(step - 1);
  };

  const [selectedType, setSelectedType] = useState(""); // State to store the selected type (Product or Service)
  const [productName, setProductName] = useState(""); // State to store the product name
  const [productDescription, setProductDescription] = useState("");
  const [servicePrice, setServicePrice] = useState("");
  const [selectedTypeError, setSelectedTypeError] = useState(""); // Error state for selected type (Product or Service)
  const [productNameError, setProductNameError] = useState(""); // Error state for product name
  const [productDescriptionError, setProductDescriptionError] = useState(""); // Error state for product description
  const [selectedFileError, setSelectedFileError] = useState(""); // Error state for selected image
  const [servicePriceError, setServicePriceError] = useState("");

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleProductDescriptionChange = (event) => {
    setProductDescription(event.target.value);
  };

  const [selectedFile, setSelectedFile] = useState(null);

  // Function to handle file drop
  const handleFileDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setSelectedFile(file);
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <>
            <Box color="white" fontFamily="clash grotesk">
              <Heading
                fontSize="34px"
                fontWeight="500"
                fontFamily="clash grotesk"
              >
                Upload product/service
              </Heading>
              <Text fontSize="16px" py={6}>
                part 1 of 3
              </Text>
            </Box>
            <Box color="#808080">
              <Box color="#808080">
                <FormControl fontFamily="clash grotesk" my={4}>
                  <FormLabel>Select your current location</FormLabel>
                  <Select
                    borderColor="#808080"
                    borderRadius="12px"
                    value={selectedCountry}
                    onChange={handleCountryChange}
                  >
                    <option value="">Select Country</option>
                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </Select>
                  <Text fontSize="sm">
                    This helps us recommend your product/service to
                    buyers/resellers near you.
                  </Text>
                  {countryError && <Text color="#CB29BE">{countryError}</Text>}
                </FormControl>

                <FormControl my={4} fontFamily="clash grotesk">
                  <FormLabel>State:</FormLabel>
                  <Select
                    borderColor="#808080"
                    borderRadius="12px"
                    value={selectedState}
                    onChange={handleStateChange}
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

                <FormControl my={4} fontFamily="clash grotesk">
                  <FormLabel color="#808080">Local Government Area</FormLabel>
                  <Select
                    borderColor="#808080"
                    borderRadius="12px"
                    value={selectedCity}
                    onChange={handleCityChange}
                  >
                    <option value="">Select City</option>
                    {cities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </Select>

                  {cityError && <Text color="#CB29BE">{cityError}</Text>}
                </FormControl>
              </Box>

              <Button
                bg="#CB29BE"
                color="white"
                fontWeight={500}
                rounded="25px"
                px={10}
                width="full"
                mb={2}
                _hover={{ bg: "#CB29BE", opacity: "0.9" }}
                fontFamily="clash grotesk"
                mt={4}
                onClick={handleProceed}
              >
                Proceed
              </Button>
            </Box>
          </>
        );
      case 2:
        return (
          <>
            <IconButton
              aria-label="Search database"
              onClick={handlePreviousStep}
              position="absolute"
              left={{ base: "5px", md: "26%" }}
              top="0"
              mb={4}
              color="white"
              bg="inherit"
              _hover={{ bg: "inherit" }}
              fontSize="30px"
              cursor="pointer"
              icon={<ArrowBackIcon />}
            />
            <Box color="white" fontFamily="clash grotesk">
              <Heading
                fontSize="34px"
                fontWeight="500"
                fontFamily="clash grotesk"
              >
                Upload product/service
              </Heading>
              <Text fontSize="16px" py={6}>
                part 2 of 3
              </Text>
            </Box>
            <Box color="#808080">
              {/* Add your content for step 2 */}

              <FormControl fontFamily="clash grotesk" my={4}>
                <FormLabel>Is this a product or service?</FormLabel>
                <Select
                  borderColor="#808080"
                  borderRadius="12px"
                  value={selectedType}
                  onChange={handleTypeChange}
                  onFocus={() => setSelectedTypeError("")}
                >
                  <option value="">Select</option>
                  <option value="Product">Product</option>
                  <option value="Service">Service</option>
                </Select>
                {selectedTypeError && (
                  <Text color="#CB29BE">{selectedTypeError}</Text>
                )}
              </FormControl>

              <FormControl my={4} fontFamily="clash grotesk">
                <FormLabel fontFamily="clash grotesk">
                  {selectedType} Name
                </FormLabel>
                <Input
                  borderColor="#808080"
                  borderRadius="12px"
                  value={productName}
                  onChange={handleProductNameChange}
                />
                {productNameError && (
                  <Text color="#CB29BE">{productNameError}</Text>
                )}
              </FormControl>

              <FormControl my={4} fontFamily="clash grotesk">
                <FormLabel>{selectedType} Description</FormLabel>
                <Textarea
                  borderColor="#808080"
                  borderRadius="12px"
                  value={productDescription}
                  onChange={handleProductDescriptionChange}
                  onFocus={() => setProductDescriptionError("")}
                />
                {productDescriptionError && (
                  <Text color="#CB29BE">{productDescriptionError}</Text>
                )}
              </FormControl>

              {/*Product image */}
              <Text textAlign="left" color="#808080" fontFamily="clash grotesk">
                {selectedType} image
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
                onDrop={handleFileDrop}
                onDragEnter={() => setSelectedFileError("")} 
                onDragOver={(event) => event.preventDefault()}
              >
                <Box style={{ color: "#808080", fontWeight: "500" }}>
                  <Box px={5}>
                    <Box
                      bg="white"
                      h={10}
                      w={10}
                      rounded="full"
                      mx="auto"
                      my={2}
                    >
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
                       
                      }}
                      htmlFor="file-upload"
                      onClick={() => setSelectedFileError("")}
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
              {selectedFileError && (
                <Text color="#CB29BE">{selectedFileError}</Text>
              )}

              <Box mt={5} fontFamily="clash grotesk" mb={10}>
                <FormLabel fontFamily="clash grotesk">
                  {selectedType} price
                </FormLabel>
                <Box display="flex" alignItems="center" >
                  <HStack spacing={2}>
                    <Image
                      src={selectedCurrencyData.image}
                      alt={selectedCurrencyData.code}
                      w={6}
                      h={6}
                      rounded="full"
                    />
                    <Select
                      value={selectedCurrency}
                      onChange={handleChange}
                      w="120px"
                    >
                      {currencyOptions.map((option) => (
                        <option key={option.code} value={option.code}>
                          {option.code}
                        </option>
                      ))}
                    </Select>
                  </HStack>

                  <FormControl ml={2}>
                    <Input
                      type="number"
                      id="numberInput"
                      borderRadius="10px"
                      placeholder="Enter a price"
                      borderColor="#808080"
                      onChange={handleServicePriceChange}
                      onFocus={() => setServicePriceError("")}
                    />
                    
                  </FormControl>
                </Box>
                {servicePriceError && (
                  <Text color="#CB29BE">{servicePriceError}</Text>
                )}
                </Box>
               

                <Button
                  bg="#CB29BE"
                  color="white"
                  fontWeight={500}
                  rounded="25px"
                  px={10}
                  width="full"
                  mb={2}
                  _hover={{ bg: "#CB29BE", opacity: "0.9" }}
                  fontFamily="clash grotesk"
                  mt={4}
                  onClick={handleProceed2}
                >
                  Proceed
                </Button>
              
            </Box>
          </>
        );
      case 3:
        return (
          <>
            <IconButton
              aria-label="Search database"
              onClick={handlePreviousStep}
              position="absolute"
              left={{ base: "5px", md: "26%" }}
              top="0"
              mb={4}
              color="white"
              bg="inherit"
              _hover={{ bg: "inherit" }}
              fontSize="30px"
              cursor="pointer"
              icon={<ArrowBackIcon />}
            />
            <Box color="white" fontFamily="clash grotesk">
              {selectedType === "Product" ? (
                <>
                  {/* Product-specific content for step 3 */}
                  <FormControl fontFamily="clash grotesk" my={4}>
                    <FormLabel>Product-specific Label</FormLabel>
                    {/* Add input field for product-specific data */}
                  </FormControl>
                </>
              ) : (
                <>
                  {/* Service-specific content for step 3 */}
                  <FormControl fontFamily="clash grotesk" my={4}>
                    <FormLabel>Service-specific Label</FormLabel>
                    {/* Add input field for service-specific data */}
                  </FormControl>
                </>
              )}
            </Box>
            <Box color="#808080">
              <Button
                bg="#CB29BE"
                color="white"
                fontWeight={500}
                rounded="25px"
                px={10}
                width="full"
                mb={2}
                _hover={{ bg: "#CB29BE", opacity: "0.9" }}
                fontFamily="clash grotesk"
                mt={4}
                onClick={handleProceed}
              >
                Upload {selectedType}
              </Button>
            </Box>
          </>
        );
      default:
        return null;
    }
  };

  const [selectedCurrency, setSelectedCurrency] = useState(
    currencyOptions[0].code
  );

  const handleChange = (event) => {
    setSelectedCurrency(event.target.value);
  };
  console.log(selectedCurrency);

  const selectedCurrencyData = currencyOptions.find(
    (option) => option.code === selectedCurrency
  );
  const handleServicePriceChange = (event) => {
    setServicePrice(event.target.value);
  };

  return (
    <Container
      ml={{ base: 0, md: "25%" }}
      px="0"
      maxW={{ base: "100%", md: "75%" }}
      mt="0"
      bg="black"
      minH="100vh"
    >
      <Box
        mt="20"
        width={{ base: "full", md: "70%" }}
        mx="auto"
        px={{ base: "5", md: "10" }}
        py={10}
      >
        {renderStepContent()}
      </Box>
    </Container>
  );
};

export default UploadProducts;

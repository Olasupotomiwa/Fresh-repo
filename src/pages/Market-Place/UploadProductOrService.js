import {
  Container,
  Heading,
  Text,
  Input,
  Textarea,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import React, { useState  } from "react";
import { Goback } from "../../ProtectedPages/Earn/Earnhome";
import {
  FormControl,
  FormLabel,
  Select,
  Box,
  Button,
  HStack,
} from "@chakra-ui/react";

import NGN from "assets/images/naira.jpg"
import CountryCode from './UpdatePhoneNo'
import locationData from "../../pages/SignUp/LocationArray";

const UploadProducts = () => {
  //Step 1 states validation
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

  //Handle step 1 proceed button
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
    let hasError = false;

    if (!selectedType) {
      setSelectedTypeError("Please select a type (Product or Service).");
      hasError = true;
    } else {
      setSelectedTypeError(""); // Clear the error message if type is selected.
    }

    if (!productName) {
      setProductNameError("Please enter a name.");
      hasError = true;
    } else {
      setProductNameError(""); // Clear the error message if product name is entered.
    }

    if (!productDescription) {
      setProductDescriptionError("Please enter a description.");
      hasError = true;
    } else {
      setProductDescriptionError(""); // Clear the error message if description is entered.
    }

    if (!selectedFile) {
      setSelectedFileError("Please select an image for your product/service.");
      hasError = true;
    } else {
      setSelectedFileError(""); // Clear the error message if an image is selected.
    }

    if (!servicePrice) {
      setServicePriceError("Please enter a price.");
      hasError = true;
    } else {
      setServicePriceError(""); // Clear the error message if price is entered.
    }

    if (hasError) {
      // If any validation error occurred, return early without proceeding.
      return;
    }

    // If all validations pass, proceed to the next step
    setStep(step + 1);
  };

  //Step 2 states
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
                mt={20}
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
            <Goback />
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
                        cursor: "pointer",
                      }}
                      htmlFor="file-upload"
                      onClick={() => setSelectedFileError("")}
                      cursor="pointer"
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
                <Box display="flex" alignItems="center">
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
                      borderRadius="25px"
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
                      borderRadius="10px"
                      value={servicePrice}
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
            <Goback />
            <Box color="white" fontFamily="clash grotesk">
              <FormControl mb={4}>
                <FormLabel>Select a category</FormLabel>
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
                    onFocus={() => setSelectedCategoryError("")}
                  >
                    {selectedCategory || "Select a category"}
                  </MenuButton>
                  <MenuList maxH="200px" overflow="auto">
                    {categories.map((category) => (
                      <MenuItem
                        key={category}
                        color="#808080"
                        onClick={() => {
                          setSelectedCategory(category);
                        }}
                      >
                        {category}
                      </MenuItem>
                    ))}
                  </MenuList>
                </Menu>
                {selectedCategoryError && (
                  <Text color="#cb29be">{selectedCategoryError}</Text>
                )}
              </FormControl>

              {selectedType === "Product" ? (
                <>
                  {/* Product-specific content for step 3 */}

                  <Box color="#808080">
                    <FormControl mb={4}>
                      <FormLabel color="#ffffff">Brand name</FormLabel>
                      <Input
                        borderColor="#808080"
                        borderRadius="12px"
                        value={BrandName}
                        onChange={(e) => setBrandName(e.target.value)}
                        onFocus={() => setBrandNameError("")}
                      />
                      {BrandNameError && (
                        <Text color="#cb29be">{BrandNameError}</Text>
                      )}
                    </FormControl>

                    <FormControl mb={4} color="#808080">
                      <FormLabel color="#ffffff">Size</FormLabel>
                      <Input
                        borderColor="#808080"
                        borderRadius="12px"
                        value={Size}
                        onChange={(e) => setSize(e.target.value)}
                      />
                      <Text>Only fill this if applicable</Text>
                    </FormControl>

                    <FormControl mb={4}>
                      <FormLabel color="#ffffff">Color</FormLabel>
                      <Input
                        borderColor="#808080"
                        borderRadius="12px"
                        value={Color}
                        onChange={(e) => setColor(e.target.value)}
                      />
                      <Text>Only fill this if applicable</Text>
                    </FormControl>

                    <FormControl mb={4}>
                      <FormLabel color="#ffffff">Material</FormLabel>
                      <Input
                        borderColor="#808080"
                        borderRadius="12px"
                        value={Material}
                        onChange={(e) => setMaterial(e.target.value)}
                      />
                      <Text>Only fill this if applicable</Text>
                    </FormControl>
                  </Box>
                </>
              ) : (
                <>
                  {/* Service-specific content for step 3 */}
                  <CountryCode/>
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
                onClick={handleUpload}
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

  //Synch selected picture with logo
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

  //Step 3 states
  const [selectedCategory, setSelectedCategory] = useState("");
  const [BrandName, setBrandName] = useState("");
  const [Size, setSize] = useState("");
  const [Color, setColor] = useState("");
  const [Material, setMaterial] = useState("");

  const categories = [
    "Fashion",
    "Health & Beauty",
    "Gadget & accessories",
    "Electronics",
    "Home & office",
    "Groceries",
    "Others",
  ];

  const [selectedCategoryError, setSelectedCategoryError] = useState("");
  const [BrandNameError, setBrandNameError] = useState("");

  //Function to validate and open payment modal
  const handleUpload = () => {
    // Check if selected option is empty
    if (!selectedCategory) {
      setSelectedCategoryError("Please select a category.");
      return;
    } else {
      setSelectedCategoryError("");
    }

    if (selectedType === "Product") {
      // If the selected type is "Product," check if brand name is filled
      if (!BrandName) {
        setBrandNameError("Please enter a brand name.");
        return;
      } else {
        setBrandNameError("");
      }
    }

    // Perform your upload logic here
    // ...
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
        pt="20"
        width={{ base: "full", md: "60%" }}
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

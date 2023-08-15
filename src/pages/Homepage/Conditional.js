import React, { useState } from "react";
import {
  Flex,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  chakra,
  Container,
} from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";
import Business from "./Business";
import Earners from "../Homepage/Earners";
import Individuals from "../Homepage/Individuals";

// Define your other components to be rendered conditionally
const Component1 = () => {
  return (
    <Container maxWidth="100%">
      <Earners />
    </Container>
  );
};

const Component2 = () => {
  return (
    <Container maxWidth="100%">
      <Business />
    </Container>
  );
};

const Component3 = () => {
  return (
    <Container maxWidth="100%">
      <Individuals />
    </Container>
  );
};

const OffersForEarners = () => {
  const [selectedOption, setSelectedOption] = useState("Earners");

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      p={{ base: "0", md: "4" }}
     
   
    
    >
      <Text fontSize="xl" fontWeight="400" mb={1} color="white">
        Our Offers for
        <Menu>
          <MenuButton
            as={chakra.button}
            p={2}
            borderRadius="md"
            color="#CB29BE"
          >
            {selectedOption}
            <ChevronDownIcon />
          </MenuButton>
          <MenuList
            color="#808080"
            bg="black"
            fontSize="18px"
            fontFamily="clash grotesk"
            border="none"
          >
            <MenuItem
              onClick={() => handleOptionSelect("Earners")}
              bg="black"
              _hover={{
                color: "#CB29BE",
                transition: "color 0.3s ease-in-out",
              }}
            >
              Earners
            </MenuItem>
            <MenuItem
              onClick={() => handleOptionSelect("Businesses")}
              bg="black"
              _hover={{
                color: "#CB29BE",
                transition: "color 0.3s ease-in-out",
              }}
            >
              Businesses
            </MenuItem>
            <MenuItem
              onClick={() => handleOptionSelect("Individual")}
              bg="black"
              _hover={{
                color: "#CB29BE",
                transition: "color 0.3s ease-in-out",
              }}
            >
              Individual
            </MenuItem>
          </MenuList>
        </Menu>
      </Text>

      {/* Render the selected component based on the chosen option */}
      {selectedOption === "Earners" && <Component1 />}
      {selectedOption === "Businesses" && <Component2 />}
      {selectedOption === "Individual" && <Component3 />}
    </Flex>
  );
};

export default OffersForEarners;

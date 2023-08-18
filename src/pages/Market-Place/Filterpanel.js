import { Box, Flex, Text, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";


import { useState } from "react";

const Filter = () => {
    
  const [selectedOption, setSelectedOption] = useState("Most recent");

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };


  return (
    <Box
      width="100%"
      px="0px"
      bg="#CB29BE"
      color="white"
      fontFamily="clash grotesk"
      paddingY={2}
      pt={3}
      pb={2}
    >
      <Flex justify="space-between" px={5}>
        <Text fontSize={{ base: "12px", md: "sm" }}>Your location : N/A</Text>

        <Menu>
          <MenuButton>
            {selectedOption} <ChevronDownIcon />
          </MenuButton>
          <MenuList color="#CB29BE" fontSize={{ base: "12px", md: "sm" }}>
            <MenuItem
              onClick={() => handleOptionSelect("Most recent")}
              fontSize={{ base: "12px", md: "sm" }}
            >
              Most recent
            </MenuItem>
            <MenuItem
              onClick={() => handleOptionSelect("High to low price")}
              fontSize={{ base: "12px", md: "sm" }}
            >
              High to low price
            </MenuItem>
            <MenuItem
              onClick={() => handleOptionSelect(" Low to high price")}
              fontSize={{ base: "12px", md: "sm" }}
            >
              Low to high price
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
};
export default Filter;

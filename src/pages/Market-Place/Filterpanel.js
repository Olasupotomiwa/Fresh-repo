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
      mt={3}
      mb={2}
    >
      <Flex justify="space-between" px={5}>
        <Text>Your location : N/A</Text>

        <Menu>
          <MenuButton>
            {selectedOption} <ChevronDownIcon />
          </MenuButton>
          <MenuList color="#CB29BE">
            <MenuItem onClick={() => handleOptionSelect("Most recent")}>
              Most recent
            </MenuItem>
            <MenuItem onClick={() => handleOptionSelect("High to low price")}>
              High to low price
            </MenuItem>
            <MenuItem onClick={() => handleOptionSelect(" Low to high price")}>
              Low to high price
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
};
export default Filter;

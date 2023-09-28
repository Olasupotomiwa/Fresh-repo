import React from "react";
import {
  Box,
  Flex,
  Spacer,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const Navbar = ({ onNavLinkClick }) => {
  const navLinks = [
    { label: "All", id: "All" },
    { label: "Fashion", id: "Fashion" },
    { label: "Health & Beauty", id: "Health & Beauty" },
    { label: "Gadget & accessories", id: "Gadget & accessories" },
    { label: "Electronics", id: "Electronics" },
    { label: "Home & office", id: "Home & office" },
    { label: "Groceries", id: "Groceries" },
    { label: "Others", id: "Other" },
  ];

  return (
    <Box
      as="nav"
      py={1}
      px={{base: '4', md: '2'}}
      boxShadow="md"
      bg="#121212"
      color="#808080"
      display={{ base: "block", md: "flex" }}
      justifyContent="space-between"
      alignContent="space-between"
      data-aos="fade-up"  data-aos-duration="2000"
     overflowX='auto'
      
    >
      {/* Navigation Links */}

      <Flex alignItems="center" justify="space-between" mx="auto">
        {navLinks.map((link) => (
          <Box
            key={link.id}
            mx={4}
            fontSize="sm"
            cursor="pointer"
            onClick={() => onNavLinkClick(link.id)}
            display={{ base: "none", md: "block" }}
            fontFamily="clash grotesk"
          >
            {link.label}
          </Box>
        ))}

        <Spacer />
        {/* Search Box */}
            
          <InputGroup
          width={{base: '100%', md: 'auto'}}
            borderColor="#808080"
            bg="black"
           
          >
            <Input
              type="text"
              placeholder="Search..."
              fontSize="sm"
              color="#808080"
            />
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="#808080" />
            </InputLeftElement>
          </InputGroup>
       
      </Flex>
      {/* Mobile Navigation Links */}
      <Box mt={4} display={["block", "block", "none"]}>
        <Flex flexWrap="nowrap" overflowX="scroll">
          {navLinks.map((link) => (
            <Box
              key={link.id}
              px={3}
              py={{base: '3', md: '0'}}
              whiteSpace="nowrap"
              fontSize="sm"
              cursor="pointer"
              onClick={() => onNavLinkClick(link.id)}
              fontFamily="clash grotesk"
            >
              {link.label}
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default Navbar;

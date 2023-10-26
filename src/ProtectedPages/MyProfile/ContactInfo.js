import {
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  InputRightElement,
  InputGroup,
  Button,
} from "@chakra-ui/react";
import UpdatePassword from './UpdatePassword'
import { useSelector } from "react-redux";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import React, { useState } from "react";

const ContactInfo = () => {
  const [showPassword1, setShowPassword1] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Define isModalOpen state

  const handleTogglePassword1 = () => {
    setShowPassword1(!showPassword1);
  };
  const user = useSelector((state) => state.auth.user);

  // Define openModal function
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Define closeModal function
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Box>
      <FormControl fontFamily="clash grotesk" my={6}>
        <FormLabel color="#808080">Username</FormLabel>
        <Input
          type="text"
          color="white"
          bg="#121212"
          borderColor="#808080"
          borderRadius="12px"
          placeholder="E.g Dezfoods"
          fontFamily="clash grotesk"
          value={user.username}
          readOnly="true"
        />
      </FormControl>

      <FormControl fontFamily="clash grotesk" my={5}>
        <FormLabel color="#808080">Password</FormLabel>
        <InputGroup>
          <Input
            type={showPassword1 ? "text" : "password"}
            borderColor="#808080"
            borderRadius="12px"
            color="white"
            bg="#121212"
            placeholder="Enter your password"
            value={user.password}
            readOnly="true"
          />
          <InputRightElement width="4.5rem">
            <Button
              h="1.75rem"
              bg="inherit"
              size="sm"
              _hover={{ bg: "inherit" }}
              _active={{ bg: "inherit" }}
              _focus={{ boxShadow: "none" }}
              onClick={handleTogglePassword1}
            >
              {showPassword1 ? (
                <ViewOffIcon color="#808080" />
              ) : (
                <ViewIcon color="#808080" />
              )}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Text
          fontSize="sm"
          color="#cb29be"
          textAlign="right"
          py={2}
          onClick={openModal}
          cursor='pointer'
        >
          Change password
        </Text>
        <UpdatePassword isOpen={isModalOpen} onClose={closeModal}/>
      </FormControl>

      <FormControl fontFamily="clash grotesk" my={5}>
        <FormLabel color="#808080">Email Address</FormLabel>
        <Input
          type="email"
          borderColor="#808080"
          borderRadius="12px"
          color="white"
          value={user.email}
          readOnly="true"
        />
      </FormControl>
    </Box>
  );
};
export default ContactInfo;

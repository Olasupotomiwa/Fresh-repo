import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Button,
  } from "@chakra-ui/react";
  import React, { useState } from 'react';
  
  const UpdatePassword = ({ isOpen, onClose }) => {
    const [password, setPassword] = useState('');
  
    const handleChangePassword = () => {
      // Perform the password update logic here
      // For example, you can make an API request to update the password
      // After the update is successful, you can close the modal
      // You may want to add error handling as needed
      // For this example, we'll simply close the modal
      onClose();
    };
  
    return (
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={{ base: "sm", md: "md" }}
        isCentered
      >
        <ModalOverlay />
        <ModalContent
          bg="black"
          border="1px"
          borderColor="#808080"
          borderRadius="25px"
          fontFamily="clash grotesk"
          p={{ base: "0", md: "6" }}
        >
          <ModalHeader>
            <Heading
              textAlign="center"
              fontSize="20px"
              color="white"
              fontWeight="400"
              fontFamily="clash grotesk"
            >
              Update Password
            </Heading>
          </ModalHeader>
          <ModalCloseButton
            bg="#808080"
            rounded="full"
            position="absolute"
            top="-8px"
            right="-5px"
          />
          <ModalBody>
            <FormControl my={4}>
              <FormLabel color="#808080">New Password</FormLabel>
              <Input
                type="password"
                borderColor="#808080"
                borderRadius="12px"
                color="white"
                bg="#121212"
                placeholder="Enter your new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="teal"
              onClick={handleChangePassword}
              fontFamily="clash grotesk"
            >
              Update
            </Button>
            <Button onClick={onClose} ml={3} fontFamily="clash grotesk">
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  };
  
  export default UpdatePassword;
  
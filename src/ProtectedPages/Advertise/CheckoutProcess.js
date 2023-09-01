import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Heading,
  Text,
  Center,
  Button,
  Box,
} from "@chakra-ui/react";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";

const contents = [
  {
    icon: "uis:padlock",
    heading: "100% Secure Online Payment",
    text: "Pay through our highly secured payment method using your Mastercard/VISA/Verve card or Internet Bank Transfer.",
    icon2: "entypo:wallet",
    heading2: "Pay from your Trendit Wallet",
    text2:
      "You can pay for this task from your Trendit wallet balance of $650  You are just one click away!",
      icon3: 'material-symbols:arrow-right-alt-rounded',
  },
  {
    heading: "Content 2",
    text: "This is the second content.",
  },
  {
    heading: "Content 3",
    text: "This is the third content.",
  },
];

const CheckOut = ({ isOpen, onClose }) => {
  const [currentContent, setCurrentContent] = useState(0);

  const handleNext = () => {
    if (currentContent < contents.length - 1) {
      setCurrentContent(currentContent + 1);
    }
  };

  const handlePrev = () => {
    if (currentContent > 0) {
      setCurrentContent(currentContent - 1);
    }
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
        p={4}
      >
        <Text color="white">Upload ad</Text>
        <ModalCloseButton
          bg="#808080"
          rounded="full"
          position="absolute"
          top="-8px"
          right="-5px"
        />
        <ModalBody color="#808080">
          <>
            <Box display="flex" textAlign="left">
              <Box pr={3}>
                <iconify-icon
                  icon={contents[currentContent].icon}
                  style={{ color: "#CB29BE" }}
                  width="23"
                />
              </Box>

              <Box>
                <Heading
                  color="white"
                  fontSize="sm"
                  fontFamily="clash grotesk"
                  pb={2}
                >
                  {contents[currentContent].heading}
                </Heading>

                <Text fontSize="14px">{contents[currentContent].text}</Text>
              </Box>

              <Box pr={3} cursor='pointer'> {/* attach onclick function to lead to payment channel */}
                <iconify-icon
                  icon={contents[currentContent].icon3} 
                  style={{ color: "#CB29BE" }}
                  width="23"
                />
              </Box>
            </Box>
          </>



          <>
            <Box display="flex" textAlign="left" mt={3}>
              <Box pr={3}>
                <iconify-icon
                  icon={contents[currentContent].icon2}
                  style={{ color: "#CB29BE" }}
                  width="20"
                />
              </Box>

              <Box>
                <Heading
                  color="white"
                  fontSize="sm"
                  fontFamily="clash grotesk"
                  pb={2}
                >
                  {contents[currentContent].heading2}
                </Heading>

                <Text fontSize="14px">{contents[currentContent].text2}</Text>
              </Box>
               <Box  cursor="pointer"   onClick={handleNext}> 
              <iconify-icon
                  icon={contents[currentContent].icon3}
                  style={{ color: "#CB29BE" }}
                  width="23"
                 
                />
                </Box>
            </Box>
          </>

          <Center>
            {currentContent > 0 && (
              <Button
                leftIcon={<ChevronLeftIcon />}
                onClick={handlePrev}
                mr={2}
                colorScheme="teal"
              >
                Previous
              </Button>
            )}
            {currentContent < contents.length - 1 && (
              <Button
                rightIcon={<ChevronRightIcon />}
                onClick={handleNext}
                colorScheme="teal"
              >
                Next
              </Button>
            )}
          </Center>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CheckOut;

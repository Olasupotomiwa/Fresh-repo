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
  Spinner, // Import Spinner from Chakra UI
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

const CheckOut = ({ isOpen, onClose, amount }) => {
  const [currentContent, setCurrentContent] = useState(0);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

 
  const handleNext = () => {
    if (currentContent < 2) {
      setCurrentContent(currentContent + 1);
    }
  };

  const handlePrev = () => {
    if (currentContent > 0) {
      setCurrentContent(currentContent - 1);
    }
  };

  const handleProceed = () => {
    if (currentContent === 1) {
      // Simulate payment processing for 3 seconds
      setIsProcessingPayment(true);
      setTimeout(() => {
        setIsProcessingPayment(false);
        setCurrentContent(2); // Move to the last step
      }, 3000);
    } else {
      // Handle other button clicks here
      // For example, if there are other steps or actions
    }
  };
  const balance = useSelector((state) => state.auth.user.Balance);

  const remainingBalance = balance - amount;
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
        <ModalCloseButton
          bg="#808080"
          rounded="full"
          position="absolute"
          top="-8px"
          right="-5px"
        />
        <ModalBody color="#808080">
          {/* Content based on current step */}
          <Box>
            {currentContent === 0 && (
              <Box>
                <Text color="white">Upload ad</Text>
                <Box display="flex" textAlign="left">
                <Box pr={3}>
                    <iconify-icon
                      icon="uis:padlock"
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
                      100% Secure Online Payment
                    </Heading>

                    <Text fontSize="14px">
                      Pay through our highly secured payment method using your
                      Mastercard/VISA/Verve card or Internet Bank Transfer.
                    </Text>
                  </Box>

                  <Box pr={3} cursor="pointer">
                    {" "}
                    {/*Attach link to payment channel here */}
                    <iconify-icon
                      icon="material-symbols:arrow-right-alt-rounded"
                      style={{ color: "#CB29BE" }}
                      width="23"
                    />
                  </Box>
                </Box>

                <Box display="flex" textAlign="left" mt={3}>
                  <Box pr={3}>
                    <iconify-icon
                      icon="entypo:wallet"
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
                      Pay from your Trendit Wallet
                    </Heading>

                    <Text fontSize="14px">
                      You can pay for this task from your Trendit wallet balance
                      of ${balance}. You are just one click away!
                    </Text>
                  </Box>

                  <Box pr={3} cursor="pointer" onClick={handleNext}>
                    {" "}
                    <iconify-icon
                      icon="material-symbols:arrow-right-alt-rounded"
                      style={{ color: "#CB29BE" }}
                      width="23"
                    />
                  </Box>
                </Box>
              </Box>
            )}

            {currentContent === 1 && (
              <Box>
                   <Text color="white" onClick={handlePrev} cursor="pointer">
                  {" "}
                  <iconify-icon
                    icon="material-symbols:arrow-back-rounded"
                    style={{ color: "white" }}
                    width="23"
                  />{" "}
                  Payment method
                </Text>

                <Box textAlign="center">
                  <Box py={3} mb={2}>
                    <Heading
                      color="white"
                      fontSize="20px"
                      fontWeight="500"
                      fontFamily="clash grotesk"
                    >
                      Current Wallet Balance
                    </Heading>

                    <Text fontSize="18px" color="#CB29BE" fontWeight='600'>
                    ${balance}
                    </Text>
                  </Box>
                </Box>
                <Box color="#808080" py={3}>
                  <Text>Amount due for task: ${amount} </Text>
                  <Text>Wallet balance after this payment: ${remainingBalance} </Text>
                </Box>

                <Box bg="#121212" p={3} rounded="lg" my={2}>
                  <Text color="white">Disclaimer</Text>
                  <Text fontSize="sm">
                    You can always add more money to your Trendit wallet by
                    carrying out money-earning tasks or simply funding the
                    wallet from your bank account.
                  </Text>
                </Box>
                <Box py={3}>
                 
                    <Button
                      bg="#CB29BE"
                      color="white"
                      _hover={{ bg: "#CB29BE" }}
                      width="full"
                      onClick={handleProceed}
                    >
                      {isProcessingPayment ? (
                      <Spinner size="sm" color="white" />
                    ) : (
                      "Proceed to pay"
                    )}
                  </Button>
                </Box>
              </Box>
            )}


            {currentContent === 2 && (
              <Box textAlign="center">
                <Box>
                  <Center pr={3}>
                    <iconify-icon
                      icon="bxs:badge-check"
                      style={{ color: "#CB29BE" }}
                      width="80px"
                    />
                  </Center>

                  <Box>
                    <Heading
                      color="white"
                      fontSize="30px"
                      fontFamily="clash grotesk"
                      pb={2}
                    >
                      Payment successful
                    </Heading>

                    <Text fontSize="16px" color="#808080">
                      Your task has been paid for and uploaded! Our users can
                      now see your task in their task bar, you’ll get
                      notifications about the progress of this task.
                    </Text>
                  </Box>
                </Box>
              </Box>
            )}
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CheckOut;

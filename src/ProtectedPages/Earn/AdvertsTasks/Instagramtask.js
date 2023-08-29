import React, { useState } from "react";
import {
  Container,
  Text,
  Heading,
  Box,
  Flex,
  VStack,
  Divider,
  Button,
  Center,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useFetch } from "../../../React-query-hook/hook";
import Loader from "../../../Loader";

const IGtasks = ({ apiEndpoint }) => {
  const { data, isLoading, error, handlePageChange, totalPages, currentPage } =
    useFetch("https://jsonplaceholder.typicode.com/albums");

  // State to control the modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State to store the selected task
  const [selectedTask, setSelectedTask] = useState(null);

  // Function to open the modal and set the selected task
  const openModal = (task) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedTask(null);
    setIsModalOpen(false);
  };

  return (
    <Container
      ml={{ base: 0, md: "25%" }}
      px="0"
      py={{ base: "7", md: "10" }}
      maxW={{ base: "100%", md: "75%" }}
      bg="black"
      height="100%"
      mt="20"
      fontFamily="clash grotesk"
    >
      {isLoading && (
        <Container bg="black" height="100vh">
          <Loader />
          <Text color="white" textAlign="center">
            Loading available tasks
          </Text>
        </Container>
      )}

      {error && <div>Error: {error.message}</div>}

      {!isLoading && !error && (
        <Box pt={{ base: "0", md: "50" }} px={{ base: "4", md: "10" }}>
          <Heading
            color="white"
            fontFamily="clash grotesk"
            fontSize="25px"
            fontWeight="600"
            textAlign={{ base: "center", md: "left" }}
          >
            Instagram adverts tasks
          </Heading>
          <Text
            color="#808080"
            py={4}
            textAlign={{ base: "center", md: "left" }}
          >
            Our Instagram adverts tasks only require you to download the ad
            image or video and share it on your Instagram account
          </Text>

          {data.map((item) => (
            <Box key={item.id}>
              {/* Render your data as needed */}
              {/* Modify the following lines to display your data */}
              <Flex
                py="2"
                width={{ base: "100%", md: "100%", lg: "80%" }}
                justifyContent="space-between"
                alignItems="flex-start"
              >
                <Flex alignItems="flex-start">
                  <Image
                    src="https://via.placeholder.com/100" // Replace with your image URL
                    alt="Image"
                    width={{ base: "100px", md: "200px" }}
                    height={{ base: "150px", md: "100px" }}
                    objectFit="cover"
                    mr={{ base: "6px", md: "12px" }}
                  />
                  {/* Your data display here */}
                  <VStack alignItems="flex-start" spacing={8}>
                    <Box>
                      <Text fontWeight="bold" color="#CB29BE">
                        Title
                      </Text>
                      <Text color="#808080">Description</Text>
                    </Box>

                    <Text
                      color="#808080"
                      display={{ base: "block", md: "flex" }}
                    >
                      {item.title}
                    </Text>
                  </VStack>
                </Flex>

                <Flex
                  flexDirection="column"
                  alignItems="flex-start"
                  mt="auto"
                  display={{ base: "block", md: "flex" }}
                >
                  <Text
                    color="#CB29BE"
                    fontWeight="bold"
                    cursor="pointer"
                    textAlign="right"
                    onClick={() => openModal(item)}
                  >
                    Perform Task <ArrowForwardIcon fontWeight="400" ml={1} />
                  </Text>
                </Flex>
              </Flex>
              <Divider
                borderColor="#808080"
                mt={1}
                maxW={{ base: "100%", md: "80%" }}
              />
            </Box>
          ))}

          <Flex justifyContent="center" mt={4}>
            {Array.from({ length: totalPages }, (_, index) => (
              <Button
                key={index + 1}
                colorScheme={index + 1 === currentPage ? "teal" : "#121212"}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </Button>
            ))}
          </Flex>
        </Box>
      )}

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
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
          <Heading
            textAlign="center"
            fontSize="20px"
            color="white"
            fontWeight="400"
            fontFamily="clash grotesk"
          >
            Perform task
          </Heading>
          <ModalCloseButton
            bg="#808080"
            rounded="full"
            position="absolute"
            top="-8px"
            right="-5px"
          />
          <ModalBody>
            {/* Modal content here */}
            {selectedTask && (
              <div>
                {/* Add your modal content here */}
                <Text color="#808080" textAlign="center" py={4}>
                  If you proceed to perform this tasks, you will have just{" "}
                  <span style={{ color: "#CB29BE", fontWeight: "600" }}>
                    1 hour
                  </span>{" "}
                  to complete the task. Otherwise, it will e cancelled
                </Text>
                <Center pt={5}>
                  <Button
                    as={Link}
                    to={`/earn/instagram-tasks/perform-task/${selectedTask.id}`}
                    color="white"
                    bg="#CB29BE"
                    rounded="full"
                    fontWeight="400"
                    px="60px"
                    _hover={{ bg: "#CB29BE" }}
                  >
                    Proceed
                  </Button>
                </Center>
              </div>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default IGtasks;

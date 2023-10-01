import React, { useState, useEffect } from "react";
import { Goback } from "../Earnhome";
import Gele from 'assets/Markets/Gele.png'
import {
  Container,
  Text,
  Heading,
  Box,
  Flex,
  Divider,
  Button,
  Center,
  HStack,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Pagination from "components/Pagination";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useFetch } from "../../../React-query-hook/hook";
import Loader from "../../../Loader";
import ScrollToTop from "components/scrolltop";
import {colors} from "components/colors"










const IGtasks = ({
  apiEndpoint = "https://jsonplaceholder.typicode.com/albums",
  customHeading,
  customText,
}) => {
  const { data, isLoading, error, handlePageChange, totalPages, currentPage, totalDataLength } =
    useFetch(apiEndpoint);
    console.log(totalDataLength)

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

  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Container
      ml={{ base: 0, md: "25%" }}
      px="0"
      py={{ base: "20", md: "10px" }}
      maxW={{ base: "100%", md: "75%" }}
      bg="black"
      height="100%"
     

      fontFamily="clash grotesk"
     
    >
      <Goback />
      <ScrollToTop/>

      {isLoading && (
        <Container bg="black" height="100vh">
          <Loader />
          <Text color="white" textAlign="center" mt={20}>
            Loading available tasks
          </Text>
        </Container>
      )}

      {error &&  <Container bg="black" height="100vh" alignContent='center' alignItems='center'>
       
     
      <Text color="white" textAlign="center">
            Could not fetch tasks <br/> Ensure you are connected to the internet
          </Text>
        </Container>}

      {!isLoading && !error && (
        <Box pt={{ base: "0", md: "50" }} px={{ base: "4", md: "10" }}>
          <Heading
            color="white"
            fontFamily="clash grotesk"
            fontSize="22px"
            mt={0}
            py={2}
            fontWeight="600"
            textAlign={{ base: "center", md: "left" }}
          >
            {customHeading || "Instagram adverts tasks"}
          </Heading>
          <Text
            color={colors.primaryText}
            py={4}
            textAlign={{ base: "center", md: "left" }}
          >
            {customText ||
              "Our Instagram adverts tasks only require you to download the ad image or video and share it on your Instagram account"}
          </Text>
          {/* Display the total number of data available */}
          <Text
            color={colors.whiteText}
            textAlign={{ base: "center", md: "left" }}
            fontWeight="600"
            fontSize="20px"
            my={4}
          >
            Tasks ({totalDataLength}{" "})
            {/* Assuming 20 items per page */}
          </Text>



         
          {totalDataLength === 0 ? (
           
            <Text color={colors.primaryText} textAlign="center">
              No tasks available.
            </Text>
          ) : (

          data.map((item) => (
            <Box
              key={item.id}
              maxW={{ md: "100%", lg: "80%" }}
            >
              <Box>
                <HStack>
                  <Image
                    src={Gele} // Replace with your image URL
                    alt="Image"
                    width={{ base: "100px", md: "200px" }}
                    height={{ base: "150px", md: "100px" }}
                    objectFit="cover"
                    mb="-12px"
                    mt={2} // Adjust margin-bottom for smaller screens
                  />

                  <Box display="flex">
                    <Box ml={2}>
                      <Box mb={6}>
                        <Text color={colors.primary} fontWeight="600">
                          Title
                        </Text>
                        <Text color={colors.primaryText}>Description</Text>
                      </Box>
                      <Box>
                        <Text pr={2} color={colors.primaryText}>
                          {item.title}
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                </HStack>
                <Box width={{base: '35%', md: '25%', lg: '20%'}} ml={{base: '65%', md: '75%', lg: '80%'}}>
                  <Text
                    width="auto"
                    textAlign="right"
                    color={colors.secondary}
                    fontWeight="500"
                    mb="-4px"
                    onClick={() => openModal(item)}
                    cursor='pointer'
                  >
                    Perform task <ArrowForwardIcon />{" "}
                  </Text>
                </Box>
              </Box>
              <Divider borderColor={colors.primaryText} mt={1} />
            </Box>
          ))
        )}

          <Flex justifyContent="center" mt={4}>
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={(page) => {
                handlePageChange(page);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />
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
          borderColor={colors.primaryText}
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
            bg={colors.primaryText}
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
                <Text color={colors.primaryText} textAlign="center" py={4}>
                  If you proceed to perform this tasks, you will have just{" "}
                  <span style={{ color: colors.primary, fontWeight: "600" }}>
                    1 hour
                  </span>{" "}
                  to complete the task. Otherwise, it will be cancelled
                </Text>
                <Center pt={5}>
                  <Button
                    as={Link}
                    to={`/earn/perform-task/${selectedTask.id}?apiEndpoint=${apiEndpoint}`}
                    color="white"
                    bg={colors.primary}
                    rounded="full"
                    fontWeight="400"
                    px="60px"
                    _hover={{ bg: colors.secondary }}
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

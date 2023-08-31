import React, { useState, useEffect } from "react";
import { Goback } from "../Earnhome";
import IG from 'assets/SocialMediaLogo/IG.png'
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
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useFetch } from "../../../React-query-hook/hook";
import Loader from "../../../Loader";
import ScrollToTop from "components/scrolltop";





function Pagination({ totalPages, currentPage, onPageChange }) {
  const maxPageButtons = 5; // Adjust this value as needed
  

  // Calculate the range of page buttons to display
  const startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
  const endPage = Math.min(totalPages, startPage + maxPageButtons - 1);

  // Generate an array of page numbers within the current range
  const pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, i) =>
    startPage + i
  );

  return (
    <div className="pagination">
      {currentPage > 1 && (
        <button
          className="previous"
          onClick={() => onPageChange(currentPage - 1)}
        >
          Previous
        </button>
      )}
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          className={pageNumber === currentPage ? "activebtn" : "page"}
        >
          {pageNumber}
        </button>
      ))}
      {currentPage < totalPages && (
        <button
          className="next"
          onClick={() => onPageChange(currentPage + 1)}
        >
          Next
        </button>
      )}
    </div>
  );
}


//Faked api call
//Data from Api are not displayed
const FollowPages = ({
  apiEndpoint = "https://jsonplaceholder.typicode.com/albums",
  customHeading,
  customText,
}) => {
  const { data, isLoading, error, handlePageChange, totalPages, currentPage } =
    useFetch(apiEndpoint);

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
      py={{ base: "7", md: "10" }}
      maxW={{ base: "100%", md: "75%" }}
      bg="black"
      height="100%"
      mt="20"
      fontFamily="clash grotesk"
      id="top"
    >
      <Goback />
      <ScrollToTop/>

      {isLoading && (
        <Container bg="black" height="100vh">
          <Loader />
          <Text color="white" textAlign="center">
            Loading available tasks
          </Text>
        </Container>
      )}

      {error && <Text color="white">Error: {error.message}</Text>}

      {!isLoading && !error && (
        <Box pt={{ base: "0", md: "50" }} px={{ base: "4", md: "10" }}>
          <Heading
            color="white"
            fontFamily="clash grotesk"
            fontSize="25px"
            fontWeight="600"
            textAlign={{ base: "center", md: "left" }}
          >
            {customHeading || "Follow people and pages"}
          </Heading>
          <Text
            color="#808080"
            py={4}
            textAlign={{ base: "center", md: "left" }}
          >
            {customText ||
              "Follow people and pages on Instagram, TikTok, Facebook and Twitter."}
          </Text>
          {/* Display the total number of data available */}
          <Text
            color="#ffffff"
            textAlign={{ base: "center", md: "left" }}
            fontWeight="600"
            fontSize="20px"
            my={4}
          >
            Tasks ({totalPages * 20}{" "})
            {/* Assuming 20 items per page */}
          </Text>

          {data.map((item) => (
            <Box
              key={item.id}
              maxW={{ md: "100%", lg: "80%" }}
            >
              <Box>
                <HStack>
                  <Image
                    src={IG} // Replace with your image URL
                    alt="Image"
                    width='50px'
                    height='50px'
                    objectFit="cover"
                   
                  />

                  <Box display="flex">
                    <Box ml={2}>
                      <Box mb={3}>
                        <Text color="#ffffff" fontWeight="400">
                          Follow Instagram account
                        </Text>
                        <Text color="#808080" fontSize='sm'>Posted May 11, 2022</Text>
                      </Box>
                     
                    </Box>
                  </Box>
                </HStack>
                <Box width={{base: '35%', md: '25%', lg: '20%'}} ml={{base: '65%', md: '75%', lg: '80%'}}>
                  <Text
                    width="auto"
                    textAlign="right"
                    color="#CB29BE"
                    fontWeight="500"
                    mb="-4px"
                    onClick={() => openModal(item)}
                    cursor='pointer'
                  >
                    Perform task <ArrowForwardIcon />{" "}
                  </Text>
                </Box>
              </Box>
              <Divider borderColor="#808080" mt={1} />
            </Box>
          ))}

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
               
                <Text color="#808080" textAlign="center" py={4}>
                  If you proceed to perform this tasks, you will have just{" "}
                  <span style={{ color: "#CB29BE", fontWeight: "600" }}>
                    1 hour
                  </span>{" "}
                  to complete the task. Otherwise, it will be cancelled
                </Text>
                <Center pt={5}>
                  <Button
                    as={Link}
                    to={`/earn/engagement/perform-task/${selectedTask.id}`}
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

export default FollowPages;

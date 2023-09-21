import { useFetch } from "../../React-query-hook/hook";
import { Box, Container, Flex, Text } from "@chakra-ui/react";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
import ScrollToTop from "components/scrolltop";
import Loader from "../../Loader";

function Pagination({ totalPages, currentPage, onPageChange }) {
  const maxPageButtons = 5; // Adjust this value as needed

  // Calculate the range of page buttons to display
  const startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
  const endPage = Math.min(totalPages, startPage + maxPageButtons - 1);

  // Generate an array of page numbers within the current range
  const pageNumbers = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
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
        <button className="next" onClick={() => onPageChange(currentPage + 1)}>
          Next
        </button>
      )}
    </div>
  );
}

const History = ({
  apiEndpoint = "https://jsonplaceholder.typicode.com/albums",
}) => {
    const pageSize = 10
  const {
    data,
    isLoading,
    error,
    handlePageChange,
    totalPages,
    currentPage,
    totalDataLength,
  } = useFetch(apiEndpoint,  pageSize);
  console.log(totalDataLength);

  return (
    <Container px="0" fontFamily="clash grotesk">
      <ScrollToTop />

      {isLoading && (
        <Container bg="black" height="100%">
          <Loader />
          <Text color="white" textAlign="center">
            Loading available tasks
          </Text>
        </Container>
      )}

      {error && (
        <Container
          bg="black"
          height="100vh"
          alignContent="center"
          alignItems="center"
        >
          <Text color="white" textAlign="center">
            Could not fetch tasks <br /> Ensure you are connected to the
            internet
          </Text>
        </Container>
      )}

      {!isLoading && !error && (
        <Box  width='100%'>
          {/* Display the total number of data available */}
          <Text
            color="#ffffff"
            textAlign={{ base: "center", md: "left" }}
            fontWeight="600"
            fontSize="20px"
          >
            Tasks ({totalDataLength} ){/* Assuming 20 items per page */}
          </Text>

          {totalDataLength === 0 ? (
            <Text color="#808080" textAlign="center">
              No tasks available.
            </Text>
          ) : (
            <Container style={{ overflowX: 'auto' }} width='100%' px={0}> {/* Allow horizontal overflow */}
            <TableContainer  width='full'>
    <Table variant='simple' color='white'>
     
      <Thead bg='#121212'>
        <Tr  color='white' fontFamily='clash grotesk'>
        <Th>S/N</Th>
          <Th>Name</Th>
          <Th>Date</Th>
          <Th>Status</Th>
          <Th>Payment due</Th>
        </Tr>
      </Thead>
      <Tbody bg='#121212' textAlign='center'>
        {data.map((item) => (
          <Tr key={item.id}>
             <Td>{item.id}</Td>
            <Td>Victoria Pedro</Td>
            <Td>12/09/2023</Td>
            <Td>Registred</Td>
            <Td>$4</Td>
            

          </Tr>
        ))}
      </Tbody>
      <Tfoot>
       
       
      </Tfoot>
    </Table>
  </TableContainer>
  </Container>

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
    </Container>
  );
};

export default History;

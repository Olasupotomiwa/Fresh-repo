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
  TableContainer,
} from "@chakra-ui/react";
import ScrollToTop from "components/scrolltop";
import Loader from "../../Loader";
import Pagination from "components/Pagination";

const History = ({
  apiEndpoint = "https://jsonplaceholder.typicode.com/posts",
}) => {
  const pageSize = 10;
  const {
    data,
    isLoading,
    error,
    handlePageChange,
    totalPages,
    currentPage,
    totalDataLength,
  } = useFetch(apiEndpoint, pageSize);
  console.log(totalDataLength);

  return (
    <Container px="0" fontFamily="clash grotesk" maxW="100%" pb={150}>
      <ScrollToTop />
      <Text
            color="#ffffff"
            textAlign={{ base: "center", md: "left" }}
            fontWeight="600"
            fontSize="20px"
            paddingTop={10}
          >
            Referral history ({totalDataLength} )
          </Text>
      <TableContainer
        width="100%"
        borderColor="#808080"
        borderWidth="1px"
        borderRadius="md"
        bg="#121212"
      >
        <Table variant="simple" color="white">
          <Thead bg="#333333" textAlign="center" borderColor="#808080">
            <Tr textAlign="center">
              <Th
                color="#ffffff"
                fontFamily="clash grotesk"
                borderColor="#808080"
                w="100px"
              >
                S/N
              </Th>
              <Th
                color="#ffffff"
                fontFamily="clash grotesk"
                borderColor="#808080"
              >
                Name
              </Th>
              <Th
                color="#ffffff"
                fontFamily="clash grotesk"
                borderColor="#808080"
              >
                Date
              </Th>
              <Th
                color="#ffffff"
                fontFamily="clash grotesk"
                borderColor="#808080"
              >
                Status
              </Th>
              <Th
                color="#ffffff"
                fontFamily="clash grotesk"
                borderColor="#808080"
              >
                Payment due
              </Th>
            </Tr>
          </Thead>
          <Tbody bg="#121212">
            {/* Show loading state */}
            {isLoading && (
              <Tr >
                <Td colSpan="5" textAlign='center'>
                  <Loader />
                  Loading your referral history
                </Td>
              </Tr>
            )}

            {/* Show error state */}
            {error && (
              <Tr textAlign='center'>
                <Td colSpan="5" color="white" textAlign='center'>
                  Could not fetch referral history.  <br />Ensure you are connected to
                  the internet.
                </Td>
              </Tr>
            )}

            {/* Show no data message */}
            {!isLoading && !error && totalDataLength === 0 && (
              <Tr>
                <Td colSpan="5" color="white">
                  Oops! You do not have any referees yet!
                </Td>
              </Tr>
            )}

            {/* Show data */}
            {!isLoading &&
              !error &&
              totalDataLength > 0 &&
              data.map((item) => (
                <Tr key={item.id} borderColor="#808080">
                  <Td width="100px" borderColor="#808080" fontSize='sm'>
                    {item.id}
                  </Td>
                  <Td borderColor="#808080" fontSize='sm'>Victoria Pedro</Td>
                  <Td borderColor="#808080" fontSize='sm'>12/09/2023</Td>
                  <Td
                    borderColor="#808080"
                  >
                    <Box  display='flex' bg='white' textAlign='center' py={1} px={2} rounded='full' width='100px'>
                     <span
                      style={{
                        display: "inline-block",
                        backgroundColor: "#3A9800",
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        marginRight: "4px",
                        marginTop: '5px'
                      }}
                    ></span>
                    <Text color='#3A9800' fontSize='sm'>Registered</Text>
                    </Box>
                   
                  </Td>
                  <Td borderColor="#808080" fontSize='sm'>$4</Td>
                </Tr>
              ))}
          </Tbody>
          <Tfoot></Tfoot>
        </Table>

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
      </TableContainer>
    </Container>
  );
};

export default History;

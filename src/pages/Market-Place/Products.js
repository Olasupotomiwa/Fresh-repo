import React from "react";
import {
  Box,
  Flex,
  Heading,
  Image,
  Button,
  Text,
  Container,
} from "@chakra-ui/react";

import { useFetch } from "../../React-query-hook/hook"; // Import the useFetch hook
import Loader from "../../Loader";
import Pagination from "components/Pagination";

const ProductCard = ({ product }) => (
  <Box
    width={{ base: "48%", md: "272.43px" }}
    borderRadius="lg"
    overflow="hidden"
    px={0}
    boxShadow="md"
    height={{ base: "370px", md: "430.3px" }}
    bg="black"
    mb={4}
    mx={{ base: "2px", md: "1" }}
  >
    <Image
      src={product.images}
      width="100%"
      height={{ base: "141px", md: "174.81px" }}
    />
    <Box px={3}>
      <Flex mt={3} justify="space-between" px={0} color="#CB29BE" fontSize="sm">
        <Text color="#808080" fontSize="11.44px">
          #Gadget & accesories
        </Text>

        <Box display="flex">
          <Text mr={1} fontSize="11.44px">
            View details
          </Text>
          <iconify-icon
            icon="tabler:external-link"
            style={{ color: "#CB29BE" }}
            width="13px"
          ></iconify-icon>
        </Box>
      </Flex>

      <Box
        mt={2}
        borderRadius="full"
        bg="inherit"
        py={{ base: "5px", md: "1" }}
        width={{ base: "100%", md: "80%" }}
        px={2}
        borderColor="#808080"
        borderWidth="1px"
        color="#808080"
        fontSize={{ base: "8px", md: "11.41px" }}
      >
        @luxuryfashionbyBOD
      </Box>

      <Heading
        as="h2"
        size="md"
        mt={{ base: "1", md: "4" }}
        color="white"
        fontWeight={400}
        fontSize={{ base: "12px", md: "14px" }}
        fontFamily="clash grotesk"
      >
        {product.title}
      </Heading>
      <Heading
        fontSize={{ base: "12px", md: "14.704px" }}
        mt={1}
        color="#CB29BE"
        fontFamily="clash grotesk"
        fontWeight={600}
      >
        {`$${product.price}`}
      </Heading>
      <Box px={0}>
        <Button
          mt={2}
          height="31px"
          variant="outline"
          width="full"
          borderColor="#CB29BE"
          borderWidth="1px"
          color="#CB29BE"
          fontWeight={500}
          fontSize="12px"
          rounded="10px"
        >
          Buy this product
        </Button>
        <Button
          mt={2}
          height="31px"
          colorScheme="blue"
          width="full"
          fontWeight={500}
          fontSize="12px"
          rounded="10px"
        >
          Resell this product
        </Button>
      </Box>

      <Text
        mt={{ base: "1", md: "4" }}
        textAlign="center"
        fontSize={{ base: "9px", md: "12px" }}
        color="#808080"
      >
        Earn{" "}
        <span style={{ color: "#CB29BE", fontWeight: "500" }}> $2.50 </span>{" "}
        commission if you resell this product
      </Text>
    </Box>
  </Box>
);

const Products = () => {
  // Initialize the useFetch hook with your API endpoint
  const { data, isLoading, error, handlePageChange, totalPages, currentPage } =
    useFetch("https://api.escuelajs.co/api/v1/products");

  if (isLoading) {
    return (
      <Container height="100vh">
        <Box mt="50">
          <Loader />
        </Box>
      </Container>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Box bg="black" px={{ base: "0", md: "3" }}>
      <Flex
        flexWrap="wrap"
        px={{ base: "0", md: "1" }}
        bg="#121212"
        py={8}
        justifyContent="center"
        alignItems="center"
      >
        {data.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </Flex>

      <Flex justifyContent="center" mt={4} mb={20}>
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
  );
};

export default Products;

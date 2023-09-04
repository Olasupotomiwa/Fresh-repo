import React from "react";
import {
  Box,
  Flex,
  Heading,
  Image,
  Button,
  Center,
  Text,
} from "@chakra-ui/react";
import shirts from "assets/Markets/shirts.png";
import { useFetch } from "../../React-query-hook/hook"; // Import the useFetch hook

const ProductCard = ({ product }) => (
  <Box
    width="48%" // Adjusted width for both base and md
    borderRadius="lg"
    overflow="hidden"
    boxShadow="md"
    height={{ base: "357px", md: "440.3px" }}
    bg="black"
    mb={4}
    mx={1}
  >
    <Image
      src={product.images}
      width="100%"
      height={{ base: "141px", md: "174.81px" }}
    />
    <Box px={3}>
      <Flex mt={3} justify="space-between" px={0} color="#CB29BE" fontSize="sm">
        <Text color="#808080" fontSize="11.44px">
          #Gadget & accessories
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
        py={1}
        width="80%"
        px={5}
        borderColor="#808080"
        borderWidth="1px"
        color="#808080"
        fontSize="11.41px"
      >
        @luxuryfashionbyBOD
      </Box>

      <Heading
        as="h2"
        size="md"
        mt={4}
        color="white"
        fontWeight={400}
        fontSize="14px"
        fontFamily="clash grotesk"
      >
        {product.title}
      </Heading>
      <Heading
        as="h3"
        size="sm"
        mt={1}
        color="#CB29BE"
        fontFamily="clash grotesk"
        fontWeight={600}
      >
        {`$${product.price}`}
      </Heading>
      <Box px={0}>
        <Button
          mt={4}
          variant="outline"
          width="full"
          borderColor="#CB29BE"
          borderWidth="1px"
          color="#CB29BE"
          fontWeight={500}
          fontSize="sm"
          rounded="10px"
        >
          Buy this product
        </Button>
        <Button
          mt={2}
          colorScheme="blue"
          width="full"
          fontWeight={500}
          fontSize="sm"
          rounded="10px"
        >
          Resell this product
        </Button>
      </Box>

      <Text mt={4} textAlign="center" fontSize="sm" color="#808080">
        Earn{" "}
        <span style={{ color: "#CB29BE", fontWeight: "500" }}> $2.50 </span>{" "}
        commission if you resell this product
      </Text>
    </Box>
  </Box>
);

const Products = () => {
  // Initialize the useFetch hook with your API endpoint
  const { data, isLoading, error } = useFetch(
    "https://api.escuelajs.co/api/v1/products"
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Box bg="black" px={0}>
      <Flex
        flexWrap="wrap"
        px={0}
        bg="#121212"
        py={8}
        justifyContent="center"
        alignItems="center"
      >
        {data.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </Flex>
    </Box>
  );
};

export default Products;

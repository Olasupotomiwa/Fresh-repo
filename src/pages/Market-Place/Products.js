import { Container } from "@chakra-ui/react";
import React from "react";
import {
  Box,
  Flex,
  Heading,
  Image,
  Button,
  Text,
} from "@chakra-ui/react";

import shirts from "assets/Markets/shirts.png";

const Products = () => {
  return (
    <Container maxW="100%" bg="#121212" py={5}>
      <Box
        maxW="298px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="md"
        height="539px"
        bg="black"
      >
        <Image src={shirts} width="100%" />
        <Box px={5}>
          <Flex
            mt={3}
            justify="space-between"
            px={0}
            color="#CB29BE"
            fontSize="sm"
           
          >
            <Text color="#808080">#Fashion</Text>

            <Box display="flex">
              <Text mr={1}>View details</Text>
              <iconify-icon
                icon="healthicons:money-bag"
                style={{ color: "#CB29BE" }}
                width="18"
               
              ></iconify-icon>
            </Box>
          </Flex>

          <Box
            mt={4}
            borderRadius="full"
            bg="inherit"
            py={1}
            width="80%"
            px={5}
            borderColor="#808080"
            borderWidth="1px"
            color="#808080"
            fontSize="sm"
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
            BEIGE GRAPHIC T-SHIRT
          </Heading>
          <Heading
            as="h3"
            size="sm"
            mt={1}
            color="#CB29BE"
            fontFamily="clash grotesk"
            fontWeight={600}
          >
            $20.00
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
            Earn $2.50 commission if you resell this product
          </Text>
        </Box>
      </Box>
    </Container>
  );
};
export default Products;

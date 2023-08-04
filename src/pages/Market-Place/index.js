import Navbar from "./navbar";
import Filter from './Filterpanel'
import Products from './Products'
import Footer from 'components/Footer'
import { Container, Box, Heading, Text } from "@chakra-ui/react";

const Market = () => {
  return (
    <Container
      maxW="100%"
      px={0}
      fontFamily="clash grotesk"
      bg="black"
      height="100vh"
    >
      <Box pt={10}>
        <Heading
          textAlign="center"
          fontFamily="clash grotesk"
          color="white"
          fontSize="30px"
          fontWeight="500"
          mb="20px"
        >
          Marketplace
        </Heading>
        <Box width={{ base: "80%", md: "65%" }} mx="auto">
          <Text textAlign="center" color="#808080" my={4}>
            Here you'll find a variety of products and services posted by
            different businesses. As a user you can either post a product, buy a
            product or resell a product and earn a commission fee for each sale
            you make.
          </Text>
        </Box>
      </Box>
      <Navbar />
      <Filter />
      <Products />
      <Footer />
    </Container>
  );
};

export default Market;

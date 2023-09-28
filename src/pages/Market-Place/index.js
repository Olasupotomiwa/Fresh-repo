import Navbar from "./navbar";
import Filter from "./Filterpanel";
import Products from "./Products";
import Footer from "components/Footer";
import { Container, Box, Heading, Text, Button } from "@chakra-ui/react";
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom'



const Market = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <Container maxW="100%" px={0} fontFamily="clash grotesk" bg="black" pt="20">
      <Box
        pt={5}
        mx={{ base: "1", md: "5" }}
        display={{ base: "block", md: "flex" }}
        my={{base: '4', md: '6'}}
        px={{ base: "3", md: "8" }}
      >
        <Box>
          <Heading
            fontFamily="clash grotesk"
            color="white"
            fontSize="30px"
            fontWeight="500"
            mb="20px"
          >
            Marketplace
          </Heading>
          <Box width={{ base: "95%", md: "75%" }} data-aos="fade-up"  data-aos-duration="2000">
            <Text textAlign="left" color="#808080" my={4}>
              Here you'll find a variety of products and services posted by
              different businesses. As a user you can either post a product, buy
              a product or resell a product and earn a commission fee for each
              sale you make.
            </Text>
          </Box>
        </Box>
   
        {isAuthenticated && (
  
        <Box mt={5}>
          <Link  to='/market-place2/upload-product-or-service'>
          <Button
            color="black"
            rounded="full"
            bg="white"
            display={{ base: "none", md: "block" }}
            justifyContent="center"
            alignItems="center"
          
           
          >
            <iconify-icon
              icon="ic:round-plus"
              style={{ color: "black" }}
              width="14px"
            ></iconify-icon>
            Upload product / service
          </Button>
          </Link>

          <Box
            bg="white"
            h="55px"
            w="55px"
            rounded="full"
            justifyContent="center"
            alignItems="center"
            position="fixed"
            right={5}
            bottom={5}
            display={{base: 'flex', md: 'none'}}
            as={Link}
            to='/market-place2/upload-product-or-service'
            zIndex='10'
          >
            <iconify-icon
              icon="ic:round-plus"
              style={{ color: "black" }}
              width="30px"
            ></iconify-icon>
          </Box>
        </Box>   
        )}

      </Box>
      <Navbar />
      <Filter />
      <Products />
      <Footer />
    </Container>
  );
};

export default Market;

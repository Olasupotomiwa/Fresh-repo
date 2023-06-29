import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Center, Flex, Container } from "@chakra-ui/react";
import Cap from "./Cap";
import Hoodie from "./Hoodie";
import Shirt from "./Shirt";
import Shorts from "./Shorts";

const MerchPage = () => {
  return (
    <>
      <Header />
      <Center mt={30}>
        <Container maxW={"8xl"} p={4} display="flex">
          <Flex flexWrap="wrap" direction={{ base: "column", md: "row" }} p={4}>
            <Cap />

            <Hoodie />

            <Shirt />
            <Shorts />
          </Flex>
        </Container>
      </Center>
      ;
      <Footer />
    </>
  );
};

export default MerchPage;

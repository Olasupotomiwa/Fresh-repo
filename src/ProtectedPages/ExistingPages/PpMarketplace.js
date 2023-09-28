import { Container, Center } from "@chakra-ui/react";
import MarketPlace from "../../pages/Market-Place";

const ProtectedMarketPlace = () => {
  return (
    <Container
      ml={{ base: 0, md: "20%" }}
      px="0"
      maxW={{ base: "100%", md: "80%" }}
      mx="auto"
      justifyContent="center"
      alignItems="center"
    >
      <Center>
        <MarketPlace />
      </Center>
    </Container>
  );
};

export default ProtectedMarketPlace;

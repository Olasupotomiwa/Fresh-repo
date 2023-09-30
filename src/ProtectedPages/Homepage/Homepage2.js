import { Container, Box, Text } from "@chakra-ui/react";
import Cards from "./cards";

const ProtectedFAQS = () => {
  return (
    <Container
      ml={{ base: 0, md: "25%" }}
      p={{ base: "4", md: "10" }}
      maxW={{ base: "100%", md: "75%" }}
      bg="black"
      height={{base: '1500px', md: '1000px'}}
   
    
      fontFamily="clash grotesk"
    >
      <Box
        bg="#121212"
        width="full"
        p={4}
        border="1px"
        borderColor="#808080"
        borderRadius="lg"
        data-aos="fade-up"  data-aos-duration="2000"
        mt={0}
      >
        <Text color="white" fontWeight="500">
          Disclaimer
        </Text>
        <Text color="#808080">
          You are required to pay a{" "}
          <span style={{ color: "#CB29BE", fontWeight: "600" }}>one time</span>{" "}
          account activation and membership fee of{" "}
          <span style={{ color: "#CB29BE", fontWeight: "600" }}>$10</span> in
          order to start earning on our platform. This is to ensure the
          commitment of all our signed up earners.
        </Text>
      </Box>
      <Cards />
    </Container>
  );
};

export default ProtectedFAQS;

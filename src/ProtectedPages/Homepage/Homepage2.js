import { Container, Box, Text } from "@chakra-ui/react";
import {colors} from 'components/colors'
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
        bg={colors.secondarybg}
        width="full"
        p={4}
        border="1px"
        borderColor={colors.primaryText}
        borderRadius="lg"
        data-aos="fade-up"  data-aos-duration="2000"
        mt={20}
      >
        <Text color="white" fontWeight="500">
          Disclaimer
        </Text>
        <Text color={colors.primaryText}>
          You are required to pay a{" "}
          <span style={{ color: colors.primary, fontWeight: "600" }}>one time</span>{" "}
          account activation and membership fee of{" "}
          <span style={{ color: colors.primary, fontWeight: "600" }}>$10</span> in
          order to start earning on our platform. This is to ensure the
          commitment of all our signed up earners.
        </Text>
      </Box>
      <Cards />
    </Container>
  );
};

export default ProtectedFAQS;

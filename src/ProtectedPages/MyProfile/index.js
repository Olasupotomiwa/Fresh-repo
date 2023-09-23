import { Container, Box } from "@chakra-ui/react";
import UploadImage from "./uploadimage";
import ContactInfo from './ContactInfo'
const Referral = () => {
  return (
    <Container
      ml={{ base: 0, md: "25%" }}
      p={{ base: "1", md: "10" }}
      maxW={{ base: "100%", md: "75%" }}
      bg="black"
      height="full"
      mt="20"
      fontFamily="clash grotesk"
    >
      <Box
        width={{ base: "full", md: "60%" }}
        mx="auto"
        px={{ base: "5", md: "10" }}
        py={3}
      >
        <UploadImage />
        <ContactInfo/>
      </Box>
    </Container>
  );
};
export default Referral;

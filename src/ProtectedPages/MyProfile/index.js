import { Container, Box } from "@chakra-ui/react";
import UploadImage from "./uploadimage";
import ContactInfo from './ContactInfo'
import BankDetails from "./BankDetails";
import UpdateLocation from "./UpdateLocation";
const Referral = () => {
  return (
    <Container
      ml={{ base: 0, md: "20%" }}
      p={{ base: "1", md: "10" }}
      maxW={{ base: "100%", md: "80%" }}
      bg="black"
      height="full"
      fontFamily="clash grotesk"
    >
      <Box
        width={{ base: "full", md: "60%" }}
        mx="auto"
        px={{ base: "1", md: "10" }}
        py={3}
      >
        <UploadImage />
        <ContactInfo/>
        <BankDetails/>
        <UpdateLocation/>
      </Box>
    </Container>
  );
};
export default Referral;

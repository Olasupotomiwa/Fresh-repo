import Registration from './Registration'
import Footer from "components/Footer";
import { Container } from "@chakra-ui/react";

const SignUp =()=>{
    return (
      <Container maxW='100%' px={0}>
        <Registration />
        <Footer />
      </Container>
    );
}
export default SignUp
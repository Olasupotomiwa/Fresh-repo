import GenerateLink from "./GenerateLink"
import {
    Container,
   
   
  } from "@chakra-ui/react";
const Referral =()=>{
    return(

        <Container
        ml={{ base: 0, md: "25%" }}
        p={{ base: "4", md: "10" }}
        maxW={{ base: "100%", md: "75%" }}
        bg="black"
        height='100%'
        mt="20"
        fontFamily="clash grotesk"
        
      >

  <GenerateLink/>

        </Container>
    )
}
export default Referral;
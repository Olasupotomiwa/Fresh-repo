import GenerateLink from "./GenerateLink"
import {
    Container,
   
   
  } from "@chakra-ui/react";
const Referral =()=>{
    return(

        <Container
        ml={{ base: 0, md: "20%" }}
        p={{ base: "1", md: "10" }}
        maxW={{ base: "100%", md: "80%" }}
        bg="black"
        height='full'
      
       
        fontFamily="clash grotesk"
        
      >

  <GenerateLink/>

        </Container>
    )
}
export default Referral;
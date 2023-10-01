import { Container } from "@chakra-ui/react"
import FAQS from '../../pages/Homepage/Faqs'

const ProtectedFAQS =()=>{

    return(

      <Container ml={{ base: 0, md: "25%" }} px="0" maxW={{ base: '100%', md: "75%" }} bg='black' height='100vh' pt={20} >
         
          <FAQS />
         
         
          
          </Container>
    )
    
    
    }
    
    export default ProtectedFAQS
import { Container } from "@chakra-ui/react"
import FAQS from '../../pages/Homepage/Faqs'

const ProtectedFAQS =()=>{

    return(

      <Container ml={{ base: 0, md: "20%" }} px="0" maxW={{ base: '100%', md: "80%" }} bg='black' height='100vh'>
          
          <FAQS/>
          
          </Container>
    )
    
    
    }
    
    export default ProtectedFAQS
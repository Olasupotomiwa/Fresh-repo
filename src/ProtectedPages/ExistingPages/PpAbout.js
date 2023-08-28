import { Container } from "@chakra-ui/react"
import About from '../../pages/About'

const ProtectedAbout =()=>{

    return(

      <Container ml={{ base: 0, md: "25%" }} px="0" maxW={{ base: '100%', md: "75%" }} bg='black'  mt='20'>
          
          <About/>
          
          </Container>
    )
    
    
    }
    
    export default ProtectedAbout
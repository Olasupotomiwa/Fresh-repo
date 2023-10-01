import { Container, Box } from "@chakra-ui/react"
import About from '../../pages/About'

const ProtectedAbout =()=>{

    return(

      <Container ml={{ base: 0, md: "25%" }} px="0" maxW={{ base: '100%', md: "75%" }} bg='black'  >
          
         <Box pt={10}>
         <About />
         </Box>
          
          </Container>
    )
    
    
    }
    
    export default ProtectedAbout
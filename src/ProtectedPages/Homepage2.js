import { Container, Box , Text} from "@chakra-ui/react"
import Cards from './cards'


const ProtectedFAQS =()=>{

    return(

      <Container ml={{ base: 0, md: "25%" }} p="10" maxW={{ base: '100%', md: "75%" }} bg='black' height={{base: 'full', md: '100vh'}}   mt='20' fontFamily='clash grotesk'>
          
          <Box bg='#121212' width='full' p={4} border='1px' borderColor='#808080' borderRadius='lg'> 
          <Text color='white' fontWeight='500'>Disclaimer</Text>
<Text color='#808080'>You are required to pay a one time account activation and membership fee of $10 in order to start earning on our platform.
This is to ensure the commitment of all our signed up earners.</Text>
          </Box>
          <Cards/>
          </Container>
    )
    
    
    }
    
    export default ProtectedFAQS
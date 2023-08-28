import { Container } from "@chakra-ui/react"
import MarketPlace from '../../pages/Market-Place'

const ProtectedMarketPlace =()=>{

    return(

      <Container ml={{ base: 0, md: "25%" }} px="0" maxW={{ base: '100%', md: "75%" }}  mt='20'>
          
          <MarketPlace/>
          
          </Container>
    )
    
    
    }
    
    export default ProtectedMarketPlace
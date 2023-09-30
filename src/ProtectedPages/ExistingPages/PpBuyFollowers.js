import { Container, Box } from "@chakra-ui/react"
import  BuyFollowers from '../../pages/Packages/BuyFollowers'

const  ProtectedBuyFollowers =()=>{

    return(

      <Container ml={{ base: 0, md: "25%" }} px="0" maxW={{ base: '100%', md: "75%" }}  mt='0'>
          <Box mt={-20}>
          <BuyFollowers/>
          </Box>
          </Container>
    )
    
    
    }
    
    export default ProtectedBuyFollowers
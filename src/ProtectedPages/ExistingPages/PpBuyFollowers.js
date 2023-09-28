import { Container } from "@chakra-ui/react"
import  BuyFollowers from '../../pages/Packages/BuyFollowers'

const  ProtectedBuyFollowers =()=>{

    return(

      <Container ml={{ base: 0, md: "20%" }} px="0" maxW={{ base: '100%', md: "80%" }}  mt='0'>
          
          <BuyFollowers/>
          
          </Container>
    )
    
    
    }
    
    export default ProtectedBuyFollowers
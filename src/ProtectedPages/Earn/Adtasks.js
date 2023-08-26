import React from 'react';
import { Box, Flex, Heading, Image, Text  } from '@chakra-ui/react';
import IG from '../../assets/SocialMediaLogo/IG.png'

function MyComponent() {
  return (
    <Box>
    <Flex justifyContent="space-between" alignItems="flex-start" width={{base: '100%', md: '100%', lg: '80%'}}>
      {/* First Container */}
      <Box display='flex'>
        <Image src={IG} alt="Image Alt Text" width={{base: '30px', md: '30px'}} height={{base: '30px', md: '30px'}}  mr={{base: '2', md: '5'}}/>
       <Box>
      <Heading color='white' fontFamily='clash grotesk' fontWeight='500' fontSize={{base: '14px', md: '20px'}} lineHeight={1.5}>Post adverts on instagram || Earn $10 per advert post</Heading>
       
       </Box>
       
      </Box>

      {/* Second Container */}
      <Box pl={{base: '3', md: '0'}}>
      <Box bg="blue.500" color="white" rounded='full' px={2} py={1} width={{base: '120px', md: '150px'}} textAlign='center'>
        <Text fontSize="12px">100 Tasks Available</Text>
      </Box>
      </Box>
    </Flex>
    <Box ml={10} mt={{base: '2', md: '2', lg: '0'}}>
         <Text fontSize="sm" color='#808080' lineHeight={1.5}>You will need to have at least 1000 active followers on Instagram to perform this task.</Text>
        <Text fontSize="sm" color='#808080'>Carryig out the task while haing less than 1000 followers attracts no pay.</Text>
    </Box>

    </Box>
   
  );
}

export default MyComponent;

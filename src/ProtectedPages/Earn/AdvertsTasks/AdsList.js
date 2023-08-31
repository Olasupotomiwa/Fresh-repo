import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Heading, Image, Text, Divider } from '@chakra-ui/react';
import IG from 'assets/SocialMediaLogo/IG.png';
import Fb from "assets/SocialMediaLogo/Fb.png";
import Tiktok from "assets/SocialMediaLogo/Tiktok.png";
import Whatsapp from "assets/SocialMediaLogo/Whatsapp.png";
import Twitter from "assets/SocialMediaLogo/Twitter.png";
import { useSelector } from "react-redux"




export const contentArray = [
  {
    id: 1,
    imageSrc: IG,
    headerText: 'Post adverts on Instagram || Earn <span class="dollar-amount"> $10 </span> per advert post',
    taskCount: 100, 
    description1: 'You will need to have at least 1000 active followers on Instagram to perform this task.',
    description2: 'Carrying out the task while having less than 1000 followers attracts no pay.',
    route: '/earn/instagram-tasks', 
  },


  {
    id: 2,
    imageSrc: Tiktok,
    headerText: 'Post adverts on TikTok || Earn <span class="dollar-amount"> $10 </span> per advert post',
    taskCount: 2, 
    description1: 'You will need to have at least 1000 active followers on Tiktok to perform this task.',
    description2: 'Carrying out the task while having less than 1000 followers attracts no pay.',
    route: '/earn/tiktok-tasks', 
  },

  {
    id: 3,
    imageSrc: Whatsapp,
    headerText: 'Post adverts on Whatsapp || Earn <span class="dollar-amount"> $10 </span> per advert post',
    taskCount: 0, // Set task count to 0
    description1: 'You will need to have an average of 100 Whatsapp status view to perform this task.',
    description2: 'Carrying out the task while having less than 100 Whatsapp status view attracts no pay.',
    route: '/earn/whatsapp-tasks',
  },

  {
    id: 4,
    imageSrc: Fb,
    headerText: 'Post adverts on Facebook || Earn <span class="dollar-amount"> $10 </span> per advert post',
    taskCount: 0, // Set task count to 0
    description1: 'You will need to have an average of 1000 active followers or friends on Facebook to perform this task.',
    description2: 'Carrying out the task while having less than 100 Whatsapp status view attracts no pay.',
    route: '/earn/facebook-tasks', 
  },

  {
    id: 5,
    imageSrc: Twitter,
    headerText: 'Post adverts on Twitter || Earn <span class="dollar-amount"> $10 </span> per advert post',
    taskCount: 2, 
    description1: 'You will need to have an average of 1000 active followers on Twitter to perform this task.',
    description2: 'Carrying out the task while having less than 100 Whatsapp status view attracts no pay.',
    route: '/earn/twitter-tasks', 
  },
  // Add more content objects as needed
];





function Adlist() {
  const isLinked = useSelector((state) => state.linked.isLinked);
 

  return (
    <Box  mb={10}>
      {contentArray.map((content, index) => (
        <div key={content.id} >
          <Link to={isLinked ? content.route : "/earn/link-account"} >
            <Flex justifyContent="space-between" alignItems="flex-start" width={{ base: '100%', md: '100%', lg: '80%' }} mt={3} >
              {/* First Container */}
              <Box display="flex">
                <Image src={content.imageSrc} alt="Image Alt Text" width={{ base: '30px', md: '30px' }} height={{ base: '30px', md: '30px' }} mr={{ base: '2', md: '5' }} />
                <Box>
                  <Heading color="white" fontFamily="clash grotesk" fontWeight="500" textAlign="left" fontSize={{ base: '14px', md: '20px' }} lineHeight={1.5}>
                  <span dangerouslySetInnerHTML={{ __html: content.headerText }} />
                  </Heading>
                </Box>
              </Box>

              {/* Second Container */}
              <Box pl={{ base: '3', md: '0' }}>
                <Box
                  bg={content.taskCount === 0 ? '#808080' : '#3A9800'} // Change the color to yellow when taskCount is 0
                  color="white"
                  rounded="full"
                  px={2}
                  py={1}
                  width={{ base: '120px', md: '150px' }}
                  textAlign="center"
                >
                  <Text fontSize="12px">{content.taskCount} Tasks Available</Text>
                </Box>
              </Box>
            </Flex>
            <Box ml={10} mt={{ base: '2', md: '2', lg: '0' }}>
              <Text fontSize="sm" color="#808080" lineHeight={1.5}>
                {content.description1}
              </Text>
              <Text fontSize="sm" color="#808080">
                {content.description2}
              </Text>
            </Box>
          </Link>
          {index < contentArray.length - 1 && <Divider borderColor="#808080" mt={4} />}
        </div>
      ))}
    </Box>
  );
}

export default Adlist;

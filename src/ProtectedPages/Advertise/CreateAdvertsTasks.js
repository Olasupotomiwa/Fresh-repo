import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Heading, Image, Text, Divider } from '@chakra-ui/react';
import IG from 'assets/SocialMediaLogo/IG.png';
import Fb from "assets/SocialMediaLogo/Fb.png";
import Tiktok from "assets/SocialMediaLogo/Tiktok.png";
import Whatsapp from "assets/SocialMediaLogo/Whatsapp.png";
import Twitter from "assets/SocialMediaLogo/Twitter.png";





export const contentArray = [
  {
    id: 1,
    imageSrc: IG,
    headerText: 'Get people to post your adverts on Instagram || Pay <span class="dollar-amount"> $10 </span> per post',
    taskCount: 100, 
    description1: 'Our Users with atleast 1000 real and active followers will post your Ad on thier account',
    description2: ' This is a very cost-effective method of promoting your picture or video advert to a larger audience.',
    route: "/advertise/create-tasks", 
  },


  {
    id: 2,
    imageSrc: Tiktok,
    headerText: 'Get people to post your adverts on TikTok || Pay <span class="dollar-amount"> $10 </span> per post', 
    description1: 'Our users with at least 1000 active followers on Tiktok will post your Ad on their account.',
    description2: 'Carrying out the task while having less than 1000 followers attracts no pay.',
    route: "/advertise/create-tasks", 
  },

  {
    id: 3,
    imageSrc: Whatsapp,
    headerText: 'Get people to post your adverts on Whatsapp || Pay <span class="dollar-amount"> $10 </span> per post',
    description1: 'Our users with at least 100 views on WhatsApp will post your ad on their account.', 
    description2: 'This is a very cost-effective method of promoting your picture or video advert to a larger audience.',
    route: "/advertise/create-tasks",
  },

  {
    id: 4,
    imageSrc: Fb,
    headerText: 'Get people to post your adverts on Facebook || Pay <span class="dollar-amount"> $10 </span> per post',
    description1: 'Our users with at least 1000 real and active followers on Facebook will post your ad on their account.',
    description2: ' This is a very cost-effective method of promoting your picture or video advert to a larger audience.',
    route: "/advertise/create-tasks", 
  },

  {
    id: 5,
    imageSrc: Twitter,
    headerText: 'Post adverts on Twitter || Earn <span class="dollar-amount"> $10 </span> per advert post',
    description1: 'Our users with at least 1000 real and active followers on Twitter will post your ad on their account.',
    description2: ' This is a very cost-effective method of promoting your picture or video advert to a larger audience.',
    route: "/advertise/create-tasks", 
  },
 
];





function CreateTasks() {
 
  return (
    <Box  mb={10}>
      {contentArray.map((content, index) => (
        <div key={content.id} >
          <Link to={content.route} >
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

export default CreateTasks;

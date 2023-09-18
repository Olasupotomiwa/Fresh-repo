import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Heading, Image, Text, Divider } from "@chakra-ui/react";

import Whatsapp from "assets/SocialMediaLogo/Whatsapp.png";

import Appstore from "assets/SocialMediaLogo/Appstore.png";
import GooglePlay from "assets/SocialMediaLogo/Googleplay.png";
import GroupIcon from "assets/SocialMediaLogo/grp1.png";
import GroupIcon2 from "assets/SocialMediaLogo/group2.png";
import Discord from "assets/SocialMediaLogo/Discord.jpg";
import Audiomack from "assets/SocialMediaLogo/Audiomack.png";
import Telegram from "assets/SocialMediaLogo/Telegram.png";
import Youtube from "assets/SocialMediaLogo/Youtube.png";



const newLocal = 'Get people to view, like and comment on your YouTube video || Pay <span class="dollar-amount"> $10 </span> for this task';
export const contentArray = [
  {
    id: 1,
    imageSrc: GroupIcon,
    headerText:
      'Get people to follow your accounts or pages on social media || Pay <span class="dollar-amount"> $10 </span> per follow',
    description1:
      "Get followers on Instagram, TikTok, Facebook and Twitter.",
   
    route: "/advertise/create-engagement-tasks",
  },

  {
    id: 2,
    imageSrc: GroupIcon,
    headerText:
      'Get people to like your posts on social media || Pay <span class="dollar-amount"> $10 </span> per like',
    description1:
      "Get likes on Instagram, TikTok, Facebook and Twitter.",
    route: "/advertise/create-engagement-tasks",
  },

  {
    id: 3,
    imageSrc: GroupIcon,
    headerText:
      'Get people to comment on your posts || Pay <span class="dollar-amount"> $10 </span> per comment',
   
    description1:
      "Get comments on Instagram, TikTok, Facebook and Twitter posts.",
    route: "/advertise/create-engagement-tasks",
  },

  {
    id: 4,
    imageSrc: GroupIcon2,
    headerText:
      'Get people to re-share your posts on social media || Pay <span class="dollar-amount"> $10 </span> per re-share',
    description1:
      "Get re-shares on Instagram, Facebook and Twitter.",
    route: "/advertise/create-engagement-tasks",
  },

  {
    id: 5,
    imageSrc: Youtube,
    headerText:
      'Get people to subscribe to your YouTube channel || Pay  <span class="dollar-amount"> $10 </span> per subscription',
    description1:
      "Get more subscribers for your Youtube Channel.",
    route: "/advertise/create-engagement-tasks",
  },

  {
    id: 6,
    imageSrc: Youtube,
    headerText:
      newLocal,
    description1:
      "Increase the views, likes and comments on your YouTube video.",
    route: "/advertise/create-engagement-tasks",
  },

  {
    id: 7,
    imageSrc: Whatsapp,
    headerText:
      'Get people to join your Whatsapp group || Pay <span class="dollar-amount"> $10 </span> per person',
    taskCount: 2,
    description1:
      "Get more participants for your Whatsapp group.",
    route: "/advertise/create-engagement-tasks",
  },

  {
    id: 8,
    imageSrc: Audiomack,
    headerText:
      'Get people to follow your Audiomack account || Pay <span class="dollar-amount"> $10 </span> per follow',
    description1:
      "Get more Followers for your Audiomack account.",
    route: "/advertise/create-engagement-tasks",
  },

  {
    id: 9,
    imageSrc: Telegram,
    headerText:
      'Get people to join your Telegram group || Pay $10 <span class="dollar-amount"> $10 </span> per person',
    description1:
      "Get more participants for your Telegram group.",
    route: "/advertise/create-engagement-tasks",
  },

  {
    id: 10,
    imageSrc: GooglePlay,
    headerText:
      'Get people to download and review your app on the Play store || Pay <span class="dollar-amount"> $10 </span> for this task',
    description1:
      "Get more downloads and reviews for your app.",
    route: "/advertise/create-engagement-tasks",
  },
  {
    id: 11,
    imageSrc: Appstore,
    headerText:
      'Get people to download and review your app on the App store || Pay <span class="dollar-amount"> $10 </span> for this task',
    taskCount: 2,
    description1:
      "Get more downloads and reviews for your app.",
    route: "/advertise/create-engagement-tasks",
  },

  {
    id: 12,
    imageSrc: Discord,
    headerText:
      'Get people to Join your Discord channel || Pay <span class="dollar-amount"> $10 </span>per person',
    taskCount: 2,
    description1:
      "Get more participants for your Discord channel.",
    route: "/advertise/create-engagement-tasks",
  },
  // Add more content objects as needed
];

function EngagementTasklist() {
 

  return (
    <Box mb={10}>
      {contentArray.map((content, index) => (
        <div key={content.id}>
          <Link to={content.route}>
            <Flex
              justifyContent="space-between"
              alignItems="flex-start"
              width={{ base: "100%", md: "100%", lg: "80%" }}
              mt={3}
            >
              {/* First Container */}
              <Box display="flex">
                <Image
                  src={content.imageSrc}
                  alt="Image Alt Text"
                  width={{ base: "30px", md: "30px" }}
                  height={{ base: "30px", md: "30px" }}
                  mr={{ base: "2", md: "5" }}
                />
                <Box>
                  <Heading
                    color="white"
                    fontFamily="clash grotesk"
                    fontWeight="500"
                    textAlign="left"
                    fontSize={{ base: "14px", md: "18px" }}
                    lineHeight={1.5}
                  >
                    <span
                      dangerouslySetInnerHTML={{ __html: content.headerText }}
                    />
                  </Heading>
                </Box>
              </Box>

              {/* Second Container */}
              <Box pl={{ base: "3", md: "0" }}>
                
              </Box>
            </Flex>
            <Box ml={{ base: "10", md: "12"}} mt={{ base: "0", md: "2", lg: "0" }}>
              <Text fontSize="sm" color="#808080" lineHeight={1.5} textAlign='left'>
                {content.description1}
              </Text>
            </Box>
          </Link>
          {index < contentArray.length - 1 && (
            <Divider borderColor="#808080" mt={4} />
          )}
        </div>
      ))}
    </Box>
  );
}

export default EngagementTasklist;

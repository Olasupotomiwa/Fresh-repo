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



export const contentArray = [
  {
    id: 1,
    imageSrc: GroupIcon,
    headerText:
      'Follow people and pages || Earn <span class="dollar-amount"> $10 </span> per follow',
    taskCount: 100,
    description1:
      "Follow people and pages on Instagram, TikTok, Facebook and Twitter.",
   
    route: "/earn/instagram-tasks",
  },

  {
    id: 2,
    imageSrc: GroupIcon,
    headerText:
      'Like posts on social media || Earn  <span class="dollar-amount"> $10 </span> per like',
    taskCount: 2,
    description1:
      "Like posts on Instagram, TikTok, Facebook and Twitter..",
    route: "/earn/tiktok-tasks",
  },

  {
    id: 3,
    imageSrc: GroupIcon2,
    headerText:
      'Comment on posts || Earn <span class="dollar-amount"> $10 </span> per comment',
    taskCount: 0, // Set task count to 0
    description1:
      "Drop comments on Instagram, TikTok, Facebook and Twitter posts.",
    route: "/earn/whatsapp-tasks",
  },

  {
    id: 4,
    imageSrc: GroupIcon2,
    headerText:
      'Re-share posts on social media || Earn <span class="dollar-amount"> $10 </span> per re-share',
    taskCount: 0, // Set task count to 0
    description1:
      "Re-share posts on Instagram, Facebook and Twitter..",
    route: "/earn/facebook-tasks",
  },

  {
    id: 5,
    imageSrc: Youtube,
    headerText:
      'Subscribe to a YouTube channel || Earn  <span class="dollar-amount"> $10 </span> per subscription',
    taskCount: 2,
    description1:
      "Subscribe to a YouTube channel. The more channels you subscribe to, the more you earn..",
    route: "/earn/youtube-tasks",
  },

  {
    id: 6,
    imageSrc: Youtube,
    headerText:
      'View, like and comment on YouTube || Earn  <span class="dollar-amount"> $10 </span> for this task',
    taskCount: 2,
    description1:
      "View, like and comment on a YouTube video.",
    route: "/earn/youtube-tasks",
  },

  {
    id: 7,
    imageSrc: Whatsapp,
    headerText:
      'Join Whatsapp group || Earn <span class="dollar-amount"> $10 </span> per group',
    taskCount: 2,
    description1:
      "Join Whatsapp groups. The more groups you join, the more you earn.",
    route: "/earn/twitter-tasks",
  },

  {
    id: 8,
    imageSrc: Audiomack,
    headerText:
      'Follow Audiomack account || Earn <span class="dollar-amount"> $10 </span> per follow',
    taskCount: 2,
    description1:
      "Follow Audiomack accounts. The more accounts you follow, the more you earn.",
    route: "/earn/twitter-tasks",
  },

  {
    id: 9,
    imageSrc: Telegram,
    headerText:
      'Join Telegram group || Earn <span class="dollar-amount"> $10 </span> per group',
    taskCount: 2,
    description1:
      "Join Telegram groups. The more groups you join, the more you earn.",
    route: "/earn/twitter-tasks",
  },

  {
    id: 10,
    imageSrc: GooglePlay,
    headerText:
      'Download and review apps on Play store || Earn <span class="dollar-amount"> $10 </span> for this task',
    taskCount: 2,
    description1:
      "Download apps and review then on the Play store.",
    description2:
      "Carrying out the task while having less than 100 Whatsapp status view attracts no pay.",
    route: "/earn/twitter-tasks",
  },
  {
    id: 11,
    imageSrc: Appstore,
    headerText:
      'Download and review apps on App store || Earn <span class="dollar-amount"> $10 </span> for this task',
    taskCount: 2,
    description1:
      "Download apps and review then on the Play store.",
    route: "/earn/twitter-tasks",
  },

  {
    id: 12,
    imageSrc: Discord,
    headerText:
      'Join Discord channel || Earn <span class="dollar-amount"> $10 </span>per channel',
    taskCount: 2,
    description1:
      "Join Discord channels. The more channels you join, the more you earn.",
    route: "/earn/twitter-tasks",
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
                <Box
                  bg={content.taskCount === 0 ? "#808080" : "#3A9800"} // Change the color to yellow when taskCount is 0
                  color="white"
                  rounded="full"
                  px={2}
                  py={1}
                  width={{ base: "120px", md: "150px" }}
                  textAlign="center"
                >
                  <Text fontSize="12px">
                    {content.taskCount} Tasks Available
                  </Text>
                </Box>
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

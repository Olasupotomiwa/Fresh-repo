import React from "react";
import { Box, Flex, Image, Text, Heading } from "@chakra-ui/react";

import Audio from 'assets/SocialMediaLogo/Audiomack.png'
import Discord from "assets/SocialMediaLogo/Discord.jpg";
import Fb from "assets/SocialMediaLogo/Fb.png";
import Googleplay from "assets/SocialMediaLogo/Googleplay.png";
import IG from "assets/SocialMediaLogo/IG.png";
import Telegram from "assets/SocialMediaLogo/Telegram.png";
import Tiktok from "assets/SocialMediaLogo/Tiktok.png";
import Whatsapp from "assets/SocialMediaLogo/Whatsapp.png";
import Youtube from "assets/SocialMediaLogo/Youtube.png";
import Appstore from "assets/SocialMediaLogo/Appstore.png";
import Twitter from "assets/SocialMediaLogo/Twitter.png";
const logos = [
  {
    name: "Facebook",
    url: Fb,
  },
  {
    name: "Whatsapp",
    url: Whatsapp,
  },
  {
    name: "Audiomack",
    url: Audio,
  },
  {
    name: "Discord",
    url: Discord,
  },
  {
    name: "Playstore",
    url: Googleplay,
  },
  {
    name: "Instagram",
    url: IG,
  },
  {
    name: "Tiktok",
    url: Tiktok,
  },
  {
    name: "Youtube",
    url: Youtube,
  },
  {
    name: "Telegram",
    url: Telegram,
  },
  {
    name: "Twitter",
    url: Twitter,
  },
  {
    name: "Appstore",
    url: Appstore,
  },
  // Add more logos as needed
];

const LogoCardComponent = () => {
  return (
    <Box my={10}>
      <Heading
        fontWeight="400"
        textAlign="center"
        color="white"
        fontFamily="Clash Grotesk"
      >
        Platforms we support
      </Heading>
      <Flex alignItems="center" justify="center" flexWrap="wrap" mx='auto' maxWidth={{base: '100%', md: '75%'}}>
        {logos.map((logo) => (
          <Box
            key={logo.name}
            borderWidth="1px"
            borderRadius="lg"
            borderColor="#808080" // Border Color
            overflow="hidden"
            m={2}
            p={4}
            width="120px"
            height="70px"
            textAlign="center"
          >
            <Flex
              align="center"
              justify="center"
              direction="column"
              height="100%"
            >
              <Image
                src={logo.url}
                boxSize="100px"
                objectFit="contain"
                width="32px"
              />
              <Text color="#808080" fontSize="14px">
                {logo.name}
              </Text>
            </Flex>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default LogoCardComponent;

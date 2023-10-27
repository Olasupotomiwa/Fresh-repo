import React from "react";
import { Box, Flex, Divider, Text, Heading } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

import {
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  FormControl,
} from "@chakra-ui/react";
import { LogoJPG } from "constants/image_assets";

const Footer = () => {
  return (
    <Box
      p={5}
      bg="#121212"
      color="#808080"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        justifyContent="space-around"
        px={{ base: "2", md: "4" }}
      >
        <Box flexBasis="20%" fontFamily="Clash Grotesk" mb={5}>
          <Box>
            <Link to="/">
            <img src={LogoJPG} alt="" width="100px"  />
            </Link>
            <Text>
              A dynamic and innovative social finance platform for users and
              businesses
            </Text>
          </Box>

          <Flex mt={8} gap="5">
            <Link href="#">
              <iconify-icon
                icon="basil:facebook-solid"
                style={{ color: "white" }}
                width="25"
              ></iconify-icon>
            </Link>
            <Link href="#">
              <iconify-icon
                icon="basil:instagram-outline"
                style={{ color: "white" }}
                width="25"
              ></iconify-icon>
            </Link>
            <Link href="#">
              <iconify-icon
                icon="basil:twitter-solid"
                style={{ color: "white" }}
                width="25"
              ></iconify-icon>
            </Link>
            <Link href="#">
              <iconify-icon
                icon="basil:linkedin-solid"
                style={{ color: "white" }}
                width="25"
              ></iconify-icon>
            </Link>

            <Link to="mailto:support@trendit3.com">
              <iconify-icon
                icon="fontisto:email"
                style={{ color: "white" }}
                width="25"
              ></iconify-icon>
            </Link>
          </Flex>
        </Box>

        <Box mb={5}>
          <Box fontFamily="Clash Grotesk">
            <Heading color="white" fontSize="18px" fontWeight={400} mb={2}>
              For Businesses
            </Heading>
            <Link>
              {" "}
              <Text>Advertise</Text>
            </Link>
            <Link>
              {" "}
              <Text>Grow</Text>
            </Link>
            <Link>
              {" "}
              <Text>Sell</Text>
            </Link>
          </Box>
        </Box>

        <Box fontFamily="Clash Grotesk" mb={5}>
          <Box textDecoration="none">
            <Heading color="white" fontSize="18px" fontWeight={400} mb={2}>
              For Earners
            </Heading>
            <Link>
              {" "}
              <Text>Repost adverts</Text>
            </Link>
            <Link>
              {" "}
              <Text>Engage with posts</Text>
            </Link>
            <Link>
              {" "}
              <Text>Resell</Text>
            </Link>
            <Link>
              {" "}
              <Text>Give reviews</Text>
            </Link>

            <Link>
              {" "}
              <Text>Take surveys</Text>
            </Link>
          </Box>
        </Box>

        <Box
          flexBasis="35%"
          display={{ base: "none", md: "block" }}
          fontFamily="Clash Grotesk"
        >
          <Box color="white">
            <Text fontSize="20px" textAlign="center">
              Join other Businesses and Individual using Trendit<sup>3</sup>
            </Text>

            <Box mt={5}>
              <FormControl
                borderRadius="full"
                borderWidth="1px"
                display="flex"
                width={{ base: "100%", md: "100%" }}
                m={{ base: "auto", md: "0" }}
              >
                <InputGroup variant="unstyled">
                  <InputLeftElement pointerEvents="none">
                    <EmailIcon
                      color="gray.500"
                      position="absolute"
                      left={4}
                      top={2.5}
                    />
                  </InputLeftElement>
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    fontSize="13px"
                    pl="2.5rem" // To make space for the icon on the left
                    borderTopRightRadius={0}
                    borderBottomRightRadius={0}
                  />
                </InputGroup>
                <Button
                  rounded="full"
                  color="black"
                  px={10}
                  fontWeight="400"
                  py="10px"
                  as={Link}
                  to="/sign-up"
                  fontSize="sm"
                >
                  Create account
                </Button>
              </FormControl>
            </Box>
          </Box>
        </Box>
      </Flex>

      <Divider my={6} />
      {}
      <Flex
        justifyContent="space-around"
        alignItems="center"
        direction={{ base: "column", md: "row" }}
        px={4}
      >
        <Box color="#CB29BE" fontSize="sm" fontFamily="Clash Grotesk">
          <Flex textDecoration="underline" fontSize="sm">
            <Link>
              {" "}
              <Text mx={1}>Privacy Policy</Text>
            </Link>
            <Link>
              {" "}
              <Text mx={1}>Terms of service</Text>
            </Link>
            <Link>
              {" "}
              <Text>Cookies Settings</Text>
            </Link>
          </Flex>
        </Box>
        <Box my={4} fontFamily="Clash Grotesk">
          <Text fontSize="sm" color="#CB29BE">
            Trendit media Ltd ©2023, all rights reserved
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;

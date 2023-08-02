import React from "react";
import { Box, Flex, Text, Heading } from "@chakra-ui/react";
import {
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  FormControl,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";

const Countdown = () => {
  return (
    <Box py={4} px={4}>
      <Flex
        direction={{ base: "column", md: "row" }}
        justifyContent="space-around"
        alignItems="center"
        fontFamily="Clash Grotesk"
      >
        <Box color="white" mb={8} mx={4}>
          <Heading fontFamily="Clash Grotesk" fontWeight="400">
            100+
          </Heading>
          <Text fontSize="sm">Businesses</Text>
        </Box>

        <Box color="white" mb={8} mx={4}>
          <Heading fontFamily="Clash Grotesk" fontWeight="400">
            500+
          </Heading>
          <Text fontSize="sm">Earners</Text>
        </Box>

        <Box color="white" mb={8} mx={4}>
          <Heading fontFamily="Clash Grotesk" fontWeight="400">
            $10k+
          </Heading>
          <Text fontSize="sm">Made</Text>
        </Box>

        <Box color="white" mx={4}>
          <Text fontSize="20px" textAlign="center">
            Join other <span style={{ color: "#CB29BE" }}> businesses </span>{" "}
            and <span style={{ color: "#CB29BE" }}> individual </span> using
            Trendit <sup>3</sup>
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
                  fontSize="sm"
                  pl="2.5rem" // To make space for the icon on the left
                  borderTopRightRadius={0}
                  borderBottomRightRadius={0}
                />
              </InputGroup>
              <Button
                borderRadius="full"
                rounded="full"
                color="black"
                px={10}
                fontWeight="400"
                py={1}
              >
                Create account
              </Button>
            </FormControl>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Countdown;

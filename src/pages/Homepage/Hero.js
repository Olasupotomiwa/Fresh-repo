import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
import {
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  FormControl,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import Dashboard from "assets/dashboard.png";
import Sparkle from 'assets/images/highlights.png'




const Hero=()=>{


    return (
      <Flex
        direction={{ base: "column", md: "row" }}
        pt={30}
        py={{ base: "5", md: "10" }}
        fontFamily="Clash Grotesk"
      >
        <Box flex="1" mb={10} px={{ base: "3", md: "6" }}>
          {/* Content for the first section */}

          <Heading
            fontFamily="Clash Grotesk"
            fontSize="38px"
            lineHeight="47px"
            fontWeight={700}
            textAlign={{ base: "center", md: "left" }}
            color="white"
          >
            Earn money by <Text color="#CB29BE">connecting businesses </Text> to
            their potential customers
          </Heading>

          <Text
            textAlign={{ base: "center", md: "left" }}
            my={6}
            color="#808080"
          >
            Our platform offer a variety of opportunities for users to earn
            while carrying out simple social media tasks for businesses and
            individuals
          </Text>
          <Box mt={5}>
            <Image
              src={Sparkle}
              alt="highlights-img"
              width="70px"
              position="absolute"
              left="-10px"
              mt="15px"
            />
            <Box ml={3}>
              <FormControl
                borderRadius="full"
                borderWidth="1px"
                borderColor="#808080"
                display="flex"
                width={{ base: "100%", md: "80%" }}
                m={{ base: "auto", md: "0" }}
              >
                <InputGroup variant="unstyled">
                  <InputLeftElement pointerEvents="none">
                    <EmailIcon
                      color="#808080"
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
                    color="#808080"
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
        </Box>

        <Box flex="1" pt={{ base: "2", md: "5" }}>
          <Image src={Dashboard} alt="Dashboard-img" width="full" />
        </Box>
      </Flex>
    );
}

export default Hero;
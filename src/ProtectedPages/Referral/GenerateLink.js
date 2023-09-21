import React, { useState } from "react";

import {
  Container,
  Box,
  Heading,
  Text,
  FormLabel,
  InputGroup,
  Button,
  FormControl,
  Input,
} from "@chakra-ui/react";

import Loader from "../../Loader";
import {
  setIsLinked,
  selectIsLinked,
} from "../../Redux-files/slices/linkedslice";
import History from "./History";
import { useSelector, useDispatch } from "react-redux";

const GenerateLink = () => {
  const isLinked = useSelector(selectIsLinked);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const [isLoading, setIsLoading] = useState(false);

  // Function to handle button click
  const handleButtonClick = () => {
    setIsLoading(true); // Show spinner
    setTimeout(() => {
      setIsLoading(false); // Hide spinner after 2 seconds
      setIsLinked(true);
      dispatch(setIsLinked(true));
    }, 3000);
  };

  return (
    <Container px={0} maxW="100%">
      <Box textAlign={{ base: "center", md: "left" }} py={6}>
        <Heading color="white" fontWeight="500">
          Referrals
        </Heading>
        <Text color="#808080" mt={4}>
          Generate a unique referral link that you can share with friends,
          family and followers. When someone signs up to our platform using your
          referral link, you earn a commission
        </Text>
      </Box>
      {isLinked ? (
        // Content when isLinked is true
        <Box>
          <FormLabel color="#808080">Your unique referral link</FormLabel>
          <FormControl
            borderRadius="8px"
            borderWidth="2px"
            borderColor="#808080"
            display="flex"
            width={{ base: "100%", md: "60%" }}
          >
            <InputGroup variant="unstyled">
              <Input
                type="email"
                color="#CB29BE"
                fontSize="15px"
                pl="0.5rem"
                borderTopRightRadius={0}
                borderBottomRightRadius={0}
                value={user.referral_link}
                readOnly="true"
              />
            </InputGroup>
            <Button
              rounded="8px"
              textDecoration="none"
              px={10}
              fontWeight="500"
              borderWidth="1px"
              _hover={{ bg: "#CB29BE", opacity: "0,9" }}
              borderColor="#808080"
              color="white"
              py={6}
              outline="1px"
              bg="#CB29BE"
              fontSize="16px"
            >
              Copy link
            </Button>
          </FormControl>
          <Text color="#808080" fontSize='sm' py={3}>
            Your referral are required to pay the the account activation fee of
            $10 after signing up with your link
          </Text>

          history
          <History/>
        </Box>
      ) : (
        <>
          <Box width={{ base: "100%", md: "75%", lg: "55%" }} mt="20px">
            <FormLabel color="white">Your Trendit username</FormLabel>
            <FormControl
              borderRadius="8px"
              borderWidth="2px"
              borderColor="#808080"
              display="flex"
              width={{ base: "100%", md: "60%" }}
            >
              <InputGroup variant="unstyled">
                <Input
                  type="email"
                  color="white"
                  placeholder="paste profile link"
                  fontSize="15px"
                  pl="0.5rem"
                  borderTopRightRadius={0}
                  borderBottomRightRadius={0}
                  value={user.username}
                  readOnly="true"
                />
              </InputGroup>
              <Button
                rounded="8px"
                textDecoration="none"
                px={10}
                fontWeight="500"
                borderWidth="1px"
                _hover={{ bg: "CB29BE", opacity: "0,9" }}
                borderColor="#808080"
                color="white"
                py={6}
                outline="1px"
                bg="#CB29BE"
                fontSize="16px"
                onClick={handleButtonClick}
              >
                {isLoading ? (
                  <>
                    <Loader />
                    Generating link...
                  </>
                ) : (
                  "Generate link"
                )}
              </Button>
            </FormControl>
          </Box>
        </>
      )}
    </Container>
  );
};

export default GenerateLink;

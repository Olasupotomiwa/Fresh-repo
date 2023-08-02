
import IG from "assets/SocialMediaLogo/IG.png";
import {
  Flex,
  Box,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const InstagramBtn = () => {
  return (
    <Flex direction={{ base: "column", md: "row" }} bg="black">
      {/* First Column */}
      <Flex
        direction="column"
        flex={{ base: "1", md: "2" }}
        textAlign="left"
        mr={{ md: "2" }}
        px={8}
        py={4}
      >
        <Box pb={4}>
          <Menu>
            <MenuButton
              as={Button}
              bg="#CB29BE"
              width="100%"
              color="white"
              _hover={{
                bg: "#CB29BE",
                opacity: "0.9",
                transition: "color 0.3s ease-in-out",
              }}
            >
              <Box display="flex" justifyContent="space-between">
                <Box display="flex">
                  <img src={IG} alt="" width="25px" />
                  <Text textAlign="center" my="auto" mx={2} fontWeight="400">
                    Buy Targeted Followers
                  </Text>
                </Box>
                <ChevronDownIcon mt={1} />
              </Box>
            </MenuButton>
            <MenuList>
              <MenuItem as="a" href="/option1">
                Option 1
              </MenuItem>
              <MenuItem as="a" href="/option2">
                Option 2
              </MenuItem>
              <MenuItem as="a" href="/option3">
                Option 3
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>

        {/* Button 2 */}
        <Box>
          <Menu>
            <MenuButton
              as={Button}
              bg="#CB29BE"
              width="100%"
              color="white"
              _hover={{
                bg: "#CB29BE",
                opacity: "0.9",
                transition: "color 0.3s ease-in-out",
              }}
            >
              <Box display="flex" justifyContent="space-between">
                <Box display="flex">
                  <img src={IG} alt="" width="25px" />
                  <Text textAlign="center" my="auto" mx={2} fontWeight="400">
                    Buy Views
                  </Text>
                </Box>
                <ChevronDownIcon mt={1} />
              </Box>
            </MenuButton>
            <MenuList>
              <MenuItem as="a" href="/option1">
                Option 1
              </MenuItem>
              <MenuItem as="a" href="/option2">
                Option 2
              </MenuItem>
              <MenuItem as="a" href="/option3">
                Option 3
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>

      {/* Second Column */}
      <Flex
        direction="column"
        flex={{ base: "1", md: "2" }}
        textAlign="left"
        ml={{ md: "2" }}
        px={8}
        py={4}
      >
        <Box pb={4}>
          <Menu>
            <MenuButton as={Button} bg="white" width="100%" color="white">
              <Box display="flex" justifyContent="space-between">
                <Box display="flex">
                  <img src={IG} alt="" width="25px" />
                  <Text
                    textAlign="center"
                    my="auto"
                    mx={2}
                    fontWeight="400"
                    color="black"
                  >
                    Buy Likes
                  </Text>
                </Box>
                <ChevronDownIcon mt={1} color="black" />
              </Box>
            </MenuButton>
            <MenuList>
              <MenuItem as="a" href="/option1">
                Option 1
              </MenuItem>
              <MenuItem as="a" href="/option2">
                Option 2
              </MenuItem>
              <MenuItem as="a" href="/option3">
                Option 3
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>

        {/* Button 2 */}
        <Box>
          <Menu>
            <MenuButton as={Button} bg="white" width="100%" color="white">
              <Box display="flex" justifyContent="space-between">
                <Box display="flex">
                  <img src={IG} alt="" width="25px" />
                  <Text
                    textAlign="center"
                    my="auto"
                    mx={2}
                    fontWeight="400"
                    color="black"
                  >
                    Buy Comments
                  </Text>
                </Box>
                <ChevronDownIcon mt={1} color="black" />
              </Box>
            </MenuButton>
            <MenuList>
              <MenuItem as="a" href="/option1">
                Option 1
              </MenuItem>
              <MenuItem as="a" href="/option2">
                Option 2
              </MenuItem>
              <MenuItem as="a" href="/option3">
                Option 3
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>

      <Flex
        direction="column"
        flex={{ base: "1", md: "2" }}
        textAlign="left"
        ml={{ md: "2" }}
        px={8}
        py={4}
      >
        <Box pb={4}>
          <Menu>
            <MenuButton
              as={Button}
              bg="#CB29BE"
              width="100%"
              color="white"
              _hover={{
                bg: "#CB29BE",
                opacity: "0.9",
                transition: "color 0.3s ease-in-out",
              }}
            >
              <Box display="flex" justifyContent="space-between">
                <Box display="flex">
                  <img src={IG} alt="" width="25px" />
                  <Text textAlign="center" my="auto" mx={2} fontWeight="400">
                    Buy Engagement
                  </Text>
                </Box>
                <ChevronDownIcon mt={1} />
              </Box>
            </MenuButton>
            <MenuList>
              <MenuItem as="a" href="/option1">
                Option 1
              </MenuItem>
              <MenuItem as="a" href="/option2">
                Option 2
              </MenuItem>
              <MenuItem as="a" href="/option3">
                Option 3
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </Flex>
  );
};
 export default InstagramBtn;
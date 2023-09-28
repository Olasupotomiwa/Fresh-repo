import React from "react";
import { NavLink, useLocation, useMatch, Outlet } from "react-router-dom";

import { useSelector } from "react-redux";

import {
  IconButton,
  Avatar,
  Image,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  Menu,
  MenuButton,
  MenuItem,
  Input,
  MenuList,
} from "@chakra-ui/react";
import { FiMenu, FiBell, FiChevronDown, FiSearch } from "react-icons/fi";
import Logo from "../../src/assets/images/logo.png";

// Update the LinkItems with route paths
const LinkItems = [
  { name: "Home", icon: "solar:cart-4-bold", path: "/homepage" },
  { name: "Earn", icon: "healthicons:money-bag", path: "/earn" },
  { name: "Advertise", icon: "bi:phone-vibrate-fill", path: "/advertise" },
  { name: "Marketplace", icon: "solar:cart-4-bold", path: "/market-place" },
  {
    name: "Buy more followers & more",
    icon: "fluent:people-32-filled",
    path: "/buy-followers2",
  },
  { name: "Referral", icon: "ph:paper-plane-fill", path: "/referral" },
  {
    name: "My Dashboard",
    icon: "fluent:content-view-gallery-28-filled",
    path: "/dashboard",
  },
  { name: "My profile", icon: "bi:person-fill", path: "/my-profile" },
  { name: "FAQS", icon: "bxs:chat", path: "/frequency-asked-questions" },
  { name: "About us", icon: "fluent:info-12-filled", path: "/about2" },
  { name: "Chat with support", icon: "mdi:video-chat", path: "/chat-with-support" },
];

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg="#121212"
      maxW={{ base: "full", md: "20%" }}
      pos="fixed"
      pr={4}
      top="0"
      
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Image src={Logo} />
        <CloseButton
          display={{ base: "flex", md: "none" }}
          onClick={onClose}
          color="white"
        />
      </Flex>
      <Box mt="30px" pb={20} >
        {LinkItems.map((link) => (
          <NavItem
            key={link.name}
            icon={link.icon}
            path={link.path}
            onClose={onClose}
            pl={3}
            pr='2'
          >
            {link.name}
          </NavItem>
        ))}
      </Box>
    </Box>
  );
};

const NavItem = ({ icon, children, path, onClose, ...rest }) => {
  const handleClick = () => {
    onClose(); // Close the mobile menu
  };
  const location = useLocation();
  const match = useMatch(path);

  // Determine if the NavLink should be active
  const isActive = () => {
    if (!match) return false; // Not active if not matched

    // Check if it's an exact match (top-level route) or a partial match (nested route)
    return (
      location.pathname === path || location.pathname.startsWith(path + "/")
    );
  };

  return (
    <Box >
      <NavLink
        to={path || "/homepage"}
        style={{ textDecoration: "none" }}
        onClick={handleClick}
        className={isActive() ? "active-nav-link" : "nav-link"}
       
      >
        <Flex
          align="center"
          p="0"
          mr="10"
          my="1"
          bg={isActive() ? "#CB29BE" : "inherit"}
          color={isActive() ? "white" : "inherit"}
          fontFamily="clash grotesk"
          borderRadius="lg"
          fontSize="15px"
          borderBottomLeftRadius="none"
          borderTopLeftRadius="none"
          role="group"
          cursor="pointer"
          _hover={{
            bg: "#CB29BE",
            color: "white",
          }}
          {...rest}
        >
          {icon && (
            <iconify-icon
              icon={icon}
              style={{
                color: isActive() ? "white" : "inherit",
                margin: "10px",
              }}
              width="20"
              margin-right="10px"
            ></iconify-icon>
          )}
          {children}
        </Flex>
      </NavLink>
      {/* If this NavItem has nested routes, render them using Outlet */}
      {match?.route?.children && <Outlet />}
    </Box>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  const user = useSelector((state) => state.auth.user);

  return (
    <Box
      className="mobile-heade"
     w={{base: '100%', md: '80%'}}
     ml={{base: '0', md: '20%'}}
     
      bg={{ base: "#121212", md: "black" }}
    >
      
      <Flex
        px={{ base: 4, md: 4 }}
        height="20"
        alignItems="center"
        justifyContent={{ base: "space-between", md: "space-between" }}
        {...rest}
        
      >
        {/* Add search input with icon */}
        <Box
  display={{ base: 'none', md: 'flex' }}
  alignItems="center"
  border="1px solid #808080" 
  borderRadius="15px"
  transition="border-color 0.3s ease" 
  ml={0}
>
  <IconButton
    size="lg"
    variant="ghost"
    _hover={{ bg: "black", opacity: "0.9" }}
    aria-label="search"
    icon={<FiSearch color="white" />}
  />
  <Input
    type="text"
    placeholder="Search"
    bg="transparent"
    border="none"
    fontFamily='clash grotesk'
    outline="none"
    color="white"
    ml='-5'
    _focus={{
      borderColor: "transparent", // Remove border on focus
      boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)", // Add box shadow on focus
    }}
  />
</Box>


        <Image src={Logo} width="75px" display={{ base: "flex", md: "none" }} />
        

        <HStack spacing={{ base: "0", md: "6" }}>
          <IconButton
            size="lg"
            variant="ghost"
            mx="4"
            _hover={{ bg: "black", opacity: "0.9" }}
            aria-label="open menu"
            icon={<FiBell color="white" bg="#121212" />}
          />

          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                py={2}
                transition="all 0.3s"
                _focus={{ boxShadow: "none" }}
                mr="6"
              >
                <HStack>
                  <Avatar size={"sm"} src={user.Profile_picture} />
                  <VStack
                    display={{ base: "none", md: "flex" }}
                    alignItems="flex-start"
                    spacing="1px"
                    ml="2"
                  >
                    <Text
                      fontSize="sm"
                      fontFamily="clash grotesk"
                      color="white"
                    >
                      {user.username}
                    </Text>
                  </VStack>
                  <Box display={{ base: "none", md: "flex" }}>
                    <FiChevronDown color="white" />
                  </Box>
                </HStack>
              </MenuButton>
              <MenuList
                bg="black"
                fontFamily="clash grotesk"
                borderColor={useColorModeValue("gray.200", "gray.700")}
              >
                <MenuItem>Change Profile pics</MenuItem>
                <MenuItem>Change password</MenuItem>
                <MenuItem>Log out</MenuItem>
              </MenuList>
            </Menu>
          </Flex>

          <IconButton
            display={{ base: "flex", md: "none" }}
            onClick={onOpen}
            _hover={{ bg: "black", opacity: "0.9" }}
            variant="outline"
            aria-label="open menu"
            icon={<FiMenu color="white" />}
          />
        </HStack>
      </Flex>
    </Box>
  );
};

const SidebarWithHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="#121212">
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
        overflowY="auto"
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: "25%" }} p="0">
        {/* Content */}
      </Box>
    </Box>
  );
};

export default SidebarWithHeader;
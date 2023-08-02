import React from "react";
import {
  Box,
  Flex,
  Center,
  Spacer,
  Text,
  IconButton,
  Stack,
  Collapse,
  Popover,
  PopoverTrigger,
  Image,
  Container,
  useDisclosure,
  Button,
  chakra
} from "@chakra-ui/react";

import { useState } from "react";

import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { IconProps } from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";
import { LogoJPG } from "constants/image_assets";

// Define the navigation items
type NavItem = {
  label: string;
  href: string;
  subItems?: NavItem[];
};
const NAV_ITEMS: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Our packages",
    href: "/packages",
    subItems: [
      {
        label: "Social media tasks",
        href: "/social-media-tasks",
      },
      {
        label: "Social media adverts",
        href: "/social-media-adverts",
      },
      {
        label: "Buy followers",
        href: "/buy-followers",
      },
    ],
  },
  {
    label: "Marketplace",
    href: "/market-place",
  },
];

// Desktop navigation component
const DesktopNav = () => {
  return (
    <Stack direction="row" align="center" spacing={0} pr={0} mr="30">
      <Center>
        {NAV_ITEMS.map((navItem, index) => (
          <Box key={navItem.label} px={0} mr="10">
            {index !== 0 && <Box />}
            {navItem.subItems ? (
              <DesktopDropdownNavItem
                label={navItem.label}
                subItems={navItem.subItems}
              />
            ) : (
              <Popover trigger="hover" placement="bottom-start">
                <PopoverTrigger>
                  <NavLink to={navItem.href} className="Navlink">
                     <chakra.span _hover={{color: '#CB29BE',  transition: "color 0.3s ease-in-out"}}>
                    {navItem.label}
                    </chakra.span>
                  </NavLink>
                </PopoverTrigger>
              </Popover>
            )}
          </Box>
        ))}
      </Center>

      <Spacer />

      {/* Login and Sign Up buttons for desktop view */}
      <Stack
        spacing={0}
        direction="row"
      
        display={{ base: "none", md: "flex" }}
        position="absolute"
        right="5px"
      >
        <Button
          variant="ghost"
           _hover={{ color: "#CB29BE", transition: "color 0.3s ease-in-out",  opacity: "0.9" }}
          fontWeight="400"
        >
          Log in
        </Button>
        <Button
          bg="#CB29BE"
          rounded="full"
          _hover={{
            bg: "#CB29BE",
            opacity: "0.9",
          }}
          px="15px"
          py={5}
          fontWeight="400"
        >
          Create account
        </Button>
      </Stack>
    </Stack>
  );
};

// // Desktop navigation dropdown component
const DesktopDropdownNavItem = ({
  label,
  subItems,
}: {
  label: string;
  subItems: NavItem[];
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavItemClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box as="div" onClick={handleNavItemClick}>
      <Flex align="center" _hover={{ textDecoration: "none" }}>
        <Text cursor="pointer" _hover={{ color: "#CB29BE", transition: "color 0.3s ease-in-out" }}>{label}</Text>
        <Box
          as={ChevronDownIcon}
          ml={0.5}
          transform={isOpen ? "rotate(180deg)" : "none"}
        />
      </Flex>
      {isOpen && (
        <Stack
          pl={4}
          borderLeft={1}
          borderColor="gray.200"
          zIndex={1}
          position="absolute"
          mt={2}
        >
          {subItems.map((subItem) => (
            <NavLink key={subItem.label} to={subItem.href}>
               <chakra.span _hover={{color: '#CB29BE',  transition: "color 0.3s ease-in-out"}}>
              {subItem.label}
              </chakra.span>
            </NavLink>
          ))}
        </Stack>
      )}
    </Box>
  );
};

// Mobile navigation item component
const MobileNavItem = ({
  label,
  href,
  subItems,
  onClose,
}: {
  label: string;
  href: string;
  subItems?: NavItem[];
  onClose: () => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavItemClick = () => {
    if (subItems) {
      setIsOpen(!isOpen);
    } else {
      onClose();
    }
  };

  return (
    <Stack spacing={4}>
      {subItems ? (
        <>
          <Flex
            py={2}
            as="div"
            onClick={handleNavItemClick}
            cursor="pointer"
            align="center"
            _hover={{
              textDecoration: "none",
            }}
          >
            <Text _hover={{ color: "#CB29BE", transition: "color 0.3s ease-in-out" }}>{label}</Text>
            <Box
              as={subItemsIcon.base}
              ml={0.5}
              transform={isOpen ? "rotate(180deg)" : "none"}
            />
          </Flex>
          <Collapse in={isOpen} animateOpacity>
            <Stack pl={4} borderLeft={1} borderColor="gray.200">
              {subItems.map((subItem) => (
                <NavLink
                  key={subItem.label}
                  to={subItem.href}
                  onClick={onClose}
                 
                >
                  <chakra.span _hover={{color: '#CB29BE',  transition: "color 0.3s ease-in-out"}}>
                  {subItem.label}
                  </chakra.span>
                </NavLink>
              ))}
            </Stack>
          </Collapse>
        </>
      ) : (
        <Flex
          py={2}
          as={NavLink}
          to={href}
          onClick={onClose}
          justify="space-between"
          align="center"
          _hover={{
            textDecoration: "none",
          }}
        >
          <Text
            onClick={handleNavItemClick}
            _hover={{ color: "#CB29BE", transition: "color 0.3s ease-in-out" }}
          >
            {label}
          </Text>
        </Flex>
      )}
    </Stack>
  );
};

const subItemsIcon: { [key: string]: React.ElementType<IconProps> } = {
  base: ChevronDownIcon,
};

// Mobile navigation component
const MobileNav = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <Stack bg="black" p={4} display={{ md: "none" }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} onClose={onClose} />
      ))}

      {/* Login and Sign Up buttons for mobile view */}
      {isOpen && (
        <Stack spacing={4}>
          <Button
            variant="ghost"
            fontWeight="400"
             _hover={{ color: "#CB29BE", transition: "color 0.3s ease-in-out",  opacity: "0.9" }}
             
          >
            Login
          </Button>
          <Button
            background="#CB29BE"
            rounded="full"
            ml="auto"
            mr="auto"
            fontWeight="400"
            _hover={{
              bg: "#CB29BE",
              opacity: "0.9",
            }}
          >
            Create account
          </Button>
        </Stack>
      )}
    </Stack>
  );
};

const Header = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Container maxW="full" bg="black" color="white" fontFamily="Clash Grotesk" px={5}>
      <Box py={2}>
        <Flex
          color="white.600"
          py={{ base: 4 }}
          align="center"
          justify="space-around"
          bg="black"
        >
          <Flex flex={{ base: 0 }} align="space-around">
            <Box display={{ base: "none", md: "flex" }} width="150px">
              <Link to="/">
                <Image src={LogoJPG} width="100px" alt="trendit3 logo" />
              </Link>
            </Box>
          </Flex>

          <Flex flex={{ base: 2 }}>
            <Link to="/">
              <Image
                src={LogoJPG}
                width="100px"
                alt="trendit3 logo"
                display={{ base: "flex", md: "none" }}
               
              />
            </Link>

            <Flex
              display={{ base: "none", md: "flex" }}
              flex={{ base: 1 }}
              ml={5}
            >
              <DesktopNav />
            </Flex>
          </Flex>

          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
            justify="flex-end"
            align="center"
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} color="white" />
                )
              }
              variant="ghost"
              aria-label="Toggle Navigation"
            />
          </Flex>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav isOpen={isOpen} onClose={onToggle} />
        </Collapse>
      </Box>
    </Container>
  );
};

export default Header;

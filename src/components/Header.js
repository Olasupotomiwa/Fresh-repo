import React, { useState } from "react";
import {
  Box,
  Flex,
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
  chakra,
} from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";
import { ChevronDownIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { LogoJPG } from "constants/image_assets";

const NAV_ITEMS = [
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
        href: "/create-tasks",
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

const DesktopNav = () => {
  return (
    <Stack direction="row" align="center" spacing={0} pr={0} mr="30">
      <Flex>
        {NAV_ITEMS.map((navItem, index) => (
          <Box
            key={navItem.label}
            px={0}
            ml={{ base: "10", md: "6", lg: "-2" }}
            mr={{ base: "0", md: "2", lg: "6" }}
          >
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
                    <chakra.span
                      _hover={{
                        color: "#CB29BE",
                        transition: "color 0.3s ease-in-out",
                      }}
                    >
                      {navItem.label}
                    </chakra.span>
                  </NavLink>
                </PopoverTrigger>
              </Popover>
            )}
          </Box>
        ))}
      </Flex>

      <Spacer />
      <Spacer />

      <Stack
        spacing={0}
        direction="row"
        display={{ base: "none", md: "flex" }}
        position="absolute"
        right={5}
      >
        <Button
          variant="ghost"
          _hover={{
            color: "#CB29BE",
            transition: "color 0.3s ease-in-out",
            opacity: "0.9",
          }}
          fontWeight="400"
          as={Link}
          to="/log-in"
        >
          Log in
        </Button>
        <Link to="/sign-up">
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
        </Link>
      </Stack>
    </Stack>
  );
};

const DesktopDropdownNavItem = ({ label, subItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavItemClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box as="div" onClick={handleNavItemClick}>
      <Flex align="center" _hover={{ textDecoration: "none" }}>
        <Text
          cursor="pointer"
          _hover={{ color: "#CB29BE", transition: "color 0.3s ease-in-out" }}
        >
          {label}
        </Text>
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
          bg="black"
        >
          {subItems.map((subItem) => (
            <NavLink key={subItem.label} to={subItem.href} className="Navlink">
              <chakra.span
                _hover={{
                  color: "#CB29BE",
                  transition: "color 0.3s ease-in-out",
                }}
              >
                {subItem.label}
              </chakra.span>
            </NavLink>
          ))}
        </Stack>
      )}
    </Box>
  );
};

const MobileNavItem = ({ label, href, subItems, onClose }) => {
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
            <Text
              _hover={{
                color: "#CB29BE",
                transition: "color 0.3s ease-in-out",
              }}
            >
              {label}
            </Text>
            <Box
              as={ChevronDownIcon}
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
                  className="Navlink"
                >
                  <chakra.span
                    _hover={{
                      color: "#CB29BE",
                      transition: "color 0.3s ease-in-out",
                    }}
                  >
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
          className="Navlink"
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


const MobileNav = ({ isOpen, onClose }) => {
  return (
    <Stack bg="black" p={4} display={{ md: "none" }} height="100vh">
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} onClose={onClose} />
      ))}
      {isOpen && (
        <Stack spacing={4}>
          <Button
            variant="ghost"
            fontWeight="400"
            _hover={{
              color: "#CB29BE",
              transition: "color 0.3s ease-in-out",
              opacity: "0.9",
            }}
            onClick={onClose}
            as={Link}
            to="/log-in"
            className="Navlink"
          >
            Log in
          </Button>

          <Button
            as={Link}
            to="/sign-up"
            background="#CB29BE"
            rounded="full"
            ml="auto"
            mr="auto"
            fontWeight="400"
            _hover={{
              bg: "#CB29BE",
              opacity: "0.9",
            }}
            onClick={onClose}
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
    <Container
      maxW={{ xl: "100%", '2xl': '75%' }}
      bg='black'
      color="white"
      fontFamily="Clash Grotesk"
      className="mobile-header"
    >
      <Box py={{ base: "3", md: "5" }} px={{ base: "0", md: "15" }}>
        <Flex
          color="white.600"
          py={{ base: 4 }}
          align="center"
          justify="space-between" // Adjusted justify property
          bg="black"
        >
          <Flex flex={0}>
            <Box
              display={{ base: "none", md: "flex" }}
              width={{ base: "150px", md: "90px", lg: "360px" }}
            >
              <Link to="/">
                <Image src={LogoJPG} width="100px" alt="trendit3 logo" />
              </Link>
            </Box>
          </Flex>

          {/* Moved the IconButton outside the Flex */}
          <IconButton
            onClick={onToggle}
            pr='20px'
            pt='40px'
            _hover={{ bg: "black", opacity: "0.9" }}
            icon={
              isOpen ? (
                <CloseIcon w={3} h={3} />
              ) : (
                <HamburgerIcon w={5} h={5} color="white" />
              )
            }
            variant="ghost"
            aria-label="Toggle Navigation"
            position="fixed" // Keep the icon fixed at the edge
            top={0} // Place it at the top
            right={0} // Push it to the right edge
            display={{ base: "flex", md: "none" }} // Show only on mobile
          />

          <Flex flex={2}>
            <Link to="/">
              <Image
                src={LogoJPG}
                width="100px"
                alt="trendit3 logo"
                display={{ base: "flex", md: "none" }}
              />
            </Link>

            <Flex display={{ base: "none", md: "flex" }} flex={1} ml={5}>
              <DesktopNav />
            </Flex>
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

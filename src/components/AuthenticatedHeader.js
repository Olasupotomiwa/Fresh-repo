import React from 'react';
import { NavLink, useLocation, useMatch, Outlet } from 'react-router-dom';

import { useSelector } from 'react-redux';

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
  MenuList,
  Container,
} from '@chakra-ui/react';
import {
  FiMenu,
  FiBell,
  FiChevronDown,
} from 'react-icons/fi';
import  Logo  from '../../src/assets/images/logo.png'

// Update the LinkItems with route paths
const LinkItems = [
  { name: 'Home', icon: 'solar:cart-4-bold', path: '/homepage' },
  { name: 'Earn', icon: "healthicons:money-bag", path: '/earn' },
  { name: 'Advertise', icon: 'bi:phone-vibrate-fill', path: '/advertise' },
  { name: 'Marketplace', icon: 'solar:cart-4-bold', path: '/market-place2' },
  { name: 'Buy more followers & more', icon: "fluent:people-32-filled", path: '/dashboard' },
  { name: 'Referral', icon: "ph:paper-plane-fill", path: '/settings3' },
  { name: 'My Dashboard', icon: "fluent:content-view-gallery-28-filled", path: '/settings4' },
  { name: 'My profile', icon: "bi:person-fill", path: '/settings5' },
  { name: 'FAQS', icon: "bxs:chat", path: '/frequency-asked-questions' },
  { name: 'About us', icon: "fluent:info-12-filled", path: '/about2' },
  { name: 'Chat with support', icon: "mdi:video-chat", path: '/settings6' },
];

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg='#121212'
     
      w={{ base: 'full', md: '25%' }}
      pos='fixed'
      top='0'
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
       
        <Image src={Logo} />
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} color='white' />
      </Flex>
      <Box mt='30px'>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} path={link.path} onClose={onClose}>
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
  }
  const location = useLocation();
  const match = useMatch(path);

 
  // Determine if the NavLink should be active
  const isActive = () => {
    if (!match) return false; // Not active if not matched

    // Check if it's an exact match (top-level route) or a partial match (nested route)
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  return (
   
    <Box>
      
    <NavLink to={path || '/homepage'} style={{ textDecoration: 'none' }} onClick={handleClick}  className={isActive() ? 'active-nav-link' : 'nav-link'} >
      <Flex
        align="center"
        p="0"
      
        mr="10"
        my='1'
       
        bg={isActive() ? '#CB29BE' : 'inherit'}
        color={isActive() ? 'white' : 'inherit'}
       
       
        fontFamily='clash grotesk'
        borderRadius="lg"
        fontSize='16px'
        borderBottomLeftRadius='none'
        borderTopLeftRadius="none"
        role="group"
        cursor="pointer"
        _hover={{
          bg: '#CB29BE',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <iconify-icon
          icon={icon}
          style={{ color: isActive() ? 'white' : 'inherit' , margin: '12px' }}
          width="22"
          margin-right='10px'
        
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
    <Container  className="mobile-header" maxW={{base: '100%', md: '75%'}} ml={{ base: 0, md: "25%" }} p="0" bg='#121212'>
    <Flex
      ml={{ base: 0, md: "25%" }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
    
     
     
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}>
    <Image src={Logo}  display={{ base: 'flex', md: 'none' }}/>
  
      <HStack spacing={{ base: '0', md: '6' }}>
        <IconButton size="lg" variant="ghost" mx='4' _hover={{ bg: "black", opacity: "0.9" }} aria-label="open menu" icon={<FiBell  color='white' bg='#121212'/>} />
      
        <Flex alignItems={'center'}  >
          <Menu>
            <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}  mr='6'>
              <HStack>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2">
                  <Text fontSize="sm"   fontFamily='clash grotesk' color='white'>{user.username}</Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown color='white' />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg='black'
              fontFamily='clash grotesk'
              borderColor={useColorModeValue('gray.200', 'gray.700')}>
              <MenuItem>Change Profile pics</MenuItem>
              <MenuItem>Change password</MenuItem>
              <MenuItem>Log out</MenuItem>

      
            </MenuList>
          </Menu>
        </Flex>


        <IconButton
          display={{ base: 'flex', md: 'none' }}
          onClick={onOpen}
          _hover={{ bg: "black", opacity: "0.9" }}
          variant="outline"
          aria-label="open menu"
          icon={<FiMenu  color='white' />}
        />
      </HStack>
    </Flex>
    </Container>
  );
};

const SidebarWithHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg='#121212' >
      <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
      
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen}  />
      <Box ml={{ base: 0, md: "25%" }} p="0">
        {/* Content */}
       
      </Box>
    </Box>
  );
};

export default SidebarWithHeader;

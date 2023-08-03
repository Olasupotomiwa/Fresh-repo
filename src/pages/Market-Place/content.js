card
<Card maxW='sm'>
  <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>


import React from 'react';
import {
  Box,
  Flex,
  Spacer,
  Input,
  InputGroup,
  InputLeftElement,
  IconButton,
  VStack,
  chakra,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const Navbar = ({ onNavLinkClick }) => {
  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Blog', id: 'blog' },
    { label: 'Contact', id: 'contact' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Support', id: 'support' },
  ];

  return (
    <Box as="nav" p={4} boxShadow="md">
      <Flex align="center">
        <Box>
          {/* Your Logo or Branding */}
          <chakra.span fontWeight="bold" fontSize="lg">
            My Website
          </chakra.span>
        </Box>
        <Spacer />
        {/* Navigation Links */}
        <Box display={['none', 'none', 'block']}>
          <Flex align="center">
            {navLinks.map((link) => (
              <Box
                key={link.id}
                mx={2}
                cursor="pointer"
                onClick={() => onNavLinkClick(link.id)}
              >
                {link.label}
              </Box>
            ))}
          </Flex>
        </Box>
        <Spacer />
        {/* Search Box */}
        <InputGroup w={['full', 'auto']} maxW={['full', 'xs']}>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input type="text" placeholder="Search..." />
        </InputGroup>
      </Flex>
      {/* Mobile Navigation Links */}
      <Box mt={4} display={['block', 'block', 'none']}>
        <Flex flexWrap="nowrap" overflowX="auto">
          {navLinks.map((link) => (
            <Box
              key={link.id}
              px={2}
              whiteSpace="nowrap"
              cursor="pointer"
              onClick={() => onNavLinkClick(link.id)}
            >
              {link.label}
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default Navbar;

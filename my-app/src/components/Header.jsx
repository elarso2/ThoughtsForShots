import { Box, Heading, HStack, Spacer, Image, Button } from '@chakra-ui/react';
import BeerWall from '../assets/BeerWall.jpg';

import BarScene from '../assets/Rename.jpg'
import Logo from '../assets/TfSlogo.png'
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <Box
      as="section"
      color="#F7FAFC"
      bg="#6B46C1"
      pt="10px"
      pb="10px"
      px="32px"
      textAlign="center"
      backgroundImage={BarScene}
      backgroundPosition="center"
    >
      <HStack spacing="24px">
        <Box
          w="200px"
          h="200px"
          bg="white"
          borderRadius="full"
          opacity={0.7}
          my={10}
        >
          <img src={Logo} alt="Logo" boxSize="200px" mt="10px"></img>
        </Box>

        <Spacer />
        <Button w='120px' h='40px' bg='yellow.900'>
          <Link to='/home'>Home</Link>
        </Button>
        <Button w='120px' h='40px' bg='yellow.800'>
          <Link to='/profile'>Profile</Link>
        </Button>
        <Button w='120px' h='40px' bg='yellow.700'>
          Order History
        </Button>
        <Button w='110px' h='40px' bg='yellow.600'>
          Pay Your Tab
        </Button>
        <Button w='100px' h='40px' bg='yellow.500'>
          <Link to='/'>Logout</Link>
        </Button>
      </HStack>
      <Heading fontWeight="800" fontSize="48px" alignItems="center[">
        Shots for Thoughts
      </Heading>
    </Box>
  );
}

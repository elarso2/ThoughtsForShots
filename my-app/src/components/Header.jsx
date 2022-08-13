import { Box, Heading, HStack, Spacer, Image, Button } from '@chakra-ui/react';
import BeerWall from '../assets/BeerWall.jpg';

import BarScene from '../assets/Rename.jpg';
import Logo from '../assets/TfSlogo.png';
import { Link } from 'react-router-dom';

const backgroundImage =
  'https://images.unsplash.com/photo-1601002053235-2efc24f4c210?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80';

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
        <Button w="120px" h="40px" bg="yellow.900">
          <Link to="/home">Home</Link>
        </Button>
        <Button w="120px" h="40px" bg="yellow.800">
          <Link to="/profile">Profile</Link>
        </Button>
        <Button w="120px" h="40px" bg="yellow.700">
          Order History
        </Button>
        {/* <Button w="110px" h="40px" bg="yellow.600">
          Pay Your Tab
        </Button> */}
        <Button w="100px" h="40px" bg="yellow.600">
          <Link to="/">Logout</Link>
        </Button>
        <Button w="100px" h="40px" bg="yellow.500" id="buttonInstall">
          Install
        </Button>
      </HStack>
      <Heading fontWeight="800" fontSize="48px" alignItems="center[">
        Shots for Thoughts
      </Heading>
    </Box>
  );
}

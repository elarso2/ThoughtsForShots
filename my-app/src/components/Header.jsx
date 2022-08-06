import { Box, Heading, HStack, Spacer, Image } from '@chakra-ui/react';

const backgroundImage = "https://images.unsplash.com/photo-1601002053235-2efc24f4c210?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"

export function Header() {
  return (
    <Box
      as='section'
      color='#F7FAFC'
      bg='#6B46C1'
      pt='90px'
      pb='198px'
      px='32px'
      textAlign='center'
      backgroundImage= {backgroundImage}
      backgroundPosition="center"
    >
      <HStack spacing='24px'>
  <Box  w='80px' h='40px' bg='blue'>
    Logo
  </Box>
  <Spacer />
  <Box w='120px' h='40px' bg='tomato'>
   Profile
  </Box>
  <Box w='80px' h='40px' bg='pink.100'>
    Checkout
  </Box>
</HStack>
      <Heading fontWeight='800' fontSize='48px'>
        Shots for Thoughts
      </Heading>
    
 
    </Box>
  );
}
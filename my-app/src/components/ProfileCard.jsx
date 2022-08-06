import {
    Box,
    Button,
    Flex,
    Stack,
    Text,
    Image, 
    Textarea
  } from '@chakra-ui/react';
  
  import ProfilePic from '../assets/t-pain.jpg'

  
  export function ProfileCard() {
    return (
      <Box
        maxW='994px'
        margin='auto'
        mt='-160px'
        borderRadius='16px'
        overflow='hidden'
        boxShadow='dark-lg'
        textAlign='center'
        as='section'
      >
        <Flex>
          <Box bg='#F0EAFB' p='60px'>
          <Image
  borderRadius='full'
  boxSize='200px'
  src={ProfilePic}
  alt='Dan Abramov'
  ml= '45px'
/>
            <Button colorScheme='purple' size='lg' w='282px' mt='24px'>
              Post Thought
            </Button>
          </Box>
          <Box p='60px' fontSize='18px' bg='white'>
            <Text textAlign='center'>
              Share your thought below
            </Text>
            <Stack as='ul' spacing='20px' pt='24px'>
            <Textarea minW='500px' placeholder='Here is a sample placeholder' />
            </Stack>
          </Box>
        </Flex>
      </Box>
    );
  }
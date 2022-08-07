import { Box, Flex, Image, Button, Stack, Container,Textarea} from '@chakra-ui/react';

import ProfilePic from '../assets/t-pain.jpg'


export function ThoughtsPage() {
  return (
    <Box
    maxW='994px'
    margin='auto'
    mt='124px'
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
alt='t-pain'
ml= '45px'
/>
        <Button colorScheme='purple' size='lg' w='282px' mt='24px'>
          Buy a shot $4
        </Button>
      </Box>
      <Box p='60px' fontSize='18px' bg='white'>
        <Stack as='ul' spacing='20px' pt='24px'>
        <Container mt="36px">
  It's always "T-Pain buy me a drank" but never, "T-Pain, let me buy YOU a drink".
   :/
</Container>
<Textarea minW='500px' placeholder='Comment' />
<Button colorScheme='purple' size='lg' w='282px' >
          Reply
        </Button>
        </Stack>
      </Box>
    </Flex>
  </Box>
  );
}
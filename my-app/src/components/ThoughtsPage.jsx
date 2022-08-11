import {
  Box,
  Flex,
  Image,
  Button,
  Stack,
  Container,
  Textarea,
} from '@chakra-ui/react';
import { useStoreContext } from '../utils/GlobalState';
import { ADD_TO_CART } from '../utils/actions';
import ProfilePic from '../assets/t-pain.jpg';

export function ThoughtsPage({ thoughts, showUsername = true }) {
  const [state, dispatch] = useStoreContext();

  function addToTab() {
    const fourDollarShot = {
      name: 'shot',
      quantity: '1',
      price: '$4',
    };

    dispatch({ type: ADD_TO_CART, drink: fourDollarShot });
  }
  return (
    <Box
      maxW="994px"
      margin="auto"
      mt="124px"
      borderRadius="16px"
      overflow="hidden"
      boxShadow="dark-lg"
      textAlign="center"
      as="section"
    >
      <div>
        <Flex>
          {thoughts &&
            thoughts.map(thought => {
              <div>
                <Box bg="#F0EAFB" p="60px">
                  <Container>{thought.username}</Container>
                  <Image
                    borderRadius="full"
                    boxSize="200px"
                    src={ProfilePic}
                    alt="t-pain"
                    ml="45px"
                  />
                  <Button
                    onClick={addToTab}
                    colorScheme="purple"
                    size="lg"
                    w="282px"
                    mt="24px"
                  >
                    Buy a shot $4
                  </Button>
                </Box>
                <Box p="60px" fontSize="18px" bg="white">
                  <Stack as="ul" spacing="20px" pt="24px">
                    <Container mt="36px">{thought.thoughtText}</Container>
                    <Container>{thought.createdAt}</Container>
                    <Textarea minW="500px" placeholder="Comment" />
                    <Button colorScheme="purple" size="lg" w="282px">
                      Reply
                    </Button>
                  </Stack>
                </Box>
              </div>;
            })}
        </Flex>
      </div>
    </Box>
  );
}

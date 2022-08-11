import {
  Box,
  Button,
  Flex,
  Stack,
  Text,
  Image,
  Textarea,
  FormControl,
} from '@chakra-ui/react';

import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_THOUGHT } from '../utils/mutations';
import { QUERY_THOUGHTS, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';

import ProfilePic from '../assets/t-pain.jpg';

export function ProfileCard() {
  const [thoughtText, setThoughtText] = useState('');
  // if we want to keep track of character count
  const [characterCount, setCharacterCount] = useState(0);

  const [addThought, { error }] = useMutation(ADD_THOUGHT, {
    update(cache, { data: { addThought } }) {
      try {
        const { thoughts } = cache.readQuery({ query: QUERY_THOUGHTS });

        cache.writeQuery({
          query: QUERY_THOUGHTS,
          data: { thoughts: [addThought, ...thoughts] },
        });
      } catch (err) {
        console.error(err);
      }

      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, thoughts: [...me.thoughts, addThought] } },
      });
    },
  });

  const handleFormSubmit = async event => {
    event.preventDefault();

    try {
      const { data } = await addThought({
        variables: {
          thoughtText,
          username: Auth.getProfile().data.username,
        },
      });
      setThoughtText('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;
    if (name === 'thoughtText' && value.length <= 280) {
      setThoughtText(value);
      // remove if we don't want to show character count
      setCharacterCount(value.length);
    }
  };

  return (
    <Box
      maxW="994px"
      margin="auto"
      mt="-160px"
      borderRadius="16px"
      overflow="hidden"
      boxShadow="dark-lg"
      textAlign="center"
      as="section"
    >
      <FormControl>
        <form onSubmit={handleFormSubmit}>
          <Flex>
            <Box bg="#F0EAFB" p="60px">
              <Image
                borderRadius="full"
                boxSize="200px"
                src={ProfilePic}
                alt="Dan Abramov"
                ml="45px"
              />
              <Button
                colorScheme="purple"
                size="lg"
                w="282px"
                mt="24px"
                type="submit"
              >
                Post Thought
              </Button>
            </Box>
            <Box p="60px" fontSize="18px" bg="white">
              <Text textAlign="center">Share your thought below</Text>
              <Stack as="ul" spacing="20px" pt="24px">
                <Textarea
                  name="thoughtText"
                  minW="500px"
                  placeholder="Begin typing your thought..."
                  value={thoughtText}
                  onChange={handleChange}
                />
              </Stack>
            </Box>
          </Flex>
        </form>
      </FormControl>
    </Box>
  );
}

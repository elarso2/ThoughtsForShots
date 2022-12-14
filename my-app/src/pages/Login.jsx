import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
//import Link from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import {
  HStack,
  Flex,
  Stack,
  VStack,
  Heading,
  FormControl,
  FormLabel,
  Button,
  Checkbox,
  Link,
} from '@chakra-ui/react';
import LoginLogo from '../assets/Beer.jpg';
import Logo from '../assets/TfSlogo.png';

const Login = props => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = event => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async event => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    // setFormState({
    //   email: '',
    //   password: '',
    // });
  };

  return (
    <HStack w="full" h="100vh">
      {/* <Link rel="manifest" useHref="./manifest.json"></Link> */}
      <Flex w="full" borderRightWidth={1}>
        <img
          objectFit="cover"
          w="full"
          h="full"
          src={LoginLogo}
          alt="LoginLogo"
        />
      </Flex>

      <Flex w="full" h="full" alignItems="center" justifyContent="center">
        <Stack w="full" maxW="md" spacing={4} p={6}>
          <img src={Logo} alt="Logo"></img>
          <Heading fontSize="4xl">Thoughts for Shots!</Heading>
          <Heading fontSize="2xl" color="yellow.500">
            Login to your account!
          </Heading>
          {data ? (
            <p>
              Success! You may now head{' '}
              <Link as={RouterLink} to="/home">
                back to the homepage.
              </Link>
            </p>
          ) : (
            <form onSubmit={handleFormSubmit}>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <input
                  placeholder="username"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="password" py={4}>
                <FormLabel>Password</FormLabel>
                <input
                  placeholder="password"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
              </FormControl>
              <VStack
                spacing={4}
                direction="row"
                align="start"
                justify="space-between"
                py={1}
              >
                <Checkbox colorScheme="yellow">Remember Me</Checkbox>
                <Button colorScheme="yellow" type="submit" py={2}>
                  {/* <Link as={RouterLink} to="/home"> */}
                  Submit
                  {/* </Link> */}
                </Button>
                <Link color={'yellow.500'}>Forgot Password?</Link>
                <h3 py={4}>
                  Don't have an account? <br></br>
                  <Link as={RouterLink} to="/signup" color="yellow.500">
                    Sign Up
                  </Link>
                </h3>
              </VStack>
            </form>
          )}
          {error && (
            <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
          )}
        </Stack>
      </Flex>
    </HStack>
  );
};

export default Login;

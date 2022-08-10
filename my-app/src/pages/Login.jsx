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

            <Flex w="full" h="full" alignItems="center" justifyContent="center">
                <Stack w="full" maxW="md" spacing={4} p={6}>
                    <img src={Logo} alt="Logo"></img>
                    <Heading fontSize="2xl" color="yellow.500">
                        Login to your account!
                    </Heading>
                    <form onSubmit={handleFormSubmit}>
                    <FormControl id="email" >
                        <FormLabel>
                            Email
                        </FormLabel>
                        <input  
                        placeholder='username'
                        name='email'
                        type='email'
                        value={formState.email}
                        onChange={handleChange} 
                        />
                    </FormControl>
                    <FormControl id="password" py={4}>
                        <FormLabel>
                            Password
                        </FormLabel>
                        <input 
                        placeholder='password'
                        name='password'
                        type='password'
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
                        <Checkbox colorScheme="yellow">
                            Remember Me
                        </Checkbox>
                        <Button colorScheme="yellow" type='submit' py={2}>
                            <Link as={RouterLink} to="/home">Submit</Link>
                        </Button>
                        <Link color={"yellow.500"}>
                            Forgot Password?
                        </Link>
                        <h3 py={4}>Don't have an account? <br></br>
                            <Link as={RouterLink} to="/signup" color="yellow.500">Sign Up</Link>
                        </h3>
                    </VStack>

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };
  return (
    <HStack w="full" h="100vh">
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
          <Heading fontSize="2xl" color="yellow.500">
            Login to your account!
          </Heading>
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
                Submit
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
        </Stack>
      </Flex>
    </HStack>
  );
};

export default Login;

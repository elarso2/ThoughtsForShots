import React from 'react';
import { 
    Flex, 
    HStack, 
    Stack, 
    Heading, 
    FormControl, 
    FormLabel, 
    Checkbox, 
    Link, 
    Button, 
    VStack, 
    Input
    } from '@chakra-ui/react';
import TextField from "../components/TextField";
import SignupLogo from '../assets/Shots.jpg';

const Signup = () => {
    return (
        <VStack
        as="form"
        mx="auto"
        w={{ base: "90%", md: 500 }}
        h="100vh"
        justifyContent="center">

        {/* <Flex w="full" h="full">
            <img object-fit="cover" w="full" h="full" src={SignupLogo} alt="SignupImage" />
            <Heading>Sign Up!</Heading>
        </Flex> */}

        <Heading>
            Sign Up!
        </Heading>

        <FormControl py={3} id="user_id" alignItems="center">
            <FormLabel>
                Username
            </FormLabel>
            <input placeholder='username' />
        </FormControl>

        <FormControl py={3} id="email_id">
            <FormLabel>
                Email
            </FormLabel>
            <input placeholder='email' />
        </FormControl>

        <FormControl py={3} id="password_id">
            <FormLabel>
                Password
            </FormLabel>
            <input placeholder='password' />
        </FormControl>

        <Button type='submit' variant="outline" colorScheme="yellow">
            Create Account
        </Button>

        </VStack>

            
            

           
        
    
    
    

    )
};

export default Signup;
import React from 'react';
import { HStack, Flex, Stack, Heading, FormControl, FormLabel, Button, Checkbox, Link } from '@chakra-ui/react';
import  LoginLogo  from '../assets/Beer.jpg';
import Logo from '../assets/TfSlogo.png'
const Login = () => {
    return (
        <HStack w="full" h="100vh">
            <Flex w="full" borderRightWidth={1}>
                <img 
                objectFit="cover" 
                w="full" 
                h="full"
                src={LoginLogo} 
                alt="LoginLogo" />
            </Flex>

            <Flex w="full" h="full" alignItems="center" justifyContent="center">
                <Stack w="full" maxW="md" spacing={4} p={6}>
                    <img src={Logo} alt="Logo"></img>
                    <Heading fontSize="2xl" color="yellow.500">
                        Login to your account!
                    </Heading>
                    <FormControl id="user">
                        <FormLabel>
                            Username
                        </FormLabel>
                        <input borderColor="black" placeholder='username' />
                    </FormControl>
                    <FormControl id="password">
                        <FormLabel>
                            Password
                        </FormLabel>
                        <input placeholder='password' />
                    </FormControl>
                    <Stack 
                    spacing={4} 
                    direction="row" 
                    align="start" 
                    justify="space-between">
                        <Checkbox colorScheme="yellow">
                            Remember Me
                        </Checkbox>
                        <Link color={"yellow.500"}>
                            Forgot Password?
                        </Link>
                    </Stack>

                    <Button colorScheme="yellow">Submit</Button>
                    <h3 py={3}>Don't have an account? <br></br>
                     <Link color="yellow.500">Sign Up</Link>
                    </h3>
                    
                    
                </Stack>
            </Flex>
        </HStack>
    )
}

export default Login;
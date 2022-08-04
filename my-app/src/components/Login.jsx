import React from 'react';
import { HStack, Flex } from '@chakra-ui/react';
import  LoginLogo  from '../assets/Beer.jpg'
const Login = () => {
    return (
        <HStack w="full" h="100vh">
            <Flex w="full" h="full" borderRightWidth={1}>
                <image src={LoginLogo} />
            </Flex>
        </HStack>
    )
}

export default Login;
import React from 'react';
import { Flex, HStack, Stack, Heading, FormControl, FormLabel, Checkbox, Link, Button } from '@chakra-ui/react';
import SignupLogo from '../assets/Shots.jpg';

const Signup = () => {
    return (
        <HStack>
            <Flex w="full" h="full">
                <img objectFit="cover" w="full" h="full" src={SignupLogo} alt="SignupImage" />

                
            </Flex>

            

           
        </HStack>
    
    
    

    )
};

export default Signup;
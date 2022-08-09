import React from 'react';
import { Text, Box } from '@chakra-ui/react'
import { Input } from "@chakra-ui/input"
import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/form-control";
import { Heading, VStack } from "@chakra-ui/layout";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../Signup.css";
import SignupLogo from '../assets/Shots.jpg';

const Signup = () => {

    // Formik Hook to validate password and username length
    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: ""
        },
        validationSchema: Yup.object({
            username: Yup.string().required("Username Required").min(6, "Username much be minimum of 6 characters long, username too short! "),
            password: Yup.string().required("Password Required").min(8, "Password much be minimum of 5 characters long, password too short! "),
        }),
        onSubmit: (values, actions) => {
            alert(JSON.stringify(values, null, 3));
            actions.resetForm();
        }
    });

    return (
        <body className='SignupImg'>
            <VStack
            as="form"
            mx="auto"
            w={{ base: "75%", md: 500 }}
            h="100vh"
            justifyContent="center"
            onSubmit={formik.handleSubmit}
            className='winterCitrus'>


                    <Heading color="#421413">
                        Sign Up!
                    </Heading>

                    {/* Form for Username */}
                    <FormControl py={3} id="user_id" isInvalid={formik.errors.username && formik.touched.username}>
                        <FormLabel colorScheme="black">
                            <Text color="#932D30" textAlign="center">
                                Username
                            </Text>
                        </FormLabel>
                        <Input 
                        bg="white" 
                        textColor="black" 
                        name='username' 
                        placeholder="enter username" 
                        {...formik.getFieldProps("username")}
                        width={"300px"}
                        />
                        <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
                    </FormControl>


                    {/* Form for Email */}
                    <FormControl py={3} id="email_id">
                        <FormLabel>
                            <Text color="#932D30" textAlign="center">
                                Email
                            </Text>
                        </FormLabel>
                        <Input 
                        bg="white" 
                        textColor="black" 
                        name='email' 
                        placeholder='enter email' 
                        onChange={formik.handleChange} 
                        value={formik.values.email}
                        width={"300px"}
                        />
                    </FormControl>

                    {/* Form for Password */}
                    <FormControl py={3} id="password_id" isInvalid={formik.errors.password && formik.touched.password}>
                        <FormLabel>
                            <Text color="#932D30" textAlign="center">
                                Password
                            </Text>
                        </FormLabel>
                        <Input 
                        bg="white" 
                        textColor="black" 
                        name='password' 
                        placeholder='enter password' 
                        {...formik.getFieldProps("password")} 
                        width={"300px"}
                        />
                        <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
                    </FormControl>

                    <Button type='submit' variant="outline" bgColor="#421413">
                        Create Account
                    </Button>
            </VStack>
        </body>
            

    )
};

export default Signup;
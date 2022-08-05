import React from 'react';
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
            password: Yup.string().required("Password Required").min(5, "Password much be minimum of 5 characters long, password too short! "),
        }),
        onSubmit: (values, actions) => {
            alert(JSON.stringify(values, null, 3));
            actions.resetForm();
        }
    });

    return (
        <body className='container'>
            <VStack
            as="form"
            mx="auto"
            w={{ base: "90%", md: 500 }}
            h="100vh"
            justifyContent="center"
            onSubmit={formik.handleSubmit}>

                
                    <Heading>
                        Sign Up!
                    </Heading>

                    {/* Form for Username */}
                    <FormControl py={3} id="user_id" isInvalid={formik.errors.username && formik.touched.username}>
                        <FormLabel>
                            Username
                        </FormLabel>
                        <Input name='username' placeholder="enter username" {...formik.getFieldProps("username")}  />
                        <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
                    </FormControl>


                    {/* Form for Email */}
                    <FormControl py={3} id="email_id">
                        <FormLabel>
                            Email
                        </FormLabel>
                        <Input name='email' placeholder='enter email' onChange={formik.handleChange} value={formik.values.email} />
                    </FormControl>

                    {/* Form for Password */}
                    <FormControl py={3} id="password_id" isInvalid={formik.errors.password && formik.touched.password}>
                        <FormLabel>
                            Password
                        </FormLabel>
                        <Input name='password' placeholder='enter password' {...formik.getFieldProps("password")} />
                        <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
                    </FormControl>

                    <Button type='submit' variant="outline" colorScheme="yellow">
                        Create Account
                    </Button>
               

            </VStack>
        </body>
            

    )
};

export default Signup;
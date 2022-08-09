import React from "react";
import { Box, Text } from "@chakra-ui/react";
import TeamLogo from '../assets/TfSlogo.png'
import { Img } from '@chakra-ui/react'

export default function Logo(props) {
  return (
    <Box {...props}>
      <img src={TeamLogo} alt="Logo" boxSize='400px' objectFit='cover'></img>
    </Box>
  );
}
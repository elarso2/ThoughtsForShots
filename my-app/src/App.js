import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Login from './pages/Login';
import Signup from './pages/Signup';


function App() {
  return (
    <ChakraProvider>
      <ColorModeSwitcher 
      justifySelf="flex-end"
       position="absolute" 
       top={4} 
       right={3} />
      {/* <Login /> */}
      <Signup />

    </ChakraProvider>
  );
}

export default App;

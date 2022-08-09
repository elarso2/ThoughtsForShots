import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { ColorModeSwitcher } from './ColorModeSwitcher';

import { Header } from './components/Header';
import { ProfileCard } from './components/ProfileCard';
import { ThoughtsPage } from './components/ThoughtsPage';
import Profile from './pages/Profile'

function App() {
  return (
    <ChakraProvider>
      <ColorModeSwitcher
        justifySelf="flex-end"
        position="absolute"
        top={4}
        right={3}
      />
      {/* <Login /> */}
      {/* <Forum /> */}
      {/* <Routes></Routes> */}
      {/* <Signup /> */}
      {/* <Header /> */}
      {/* <ProfileCard />
      <ThoughtsPage /> */}
      <Profile />
    </ChakraProvider>
  );
}

export default App;

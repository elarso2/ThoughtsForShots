import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { StoreProvider } from './utils/GlobalState';
import { Header } from './components/Header';
import { ProfileCard } from './components/ProfileCard';
import { ThoughtsPage } from './components/ThoughtsPage';

import Profile from './pages/Profile';
import Forumn from './pages/Forum';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <StoreProvider>
        {/* <ChakraProvider> */}
        <ColorModeSwitcher
          justifySelf="flex-end"
          position="absolute"
          top={4}
          right={3}
        />

        <Router>
          <Routes>
            <Route path="/" element={<Login />}></Route>

            <Route path="/signup" element={<Signup />}></Route>

            <Route path="/profile" element={<Profile />}></Route>


            <Route path="/home" element={<Forumn />}></Route>
          </Routes>
        </Router>
        {/* </ChakraProvider> */}

      </StoreProvider>
    </ApolloProvider>
  );
}

export default App;

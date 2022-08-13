import React from 'react';
import { Header } from '../components/Header';
import { ProfileCard } from '../components/ProfileCard';
import { ThoughtsPage } from '../components/ThoughtsPage';
import { Footer } from '../components/Footer';

// import Cart from '../components/Cart';

import Cart from '../components/Cart/Index';

import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* <Link rel="manifest" useHref="./manifest.json"></Link> */}
      <Header />
      <Cart />
      <ProfileCard />
      <ThoughtsPage />
      <Footer />
    </div>
  );
};

export default Home;

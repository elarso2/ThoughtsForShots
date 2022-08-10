import React from 'react';
import { Header } from '../components/Header';
import { ProfileCard } from '../components/ProfileCard';
import { ThoughtsPage } from '../components/ThoughtsPage';
import { Footer } from '../components/Footer';
// import Cart from '../components/Cart';

const Home = () => {
  return (
    <div>
      <Header /> 
      {/* <Cart /> */}
      <ProfileCard />
      <ThoughtsPage />
      <Footer />
    </div>
  );
};

export default Home;

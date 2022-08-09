import React from 'react';
import { Header } from '../components/Header';
import { ProfileCard } from '../components/ProfileCard';
import { ThoughtsPage } from '../components/ThoughtsPage';
import { Footer } from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <ProfileCard />
      <ThoughtsPage />
      <Footer />
    </div>
  );
};

export default Home;

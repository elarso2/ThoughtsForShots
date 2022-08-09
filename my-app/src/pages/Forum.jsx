import React from 'react';
import { Header } from '../components/Header';
import { ProfileCard } from '../components/ProfileCard';
import { ThoughtsPage } from '../components/ThoughtsPage';

const Home = () => {


  return (
    <div>
      <Header />
      <ProfileCard />
      <ThoughtsPage />
    </div>
  );
};

export default Home;

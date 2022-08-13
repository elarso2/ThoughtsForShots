import React from 'react';
import NavBar from '../components/NavBar';
import { Header } from '../components/Header';
import { ProfileCard } from '../components/ProfileCard';

import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div>
      {/* <Link rel="manifest" useHref="./manifest.json"></Link> */}
      <Header />
      <ProfileCard />
    </div>
  );
};

export default Profile;

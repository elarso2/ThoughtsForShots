import React, { useEffect } from 'react';
import Jumbotron from '../components/Jumbotron';

import { Link } from 'react-router-dom';

// Xavier to adjust mutations/constant names
function Success() {
  useEffect(() => {
    async function sendHome() {
      setTimeout(() => {
        window.location.assign('/');
      }, 3000);
    }
    sendHome();
  }, []);

  return (
    <div>
      {/* <Link rel="manifest" useHref="./manifest.json"></Link> */}
      <Jumbotron>
        <h1>Success!</h1>
        <h2>Thank you for your purchase!</h2>
        <h2>You will now be redirected to the home page</h2>
      </Jumbotron>
    </div>
  );
}

export default Success;

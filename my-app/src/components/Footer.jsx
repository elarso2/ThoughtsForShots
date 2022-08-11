import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export function Footer() {
  //   const location = useLocation();
  //   const navigate = useNavigate();
  return (
    <footer className="w-100 mt-auto bg-secondary p-4">
      <div className="container text-center mb-5">
        {/* {location.pathname !== '/' && (
          <button className="btn btn-dark mb-3" onClick={() => navigate(-1)}>
            &larr; Go Back
          </button>
        )} */}
        <h4>
          DISCLAIMER: By using this site you acknowledge that you are of legal
          drinking age. The Thoughts for Shots team does not encourage binge
          drinking or alcoholism. Please drink responsibly.
        </h4>
      </div>
    </footer>
  );
}

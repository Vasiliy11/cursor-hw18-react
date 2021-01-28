import React from 'react';
import './home.scss';

import BG from '../../assets/images/bg.jpg';

const Home = () => {
  return (
    <div className="homepage">
      <h1>Homepage</h1>
      <img src={BG} alt="background" />
    </div>
  );
};

export default Home;

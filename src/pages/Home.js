import React from 'react';
import './Home.css';
import BannerImage from '../assets/pizza.jpeg';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className='home' style={{ backgroundImage: `url(${BannerImage})`}}>
      <div className='headerContainer'>

        <h1>Felipe's Pizzaria</h1>
        <p>PIZZA TO FIT ANY TASTE</p>
        <Link to='/menu'>
          <button>ORDER NOW</button>
        </Link>
      </div>

    </div>
  );
}

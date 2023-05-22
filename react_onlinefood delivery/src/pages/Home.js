
import Food from '../images/food2.jpg'
import React from 'react'
import Layout from '../component/Layout';
import { Link } from 'react-router-dom';
import HomeStyle from '../styles/HomeStyle.css'
const Home = () => {
  return (
   
      <Layout>
        <div className="home" style={{ backgroundImage: `url(${Food})` }}>
          <div className="headerContainer">
            <h1>Online Food Service</h1>
            <p>Service with in 30 min</p>
            <Link to="/menu">
              <button>ORDER NOW</button>
            </Link>
          </div>
        </div>  
      </Layout>
    );
  
};

export default Home;

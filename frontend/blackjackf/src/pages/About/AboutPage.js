import React from 'react';
import './About.css'
import {aboutText1, aboutText2} from './storage'
import bottomBanner from '../../images/HandsBanner.jpg'

const AboutPage = () => {
  return (
    <div>
      <div className="top-container">
        <img className="banner" source src={require("../../images/blackjackBanner.jpeg").default}  alt="21"/>      
      </div>
      
        <div className='text-container'>
          <h1>---About---</h1>
          <h2>Try to reach 21 without exceeding it</h2>
          <h4>{aboutText1}</h4>
          <h4>{aboutText2}</h4>
        </div>
      <div className='bottom-container'>
        <img className='bottomBanner' source src ={bottomBanner} alt='21'/>
      </div>
      
    </div>
  );
};

export default AboutPage;
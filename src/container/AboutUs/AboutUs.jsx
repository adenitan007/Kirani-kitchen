import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className="app__aboutus-overlay flex__center">
      {/* <img src={images.} alt="letter" /> */}
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about__spoon" className='spoon__img' />
        <p className="p_opensans">Welcome to Kirani's Kitchen, where local heritage flavors every dish. We're dedicated to showcasing the tastes and traditions that define our community. Join us in savoring the stories on every plate."</p>
        <button type='button' className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about__spoon" className='spoon__img' />
        <p className="p_opensans">Since 2017, Kirani Kitchen has been a culinary cornerstone in Lagos, proudly serving local heritage and flavors. Our journey is a tribute to the traditions and tastes that define our community. Join us in savoring history on every plate.""</p>
        <button type='button' className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;

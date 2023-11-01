import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">"As the heart and soul of our kitchen, I strive to create an unforgettable culinary journey that tantalizes the senses and nourishes the spirit. Join me on this flavorful adventure.".</p>
        </div>
        <p className="p__opensans"> we believe in crafting more than just meals; we craft moments that resonate with passion, creativity, and the joy of sharing. Our culinary artistry is a testament to our commitment to excellence and the love we pour into every dish." </p>
      </div>

      <div className="app__chef-sign">
        <p>Saadat Aro-Lambo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
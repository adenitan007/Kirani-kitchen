import React from 'react';
import {images} from '../../constants';
import {subHeading} from '../../constants'

import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <subHeading title="Chef's Word" />
      <h1 className="headtext_cormorant">What we believe in</h1>
    </div>
  </div>
);

export default Chef;

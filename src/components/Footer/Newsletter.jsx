import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant">"subscribe to our newsletter and be the first to know!"</h1>
      <p className="p__opensans">"Don't miss out on exclusive updates and exciting offers!"</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder=" email address" />
      <button type="button" className="custom__button">Subscribe</button>
    </div>
  </div>
);

export default Newsletter;

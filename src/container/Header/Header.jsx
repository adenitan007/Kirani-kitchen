import React from 'react';
import { images } from '../../constants';
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id="home">
    <div className="app__wrapper_info">
      <SubHeading title='Savoring Every Bite,' />
      <h1 className="app__header-h1">" Creating Lasting Delights"</h1>      <p className="p__opensans" style={{ margin: '2rem 0' }}>Our culinary passion transforms every dish into a work of art, inviting you to experience the finest in dining. With every bite, we craft not just flavors, but moments to savor, stories to share, and memories to cherish. Join us in this gastronomic journey, where we redefine the art of fine dining one plate at a time."</p>
      <button type="button" className="custom__button">Explore Menu</button>

    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;

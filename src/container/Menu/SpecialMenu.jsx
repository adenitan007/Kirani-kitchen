import React from 'react';
import { images, data } from '../../constants';
import { SubHeading, MenuItem } from '../../components';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu' >
    <div className="app__specialMenu-title">
      <subHeading title='Menu that fits your taste' />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>


    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_special_soup  flex__center">
        <p className="app__specialMenu-menu_heading">specials & soups</p>
        <div className="app__specialMenu_menu_items">
          {data.special_soups.map((special_soup, index) => (
            <MenuItem key={special_soup.title + index} title={special_soup.title} price={special_soup.price} tags={special_soup.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_Protein_Pasta  flex__center">
        <p className="app__specialMenu-menu_heading">Protein & Pasta</p>
        <div className="app__specialMenu_menu_items">
          {data.Protein_Pasta.map((Protein_Pasta, index) => (
            <MenuItem key={Protein_Pasta.title + index} title={Protein_Pasta.title} price={Protein_Pasta.price} tags={Protein_Pasta.tags} />
          ))}
        </div>
      </div>
    </div>
    <div style={{ marginTop: '15px' }}>
      <button type='button' className='custom__button'>View More</button>
    </div>
  </div>
);

export default SpecialMenu;

import React from 'react';
import { images, data } from '../../constants';
import { SubHeading, MenuItem } from '../../components';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu' >
    <div className="app__specialMenu-title">
      <SubHeading title='Menu that fits your taste' />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>


    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_special_soup  flex__center">
        <p className="app__specialMenu-menu_heading">specials & soups</p>
        <div className="app__specialMenu_menu_items">
          {data.SpecialSoup.map((SpecialSoup, index) => (
            <MenuItem key={SpecialSoup.title + index} title={SpecialSoup.title} price={SpecialSoup.price} tags={SpecialSoup.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_ProteinPasta  flex__center">
        <p className="app__specialMenu-menu_heading">Protein & Pasta</p>
        <div className="app__specialMenu_menu_items">
          {data.ProteinPasta.map((ProteinPasta, index) => (
            <MenuItem key={ProteinPasta.title + index} title={ProteinPasta.title} price={ProteinPasta.price} tags={ProteinPasta.tags} />
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

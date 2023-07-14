import React, { useState } from 'react'
import './Style.css'
import Menu from './MenuApi.js'
import Mcard from './Mcard'
const Restaurant = () => {

    const [menuData, setMenuData] = React.useState(Menu);
    console.log(menuData);

  return (
  <>
    <Mcard  menuData={menuData}/>
  </>
  );
  
};

export default Restaurant

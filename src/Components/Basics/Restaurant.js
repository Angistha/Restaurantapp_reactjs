import React, { useState } from 'react'
import './Style.css'
import Menu from './MenuApi.js'
import Mcard from './Mcard'
import Navbar from './Navbar'


const uniqueList = [
  ...new Set(
    Menu.map((curElem)=>{
      return curElem.category;
    })
  ),"All"
];

console.log(uniqueList);

const Restaurant = () => {

    const [menuData, setMenuData] = useState(Menu);
    const [menulist, setMenuList] = useState(uniqueList);


    const filterItem = (category) => {
      if (category === "All"){
        setMenuData(Menu);
        return;
      }

    const updatedList = Menu.filter((curElem)=>{
      return curElem.category === category;
    });

      setMenuData(updatedList);
  };

  return (
  <>
    <Navbar filterItem={filterItem} menulist={menulist}/>
    <Mcard  menuData={menuData}/>
  </>
  );
  
};

export default Restaurant

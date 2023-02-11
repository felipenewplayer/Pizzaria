import React from 'react';
import { MenuItem } from '../components/MenuItem.js';
import { MenuList } from '../helpers/MenuList.js';
import './Menu.css'

export const Menu = () => {
  return (
    <div className='menu'>
      <h1 className='menuTitle'>Our Menu</h1>
      <div className='menuList'>
      {MenuList.map((menuitem, i) =>{
        return <MenuItem 
        key = {i}
        name = {menuitem.name} 
        image = {menuitem.image} 
        price = {menuitem.price}/>
      })}
      </div>
    </div>
  )
}

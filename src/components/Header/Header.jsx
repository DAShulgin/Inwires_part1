import React from 'react';
import style from './Header.module.css'
import notAvatar  from '../../img/notAvatar.png'
import logo  from '../../img/logoMain.png'
import { NavLink } from 'react-router-dom';

const Header = (props) => {
debugger
    return ( <div className = {style.headBlok}>
        
        <div className = {style.Logo} >
     <img src = {logo} />
        </div>
        <div  className = {style.AvatarName}>   
         <div  className = {style.Name}>
             { props.isAuth == true ? props.login :<NavLink to = '/login'>ВОЙТИ</NavLink> }
         </div>
         <div  className = {style.Avatar}>
         <img src = {notAvatar} />
         </div>
        </div>
</div>
    )
}

export default Header;
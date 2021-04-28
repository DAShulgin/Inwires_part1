import React from 'react';
import style from './Header.module.css'
import notAvatar  from '../../img/notAvatar.png'
import logo  from '../../img/logoMain.png'
import { NavLink, Redirect } from 'react-router-dom';
import exit from '../../img/exit.png'

const Header = (props) => { 

    return ( <div className = {style.headBlok}>
        
        <div className = {style.Logo} >
     <img src = {logo} alt = 'logo'/>
        </div>
        <div  className = {style.AvatarName}>   
         <div  className = {style.Name}>
             { props.isAuth === true ? props.login :<NavLink to = '/login'>ВОЙТИ</NavLink> }
         </div>
         <div  className = {style.Avatar}>
         <img src = {notAvatar} />
         </div>
         { props.isAuth
         ? <div className = {style.exit}><img src = {exit} onClick = { props.LogOUT } title= "Выход"/></div>
         :  <Redirect to={'/login'} />
        
         }
        </div>
</div>
    )
}

export default Header;
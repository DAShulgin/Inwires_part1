import React from 'react';
import style from './OneUser.module.css'
import notAvatar from '../../../img//notAvatar.png'




const OneUser = (props) => {

    return  <div className={style.userBlok}>

                <div className={style.AvatarBlok}>
                 <img src = {props.Avatar} />
                 </div>

                 <div className={style.SubscribBlok}>
                  { props.followed
                 ? <button onClick = { () => {props.unfollow(props.id)} }>Отписаться</button> 
                 : <button onClick = { () => {props.follow(props.id)} }>Подписаться</button>
                  } 
                </div>


            <div className = {style.InfoBlok}>
                <div> {props.Name}</div>
                <div> {props.Status}</div>
            </div>

             <div className =  {style.LoctionBlok}>
                <div> {props.location.country}</div>
                <div> {props.location.city}</div>
            </div>


        </div>
    
}

export default OneUser;
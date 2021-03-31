import React from 'react';
import style from './OneUser.module.css'
import notAvatar from '../../../img//notAvatar.png'
import { NavLink } from 'react-router-dom';


const OneUser = (props) => {


    return <div className={style.userBlok}>

        <div className={style.AvatarBlok}>

            <NavLink to={'/profile/' + props.id}>
                <img src={props.photos.small != null ? props.photos.small : notAvatar} />
            </NavLink>

        </div>

        <div className={style.SubscribBlok}>
            {props.followed
                ? <button disabled={props.followingInProgress.some(id => id === props.id)}
                    onClick={() => { props.unfollow(props.id); }}> Отписаться</button>

                : <button disabled={props.followingInProgress.some(id => id === props.id)}
                    onClick={() => { props.follow(props.id); }}>Подписаться</button>
            }
        </div>


        <div className={style.InfoBlok}>
            <div> {props.name}</div>
            <div> {props.status}</div>
        </div>

        <div className={style.LoctionBlok}>
            <div> props.location.country</div>
            <div> props.location.city</div>
        </div>


    </div>

}

export default OneUser;
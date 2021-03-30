import React from 'react';
import style from './OneUser.module.css'
import notAvatar from '../../../img//notAvatar.png'
import { NavLink } from 'react-router-dom';
import axios from 'axios';



const OneUser = (props) => {


    return <div className={style.userBlok}>

        <div className={style.AvatarBlok}>

            <NavLink to={'/profile/' + props.id}>
                <img src={props.photos.small != null ? props.photos.small : notAvatar} />
            </NavLink>

        </div>

        <div className={style.SubscribBlok}>
            {props.followed
                ? <button onClick={() => {

                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,  {
                        withCredentials: true,
                        headers: {
                         'API-KEY': 'f0dba38f-8189-437a-b39d-e6e384de2e19' }
                    }).then(responce => {
                        if (responce.data.resultCode == 0) {
                            props.unfollow(props.id);
                        }
                    });
                }}> Отписаться</button>

                : <button onClick={() => {

                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {}, {
                        withCredentials: true,
                        headers: {
                            'API-KEY': 'f0dba38f-8189-437a-b39d-e6e384de2e19' }
                    }).then(responce => {
                        if (responce.data.resultCode == 0) {
                            props.follow(props.id);
                        }
                    });
                }}>Подписаться</button>
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
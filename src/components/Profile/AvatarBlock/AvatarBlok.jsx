import React from 'react';
import notAvatar from '../../../img/notAvatar.png';
import style from './AvatarBlok.module.css';


const AvatarBlok = (props) => {

    return <div className={style.locBlok}>
        <div>
            <img src={props.photos != null ? props.photos : notAvatar } />
        </div>
        <div><button>Загрузить</button></div>
    </div>
}

export default AvatarBlok;
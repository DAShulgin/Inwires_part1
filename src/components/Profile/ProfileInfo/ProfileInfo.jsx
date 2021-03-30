import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import style from './ProfileInfo.module.css';


const ProfileInfo = (props) => {



    return <div className={style.ProfileInfo}>
        <div className={style.fullName}>{props.fullName}</div>
        <div><b>Статус: </b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores aperiam consequuntur inventore cumque deserunt odit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores aperiam</div>
        <div><b>Коротко о бо мне: </b>{props.aboutMe}</div>
        <div><b>Ищу работу: </b> {props.lookingForAJob == true ? 'Да' : 'Нет'}</div>
        <div>
            <b>Мои профессиональные навыки:</b> {props.lookingForAJobDescription}
        </div>
        <div> <b>Контакты:  </b>
            {Object.keys(props.contacts).map(k => { return <div>{k}: {props.contacts[k]}</div>  })}
        </div>

    </div>
}

export default ProfileInfo;

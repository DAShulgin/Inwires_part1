import React from 'react';
import style from './ProfileInfo.module.css';
import Status from './Status/Status';


const ProfileInfo = (props) => {

    return <div className={style.ProfileInfo}>
        <div className={style.fullName}>{props.fullName}</div>
        <Status status = {'OOOOOoooooooooooOOOO'} />
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

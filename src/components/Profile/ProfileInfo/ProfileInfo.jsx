import React, { useState } from 'react';
import style from './ProfileInfo.module.css';
import StatusWithHooks from './Status/StatusWithHooks';
import Contact from './Contact/Contact';
import InfoDataReduxForm from './ProfileInfoDataForm';

const ProfileInfo = ({ profile, status, updateStatus, isOwner, saveProfile }) => {

    let [editMode, SetEditMode] = useState(false);

    const onSubmit = (formData) => {
    saveProfile(formData).then( 
         ()=> { 
         SetEditMode(false);
        });
     }
 

    return <div className={style.ProfileInfo}>
        <div className={style.fullName}>{profile.fullName}</div>
        <StatusWithHooks status={status} updateStatus={updateStatus} />
        {editMode
            ? <InfoDataReduxForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
            : <ProfileInfoData profile={profile} isOwner={isOwner} activeteEditMode={()=>{ SetEditMode(true)}} />
        }
    </div>
}

const ProfileInfoData = ({ profile: { aboutMe, lookingForAJob, lookingForAJobDescription, contacts }, isOwner, activeteEditMode }) => {
    return <>
        {isOwner && <button onClick={activeteEditMode}>...Редактировать</button>}
        <div><b>Коротко о бо мне:</b> {aboutMe} </div>

        <div><b>Ищу работу: </b> {lookingForAJob === true ? 'Да' : 'Нет'}</div>
        <div>
            <b>Мои профессиональные навыки:</b> {lookingForAJobDescription}
        </div>
        <div><b>Контакты:</b>
            {Object.keys(contacts).map(key => { return <Contact key={key} contactTitle={key} contactValue={contacts[key]} /> })}
        </div>
    </>
}



export default ProfileInfo;


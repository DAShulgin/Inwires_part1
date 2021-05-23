import React from 'react';
import { reduxForm } from 'redux-form';
import { createField, Input, TextArea } from '../../common/FormControls/FormControls';
import style from '../../Login/Login.module.css'


const ProfileInfoDataForm = ({ handleSubmit, profile, error }) => {

    return <form onSubmit={handleSubmit} >
        <div><b>Полное имя:</b>{createField('fullName', Input, 'Введите Полное имя', [])} </div>
        <div><b>Коротко о бо мне:</b> {createField('aboutMe', TextArea, 'Введите данные о себе', [])} </div>
        <div><b>Ищу работу: </b> {createField('lookingForAJob', Input, '', [], { type: 'checkbox' })} </div>
        <div><b>Мои профессиональные навыки:</b>{createField('lookingForAJobDescription', TextArea, 'Введите профессиональные навыки:')}
        </div>
        <div><b>Контакты:</b>
            {Object.keys(profile.contacts).map(key => { return <div key={key}> <b>{key}:</b> {createField('contacts.'+ key, Input, key)}  </div> })}
        </div>
        {error && <div className={style.formSummaryError}>{error}</div>}
        <button>Сохранить</button>
    </form>
}

const InfoDataReduxForm = reduxForm({ form: 'EditeProfile' })(ProfileInfoDataForm);

export default InfoDataReduxForm;
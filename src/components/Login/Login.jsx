import React from 'react';
import { reduxForm } from 'redux-form';
import style from './Login.module.css';
import { createField, Input } from '../common/FormControls/FormControls';
import { required } from '../../utils/validators/validators';
import { Redirect } from 'react-router';


const Captha = ({ captchaUrl }) => {

    return <>
        { captchaUrl && <div className = {style.captcha}>
        <img src={captchaUrl} />
        { createField('captcha', Input, 'Введите символы с картинки', [required]) }
        </div>
        }
    </>
}

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
    return <div className={style.LoginForm}>
        <form onSubmit={handleSubmit} >
            <div className={style.block1}>
                {createField('email', Input, 'Email', [required])}
                {createField('password', Input, 'Пароль', [required], { type: 'password' })}
            </div>
            {createField('rememberMe', Input, null, [], { type: 'checkbox' }, 'Запомнить')}
            {error && <div className={style.formSummaryError}>{error}</div>}
            <Captha captchaUrl={captchaUrl} />
            <div><button>Вход</button></div>
        </form>
    </div>
}

const LoginReduxForm = reduxForm({ form: 'Login' })(LoginForm);

const Login = (props) => {

    const onSubmit = (formData) => {
        props.LogIN(
            formData.email,
            formData.password,
            formData.rememberMe,
            formData.captcha
        );
    }

    if (props.isAuth) {
        props.getProfile(props.userId);
        return <Redirect to='/profile' />
    }

    return <>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </>
}

export default Login;

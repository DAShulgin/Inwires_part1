import React from 'react';
import { reduxForm } from 'redux-form';
import style from './Login.module.css';
import { createField, Input } from '../common/FormControls/FormControls';
import { required } from '../../utils/validators/validators';
import { Redirect } from 'react-router';

const LoginForm = ({ handleSubmit, error }) => {
    return <div className={style.LoginForm}>
        <form onSubmit={handleSubmit} >
            <div className={style.block1}>
            {createField('email', Input, 'Email', [required])}
            {createField('password', Input, 'Пароль', [required], { type: 'password' })}
            </div>
            {createField('rememberMe', Input, null, [], { type: 'checkbox' }, 'Запомнить')}
            {error && <div className={style.formSummaryError}>{error}</div>}
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
        );
    }

    if (props.isAuth) {
        return <Redirect to='/profile' />
    }
    return <>
        <LoginReduxForm onSubmit={onSubmit} />
    </>
}

export default Login;

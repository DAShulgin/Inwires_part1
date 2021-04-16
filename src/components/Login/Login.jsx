import React from 'react';
import { Field, reduxForm } from 'redux-form';
import style from './Login.module.css';
import { Input } from '../common/FormControls/FormControls';
import { required } from '../../utils/validators/validators';
import { Redirect } from 'react-router';

const LoginForm = ({ handleSubmit }) => {
    return <div className={style.LoginForm}>
        <form onSubmit={handleSubmit} >
            <div className={style.block1}>
                <div>
                    <Field name={'email'} component={Input} placeholder={'Email'} validate={required} />
                </div>
                <div>
                    <Field name={'password'} component={Input} placeholder={'Пароль'} validate={required} type = 'password' />
                </div>
            </div>
            <div>
                <Field name={'rememberMe'} component='input' type={'checkbox'} />Запомнить
            </div>
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

    if(props.isAuth) {
        return <Redirect to = '/profile' />
    }
    return <>
        <LoginReduxForm onSubmit={onSubmit} />
    </>
}

export default Login;
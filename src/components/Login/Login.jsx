import React from 'react';
import { Field, reduxForm } from 'redux-form';
import style from './Login.module.css';


const LoginForm = ({ handleSubmit }) => {
    return <div className={style.LoginForm}>
        <form onSubmit={handleSubmit} >
            <div className={style.block1}>
                <div>
                    <Field name={'login'} component={'input'} placeholder={'Логин'} />
                </div>
                <div>
                    <Field name={'password'} component={'input'} placeholder={'Пароль'} />
                </div>
            </div>
            <div>
                <Field name={'rememberMe'} component={'input'} type={'checkbox'} />Запомнить
            </div>
            <div><button>Вход</button></div>
        </form>
    </div>
}

const LoginReduxForm = reduxForm({ form: 'Login' })(LoginForm);

const Login = () => {

    const onSubmit = (formData) => {
        console.log(formData);
    }

    return <>
        <LoginReduxForm onSubmit={onSubmit} />
    </>
}


export default Login;
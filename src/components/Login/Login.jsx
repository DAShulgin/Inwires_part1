import React from 'react';
import { Field, reduxForm } from 'redux-form';
import style from './Login.module.css';
import {Input} from '../common/FormControls/FormControls';
import {required} from '../../utils/validators/validators';


const LoginForm = ({ handleSubmit }) => {
    return <div className={style.LoginForm}>
        <form onSubmit={handleSubmit} >
            <div className={style.block1}>
                <div>
                    <Field name={'login'} component={Input} placeholder={'Логин'} validate = {required} />
                </div>
                <div>
                    <Field name={'password'} component={Input} placeholder={'Пароль'} validate = {required} />
                </div>
            </div>
            <div>
                <Field name={'rememberMe'} component={Input} type={'checkbox'} />Запомнить
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
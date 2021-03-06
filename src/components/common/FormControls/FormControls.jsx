import React from 'react';
import { Field } from 'redux-form';
import style from './FormControls.module.css'

const FormControl = ({ meta: {touched, error}, children }) => {

    const hasError = touched && error;

    return (<div className={style.formControl + ' ' + (hasError ? style.error : ' ')}>
        <div>
            {children}
        </div>
        { hasError && <span>{error}</span>}

    </div>
    )
}

export const TextArea = (props) => {
    const { input, meta, child, ...restProps } = props;
    return <FormControl {...props} > <textarea {...input} {...restProps} /> </FormControl>
}

export const Input = (props) => {
    const { input, meta, child, ...restProps } = props;
    return <FormControl {...props} > <input {...input} {...restProps} /> </FormControl>
}

export const createField = (name, component, placeholder, validators, props = {}, text = '') => (
       <span className = {style.line}><Field
            name={name}
            component={component}
            placeholder={placeholder}
            validate={validators}
            {...props} /> <span>{text}</span>
       </span>      
)
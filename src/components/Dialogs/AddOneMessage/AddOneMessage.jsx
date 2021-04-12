import React from 'react';
import { Field, reduxForm } from 'redux-form';

const AddOneMessageForm = ({ handleSubmit }) => {

    return <div>

        <form onSubmit={handleSubmit} >
            <div>
                <Field name= 'NewMessageText' component= 'textarea' placeholder= 'Введите сообщение' />
            </div>
            <div><button>Добавить</button></div>
        </form>
    </div>
}

const AddOneMessageReduxForm = reduxForm({ form: 'AddOneMessage' })(AddOneMessageForm);

const AddOneMessage = (props) => {


    const addNewMessage = (value) => {
        props.NewMessage(value.NewMessageText);
    }

    return <>
        <AddOneMessageReduxForm onSubmit={addNewMessage} />
    </>
}

export default AddOneMessage;

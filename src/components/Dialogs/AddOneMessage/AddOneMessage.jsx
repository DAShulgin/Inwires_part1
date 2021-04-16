import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {required, maxLengthCreator } from '../../../utils/validators/validators';
import  {TextArea} from '../../common/FormControls/FormControls';



const maxLength10 = maxLengthCreator(10);

const AddOneMessageForm = ({ handleSubmit }) => {

    return <div>

        <form onSubmit={handleSubmit} >
            <div>
                <Field name= 'NewMessageText' component= {TextArea} placeholder= 'Введите сообщение' validate = { [required, maxLength10 ]}/>
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

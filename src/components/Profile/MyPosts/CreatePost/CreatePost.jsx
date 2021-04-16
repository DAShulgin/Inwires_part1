import React from 'react';
import style from './CreatePost.module.css';
import { Field, reduxForm } from 'redux-form';
import {TextArea} from '../../../common/FormControls/FormControls';
import {required, maxLengthCreator } from '../../../../utils/validators/validators';


const maxLength10 = maxLengthCreator(10);

const AddPostForm = ({ handleSubmit }) => {

    return <div className={style.addPost} >

        <form onSubmit={handleSubmit}>

            <div>Добавить Пост</div>
            <div>
                <Field name='NewPostText' component={TextArea} placeholder='Введите текст поста' validate = { [required, maxLength10 ]}/>
            </div>
            <div className={style.btnStyle}>
                <button>Добавить</button></div>

        </form>

    </div>
}

const AddPostFormReduxForm = reduxForm({ form: 'AddPostForm' })(AddPostForm);


const CreatePost = (props) => {

    const addNewPost = (value) => {
        props.addPost(value.NewPostText);
    }

    return <>
        <AddPostFormReduxForm onSubmit={addNewPost} />
    </>
}

export default CreatePost;
import React from 'react';
import style from './CreatePost.module.css';
import { Field, reduxForm } from 'redux-form';



const AddPostForm = ({ handleSubmit }) => {

    return <div className={style.addPost} >

        <form onSubmit={handleSubmit}>

            <div>Добавить Пост</div>
            <div>
                <Field name='NewPostText' component='textarea' placeholder='Введите текст поста' />
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
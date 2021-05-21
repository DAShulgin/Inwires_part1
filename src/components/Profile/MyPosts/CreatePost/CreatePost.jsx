import React, { useState } from 'react';
import style from './CreatePost.module.css';
import { Field, reduxForm } from 'redux-form';
import { TextArea } from '../../../common/FormControls/FormControls';
import { required, maxLengthCreator } from '../../../../utils/validators/validators';


const maxLength255 = maxLengthCreator(255);

const AddPostForm = ({ handleSubmit }) => {

    return <div className={style.addPost} >

        <form onSubmit={handleSubmit}>
            <div>
                <Field autoFocus={true}  name='NewPostText' component={TextArea} placeholder='Введите текст поста' validate={[required, maxLength255]} />
                <div className={style.btnStyle}>
                    <button>Опубликовать</button></div>
            </div>
        </form>
    </div>
}

const AddPostFormReduxForm = reduxForm({ form: 'AddPostForm' })(AddPostForm);


const CreatePost = (props) => {

    let [editMode, SetEditMode] = useState(false);

    let activeteEditMode = () => {
        SetEditMode(true)
    };

    let deactiveteEditMode = () => {
        SetEditMode(false);
    };

    const addNewPost = (value) => {
        props.addPost(value.NewPostText);
        deactiveteEditMode();
    }

    return <div className = {style.Osn}>
        {!editMode && <div className = {style.CreatePost} title='Создать Пост' onDoubleClick={activeteEditMode} ><span>Создать Пост</span></div>  }
        {editMode && <AddPostFormReduxForm  onSubmit={addNewPost} />  }
    </div>
}

export default CreatePost;
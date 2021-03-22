import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../Redux/profile-reducer';
import style from './CreatePost.module.css'




const CreatePost = (props) => {

    let newPostElement = React.createRef();

    let NewPostAdd = () => {
     props.dispatch(addPostActionCreator());
    }

   let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
   }

    return <div className={style.addPost} >
        <div>Добавить Пост</div>
        <div>
            <textarea onChange = {onPostChange} ref={newPostElement}  value = {props.NewPostText}/>
        </div>
        <div className={style.btnStyle}>
            <button onClick={NewPostAdd}>Добавить</button></div>
    </div>
}

export default CreatePost;
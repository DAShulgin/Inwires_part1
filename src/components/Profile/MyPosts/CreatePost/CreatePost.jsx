import React from 'react';
import style from './CreatePost.module.css'


const CreatePost = (props) => {

    let newPostElement = React.createRef();

    let NewPostAdd = () => {
        props.AddPost(newPostElement.current.value);
        newPostElement.current.value = '';
    }


    return <div className={style.addPost} >
        <div>Добавить Пост</div>
        <div>
            <textarea ref={newPostElement} />
        </div>
        <div className={style.btnStyle}>
            <button onClick={NewPostAdd}>Добавить</button></div>
    </div>
}

export default CreatePost;
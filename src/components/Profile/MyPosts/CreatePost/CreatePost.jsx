import React from 'react';
import style from './CreatePost.module.css'


const CreatePost = () => {

    return <div className = {style.addPost} >
         <div>Добавить Пост</div>
        <div><textarea></textarea></div>
        <div className = {style.btnStyle}><button>Добавить</button></div>
    </div>
}

export default CreatePost;
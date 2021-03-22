import React from 'react';
import style from './CreatePost.module.css'


const CreatePost = (props) => {

  
    let newPostElement = React.createRef();

    let onAddPost = () => {
    props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updatePost(text);
    }


    return <div className={style.addPost} >
        <div>Добавить Пост</div>
        <div>
            <textarea onChange={onPostChange} ref={newPostElement} value={props.NewPostText} />
        </div>
        <div className={style.btnStyle}>
            <button onClick={onAddPost}>Добавить</button></div>
    </div>
}

export default CreatePost;
import React from 'react';
import style from './Post.module.css'
import notAvatar from '../../../../img/notAvatar.png'
import Like from '../Like/Like';

const Post = (props) => {

    return <div>
        <div className={style.item}>
            <img src={notAvatar} />
            <div className={style.textPost}> {props.text}</div>
        </div>
        <Like like={props.like} />
    </div>
}
export default Post;


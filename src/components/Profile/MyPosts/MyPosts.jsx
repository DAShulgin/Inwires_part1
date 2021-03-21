import React from 'react';
import style from './MyPosts.module.css';
import CreatePost from './CreatePost/CreatePost';
import Post from './OnePost/Post';


const MyPosts = (props) => {

    let posts = props.profilePage.posts;

    let PostItems = posts.map(p => <Post key={p.id} text={p.text} like={p.like} />);

    return <div>
        <div className={style.myPosts}>
            <CreatePost 
                NewPostText={props.profilePage.NewPostText}
                dispatch = {props.dispatch}  />
            <div>Мои посты</div>
            {PostItems}
        </div>
    </div>
}

export default MyPosts;

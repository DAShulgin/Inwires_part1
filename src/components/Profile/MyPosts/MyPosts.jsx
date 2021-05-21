import React from 'react';
import style from './MyPosts.module.css';
import CreatePost from './CreatePost/CreatePost';
import Post from './OnePost/Post';


const MyPosts = (props) => {

    let PostItems = props.posts.map(p => <Post key={p.id} text={p.text} like={p.like} />);

    return <div>
        <div className={style.myPosts}>
            <CreatePost
                NewPostText={props.NewPostText}
                addPost={props.addPost}
                updatePost={props.updatePost} />
            <div className={style.Osn}>
             <div className = {style.MyPostsText}>Мои посты</div>
            {PostItems}
            </div>
        </div>
    </div>
}

export default MyPosts;

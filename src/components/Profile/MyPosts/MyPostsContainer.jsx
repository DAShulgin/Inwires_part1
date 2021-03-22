import React from 'react';
import MyPosts from './MyPosts';
import { addPostAC, updateNewPostTextAC } from '../../../Redux/profile-reducer';


const MyPostsContainer = (props) => {

   let profilePage = props.store.getState().profilePage;

    let addPost = () => {
        props.store.dispatch(addPostAC());
    }

    let updatePost = (text) => {
        props.store.dispatch(updateNewPostTextAC(text));
    }

    return <MyPosts
        addPost={addPost}
        updatePost={updatePost}
        posts={profilePage.posts}
        NewPostText={profilePage.NewPostText} />
}

export default MyPostsContainer;

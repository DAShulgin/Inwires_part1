import React from 'react';
import MyPosts from './MyPosts';
import { addPostAC, updateNewPostTextAC } from '../../../Redux/profile-reducer';
import { connect } from 'react-redux';



let mapStateToProps = (state) => {
    return { 
        posts: state.profilePage.posts,
        NewPostText: state.profilePage.NewPostText
    }
}

let mapStateDispatchToProps = (dispatch) => {
    return {
        addPost: () => {dispatch(addPostAC()) },
        updatePost: (text) => {dispatch(updateNewPostTextAC(text)); }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapStateDispatchToProps)(MyPosts);


export default MyPostsContainer;

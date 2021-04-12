import React from 'react';
import MyPosts from './MyPosts';
import { addPostAC } from '../../../Redux/profile-reducer';
import { connect } from 'react-redux';



let mapStateToProps = (state) => {
    return { 
        posts: state.profilePage.posts,
    }
}

let mapStateDispatchToProps = (dispatch) => {
    return {
        addPost: (text) => {dispatch(addPostAC(text)) },
      
    }
}

const MyPostsContainer = connect(mapStateToProps, mapStateDispatchToProps)(MyPosts);


export default MyPostsContainer;

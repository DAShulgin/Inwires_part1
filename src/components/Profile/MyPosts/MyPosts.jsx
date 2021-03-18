import React from 'react';
import Post from './OnePost/Post';


const MyPosts = (props) => {

    return <div>   
        <div>
            <div><textarea></textarea></div>
            <div><button>Добавить</button></div>
        </div>

       <Post  text = 'Lorem ipsum dolor sit amet.' like = '15' />
       <Post  text = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, dicta!' like = '2' />
       <Post  text = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.' like = '35' />
    </div>
}

export default MyPosts;

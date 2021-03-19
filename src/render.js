import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AddPost, updateNewPostText } from './State';


export let rerenderEntireTree = (State) => {
    ReactDOM.render(
        <React.StrictMode>
            <App State={State} AddPost={AddPost} updateNewPostText = {updateNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}



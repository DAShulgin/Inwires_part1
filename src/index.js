import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import State,{ AddPost, subscribe, updateNewPostText } from './State';
import reportWebVitals from './reportWebVitals';



 let rerenderEntireTree = (State) => {
    ReactDOM.render(
        <React.StrictMode>
            <App State={State} AddPost={AddPost} updateNewPostText = {updateNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireTree(State);
subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
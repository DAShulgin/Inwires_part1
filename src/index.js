import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Store from './State';
import reportWebVitals from './reportWebVitals';



 let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App State = {Store.getState()} 
            AddPost={Store.AddPost.bind(Store)} 
            updateNewPostText = {Store.updateNewPostText.bind(Store)} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireTree(Store.getState());
Store.subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
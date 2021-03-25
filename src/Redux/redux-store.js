import {combineReducers, createStore} from 'redux';
import profileReducer from './profile-reducer';
import dialogReducer from './dialog-reducer';
import userReducer from './users-reducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    usersPage: userReducer
});

let store = createStore(reducers);

window.store = store;

export default store;
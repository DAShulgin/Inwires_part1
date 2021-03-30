import {combineReducers, createStore} from 'redux';
import profileReducer from './profile-reducer';
import dialogReducer from './dialog-reducer';
import userReducer from './users-reducer';
import authReducer from './authorization-reducer';
import toggleReducer from './toggle-reducer';


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    usersPage: userReducer,
    auth: authReducer,
    toggle: toggleReducer
});

let store = createStore(reducers);

window.store = store;

export default store;
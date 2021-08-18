import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import profileReducer from './profile-reducer';
import dialogReducer from './dialog-reducer';
import userReducer from './users-reducer';
import authReducer from './authorization-reducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import appReducer from './app-reducer';


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    usersPage: userReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
});

 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.store = store;

export default store;
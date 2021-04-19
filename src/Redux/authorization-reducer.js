import { stopSubmit } from "redux-form";
import { AuthorizationAPI } from "../API/api";

const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};


const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER_DATA:

            return {
                ...state,
                ...action.payload,
            };

        default:
            return state;
    }

}

export const SetAuthUserData = (userId, login, email, isAuth) => ({ type: SET_USER_DATA, payload: { userId, login, email, isAuth } });

export const getAuthUserData  = () => {
    return (dispatch) => {
        AuthorizationAPI.getAuth().then(data => {
            if (data.resultCode === 0) {
                let { id, login, email } = data.data;
                dispatch(SetAuthUserData(id, login, email, true));
            }
        });
    }
}

export const LogIN = (email, password, rememberMe) => {

    return (dispatch) => {
        AuthorizationAPI.authIN(email, password, rememberMe).then(data => {
            if (data.resultCode === 0) {
                dispatch(getAuthUserData())
            }
            else {
                let message = data.messages.length > 0 ? data.messages[0] : 'Что-то пошло не так...';
                dispatch(stopSubmit('Login', {_error: message}));
            }
        });
    }
}

export const LogOUT = () => {
    debugger;
    return (dispatch) => {
        AuthorizationAPI.authOUT().then(data => {
            if (data.resultCode === 0) {
                dispatch(SetAuthUserData(null, null, null, false ))

            }
        });
    }
}



export default authReducer;
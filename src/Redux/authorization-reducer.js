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

export const getAuthUserData = () => async (dispatch) => {
    let responce = await AuthorizationAPI.getAuth();
    if (responce.resultCode === 0) {
        let { id, login, email } = responce.data;
        dispatch(SetAuthUserData(id, login, email, true));
    }
};

export const LogIN = (email, password, rememberMe) => async (dispatch) => {
    let responce = await AuthorizationAPI.authIN(email, password, rememberMe);
    if (responce.resultCode === 0) {
        dispatch(getAuthUserData())
    }
    else {
        let message = responce.messages.length > 0 ? responce.messages[0] : 'Что-то пошло не так...';
        dispatch(stopSubmit('Login', { _error: message }));
    }
};

export const LogOUT = () => async (dispatch) => {
    let responce = await AuthorizationAPI.authOUT();
    if (responce.resultCode === 0) {
        dispatch(SetAuthUserData(null, null, null, false))

    }
};

export default authReducer;
import { stopSubmit } from "redux-form";
import { AuthorizationAPI, ProfileAPI, SecurityAPI } from "../API/api";

const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';
const SET_USERS_PROFILE = 'SET-USERS-PROFILE';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    profile: null,
};


const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS: 

            return {
                ...state,
                ...action.payload,
            };
            case SET_USERS_PROFILE: {
                return {...state, profile: action.profile }
            }
     
        default:
            return state;
    }

}

export const SetAuthUserData = (userId, login, email, isAuth) => ({ type: SET_USER_DATA, payload: { userId, login, email, isAuth } });
export const GetCaptchaUrlSuccess = (captchaUrl) => ({ type: GET_CAPTCHA_URL_SUCCESS,  payload: { captchaUrl }  });
export const SetUserProfile = (profile) => ({type: SET_USERS_PROFILE, profile});

export const getAuthUserData = () => async (dispatch) => {
    let responce = await AuthorizationAPI.getAuth();
    if (responce.resultCode === 0) {
        let { id, login, email } = responce.data;
        dispatch(SetAuthUserData(id, login, email, true));
    }
};

export const getProfile = (userId) => {
    return (dispatch) => {
        ProfileAPI.getProfile(userId).then(data => {
            dispatch(SetUserProfile(data));
        });
    }
}

export const LogIN = (email, password, rememberMe, captcha) => async (dispatch) => {
    let responce = await AuthorizationAPI.authIN(email, password, rememberMe, captcha);
    if (responce.resultCode === 0) {
        // success, get auth data
        dispatch(getAuthUserData());
        dispatch(GetCaptchaUrlSuccess(null));
    }
    else {
        if (responce.resultCode === 10) {
            dispatch(getCaptchaUrl());
        }
        let message = responce.messages.length > 0 ? responce.messages[0] : 'Что-то пошло не так...';
        dispatch(stopSubmit('Login', { _error: message }));        
    }
};

export const LogOUT = () => async (dispatch) => {
    let responce = await AuthorizationAPI.authOUT();
    if (responce.resultCode === 0) {
        dispatch(SetAuthUserData(null, null, null, false));
        dispatch(SetUserProfile(null));
    }
};

export const getCaptchaUrl = () => async (dispatch) => {
    let responce = await SecurityAPI.getCaptchaUrl();
    const captchaUrl = responce.url;
        dispatch(GetCaptchaUrlSuccess(captchaUrl))      
};

export default authReducer;
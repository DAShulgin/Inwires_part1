import { stopSubmit } from "redux-form";
import { ProfileAPI } from "../API/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET-USER-STATUS';
const SET_PHOTO_SUCCESS = 'SET-PHOTO-SUCCESS'

const initialState = {
    posts: [
        { id: 1, text: 'Lorem ipsum dolor sit amet.', like: 5 },
        { id: 2, text: 'Lorem ipsum dolor sit amet.', like: 2 },
        { id: 3, text: 'Lorem ipsum dolor sit amet.', like: 145 },
        { id: 4, text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, dicta!', like: 456 },
        { id: 5, text: 'Vivat.', like: 890 },
        { id: 6, text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.', like: 35 },
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, { id: 7, text: action.NewPostText, like: 0 }]
            };

        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }
        case SET_USER_STATUS: {
            return { ...state, status: action.status }
        }
        case SET_PHOTO_SUCCESS: {
            return { ...state, profile: { ...state.profile, photos: action.photos } }
        }

        default:
            return state;
    }

}

export const addPostAC = (text) => ({ type: ADD_POST, NewPostText: text });
export const SetUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const SetUserStatus = (status) => ({ type: SET_USER_STATUS, status });
export const savePhotoSuccess = (photos) => ({ type: SET_PHOTO_SUCCESS, photos });


export const getProfile = (userId) => async (dispatch) => {
    let responce = await ProfileAPI.getProfile(userId);
    dispatch(SetUserProfile(responce));
};

export const getStatus = (userId) => async (dispatch) => {
    let responce = await ProfileAPI.getStatus(userId);
    dispatch(SetUserStatus(responce));
};

export const updateStatus = (status) => async (dispatch) => {
    let responce = await ProfileAPI.updateStatus(status);
    if (responce.resultCode === 0)
        dispatch(SetUserStatus(status));
};

export const savePhoto = (file) => async (dispatch) => {
    let responce = await ProfileAPI.savePhoto(file);
    if (responce.resultCode === 0)
        dispatch(savePhotoSuccess(responce.data.photos));
};

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    let responce = await ProfileAPI.saveProfile(profile);
    if (responce.resultCode === 0) 
     dispatch(getProfile(userId));
    else {
        dispatch(stopSubmit('EditeProfile', {_error: responce.messages[0] }));
        return Promise.reject(responce.messages);    
/*dispatch(stopSubmit('EditeProfile', {'contacts': {'facebook': responce.data.messages[0] }}));*/  
    }
}

export default profileReducer;
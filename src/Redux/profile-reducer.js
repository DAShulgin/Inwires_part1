import { ProfileAPI } from "../API/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET-USER-STATUS';

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

        default:
            return state;
    }

}

export const addPostAC = (text) => ({ type: ADD_POST, NewPostText: text });
export const SetUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const SetUserStatus = (status) => ({ type: SET_USER_STATUS, status });


export const getProfile = (userId) => {

    return (dispatch) => {

        ProfileAPI.getProfile(userId).then(data => {
            dispatch(SetUserProfile(data));
        });
    };
};

export const getStatus = (userId) => {

    return (dispatch) => {

        ProfileAPI.getStatus(userId).then(data => {
            dispatch(SetUserStatus(data));
        });
    };
};

export const updateStatus = (status) => {

    return (dispatch) => {

        ProfileAPI.updateStatus(status).then(data => {
            if (data.resultCode === 0)
                dispatch(SetUserStatus(status));
        });
    };
};


export default profileReducer;
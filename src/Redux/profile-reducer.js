import { UsersAPI } from "../API/api";

const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SET_USERS_PROFILE = 'SET-USERS-PROFILE'



const initialState = {
    posts: [
        { id: 1, text: 'Lorem ipsum dolor sit amet.', like: 5 },
        { id: 2, text: 'Lorem ipsum dolor sit amet.', like: 2 },
        { id: 3, text: 'Lorem ipsum dolor sit amet.', like: 145 },
        { id: 4, text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, dicta!', like: 456 },
        { id: 5, text: 'Vivat.', like: 890 },
        { id: 6, text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.', like: 35 },
    ],
    NewPostText: 'Новый пост',
    profile: null
};



const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST:

            return {
                ...state,
                NewPostText: '',
                posts: [...state.posts, { id: 7, text: state.NewPostText, like: 0 }]
            };

        case UPDATE_POST_TEXT:

            return {
                ...state,
                NewPostText: action.NewPostText
            };
        case SET_USERS_PROFILE: {
            return { ...state, profile: action.profile }
        }

        default:
            return state;
    }

}

export const addPostAC = () => ({ type: ADD_POST });
export const updateNewPostTextAC = (text) => ({ type: UPDATE_POST_TEXT, NewPostText: text });
export const SetUserProfile = (profile) => ({ type: SET_USERS_PROFILE, profile });


export const getProfile = (userId) => {

    return (dispatch) => {

        UsersAPI.getProfile(userId).then(data => {
            dispatch(SetUserProfile(data));
        });
    }
}

export default profileReducer;
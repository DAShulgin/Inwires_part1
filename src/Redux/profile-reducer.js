const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';



const initialState = {
    posts: [
        { id: 1, text: 'Lorem ipsum dolor sit amet.', like: 5 },
        { id: 2, text: 'Lorem ipsum dolor sit amet.', like: 2 },
        { id: 3, text: 'Lorem ipsum dolor sit amet.', like: 145 },
        { id: 4, text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, dicta!', like: 456 },
        { id: 5, text: 'Vivat.', like: 890 },
        { id: 6, text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.', like: 35 },
    ],
    NewPostText: 'Новый пост'
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

        default:
            return state;
    }

}

export const addPostAC = () => ({ type: ADD_POST });
export const updateNewPostTextAC = (text) => ({ type: UPDATE_POST_TEXT, NewPostText: text });

export default profileReducer;
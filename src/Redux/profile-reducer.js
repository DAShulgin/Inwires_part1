const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

const profileReducer = (state, action) => {

    let AddPost = () => {
        let newPost = { id: 7, text: state.NewPostText, like: 0 };
        state.posts.push(newPost);
        state.NewPostText = '';
    };

    let updateNewPostText = (NewPostText) => {
        state.NewPostText = NewPostText;
    };


    switch (action.type) {

        case ADD_POST:
            AddPost();
            return state;

        case UPDATE_POST_TEXT:
            updateNewPostText(action.NewPostText);
            return state;

        default:
            return state;
    }

}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_POST_TEXT, NewPostText: text });

export default profileReducer;
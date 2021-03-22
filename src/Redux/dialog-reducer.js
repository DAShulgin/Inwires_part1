const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';


const dialogReducer = (state, action) => {

    let AddMessage = () => {
        let newMessage = { id: 7, textMessage: state.NewMessageText };
        state.messages.push(newMessage);
        state.NewMessageText = '';
    };
    let updateMessageText = (NewMessageText) => {
        state.NewMessageText = NewMessageText;

    };

    switch (action.type) {

        case ADD_MESSAGE:
            AddMessage();
            return state;

        case UPDATE_MESSAGE_TEXT:
            updateMessageText(action.NewMessageText);
            return state;

        default:
             return state;
    }

}

export const addMessageAC = () => ({ type: ADD_MESSAGE });
export const updateNewMessageTextAC = (text) => ({ type: UPDATE_MESSAGE_TEXT, NewMessageText: text });


export default dialogReducer;
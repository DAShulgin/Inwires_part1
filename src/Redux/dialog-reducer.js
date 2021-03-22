const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';


const initialState = {

    dialogs: [
        { id: 1, Name: 'Антон' },
        { id: 2, Name: 'Дмитрий' },
        { id: 3, Name: 'Анжела' },
        { id: 4, Name: 'Света' },
        { id: 5, Name: 'Виктор' },
        { id: 6, Name: 'Mr.X' },
    ],
    messages: [
        { id: 1, textMessage: 'Lorem ipsum dolor sit.' },
        { id: 2, textMessage: 'Lorem ipsum dolor sit amet consectetur.' },
        { id: 3, textMessage: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' },
        { id: 4, textMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam dolores itaque placeat at ullam, totam sint mollitia quod eum magnam incidunt corrupti? Quia, eveniet asperiores!' },
        { id: 5, textMessage: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, expedita.' },
        { id: 6, textMessage: 'Lorem, ipsum dolor sit amet.' }
    ],
    NewMessageText: 'Начат Новый Диалог'
}

const dialogReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_MESSAGE:

            return {
                ...state,
                NewMessageText: '',
                messages: [...state.messages, { id: 7, textMessage: state.NewMessageText }]
            };

        case UPDATE_MESSAGE_TEXT:
            return {
                ...state,
                NewMessageText: action.NewMessageText
            };

        default:
            return state;
    }

}

export const addMessageAC = () => ({ type: ADD_MESSAGE });
export const updateNewMessageTextAC = (text) => ({ type: UPDATE_MESSAGE_TEXT, NewMessageText: text });


export default dialogReducer;
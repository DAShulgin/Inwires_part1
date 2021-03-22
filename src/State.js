import profileReducer from './Redux/profile-reducer';
import dialogReducer from './Redux/dialog-reducer';

const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'


let Store = {

    _State: {
        dialogPage: {
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
        },
        profilePage: {
            posts: [
                { id: 1, text: 'Lorem ipsum dolor sit amet.', like: 5 },
                { id: 2, text: 'Lorem ipsum dolor sit amet.', like: 2 },
                { id: 3, text: 'Lorem ipsum dolor sit amet.', like: 145 },
                { id: 4, text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, dicta!', like: 456 },
                { id: 5, text: 'Vivat.', like: 890 },
                { id: 6, text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.', like: 35 },
            ],
            NewPostText: 'Новый пост'
        }
    },

    _callSubscriber() {
        console.log('state change');
    },

    getState() {
        return this._State;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._State.dialogPage = dialogReducer(this._State.dialogPage , action);
        this._State.profilePage = profileReducer(this._State.profilePage, action);
        this._callSubscriber(this._State);
    }

}




export default Store;
window.Store = Store;

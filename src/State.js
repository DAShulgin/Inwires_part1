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
            ]
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


    AddPost() {
        let newPost = { id: 7, text: this._State.profilePage.NewPostText, like: 0 };
        this._State.profilePage.posts.push(newPost);
        this._State.profilePage.NewPostText = '';
        this._callSubscriber(this._State);
    },

    updateNewPostText(NewPostText) {
        this._State.profilePage.NewPostText = NewPostText;
        this._callSubscriber(this._State);
    },


    dispatch(action) {
        if (action.type == 'ADD-POST') {
            this.AddPost();
        }
        else if (action.type == 'UPDATE-POST-TEXT') {
            this.updateNewPostText(action.NewPostText);
        }
    }


}

export default Store;
window.Store = Store;

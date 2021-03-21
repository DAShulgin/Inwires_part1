let rerenderEntireTree = () => {
console.log('state change');
};

let State = {
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
    postPage: {
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
}

window.state  = State;

export const AddPost = (postText) => {
    let newPost = { id: 7, text: postText, like: 0 };
    State.postPage.posts.push(newPost);
    State.postPage.NewPostText = '';
    rerenderEntireTree(State);
}

export const updateNewPostText = (NewPostText) => {
State.postPage.NewPostText = NewPostText;
rerenderEntireTree(State);
}

export let subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default State;

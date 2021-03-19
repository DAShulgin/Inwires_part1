import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Dialogs.module.css'


let DialogsData = [
    { id: 1, Name: 'Антон' },
    { id: 2, Name: 'Дмитрий' },
    { id: 3, Name: 'Анжела' },
    { id: 4, Name: 'Света' },
    { id: 5, Name: 'Виктор' },
    { id: 6, Name: 'Mr.X' },
]

let MessageData = [
    { id: 1, textMessage: 'Lorem ipsum dolor sit.' },
    { id: 2, textMessage: 'Lorem ipsum dolor sit amet consectetur.' },
    { id: 3, textMessage: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' },
    { id: 4, textMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam dolores itaque placeat at ullam, totam sint mollitia quod eum magnam incidunt corrupti? Quia, eveniet asperiores!' },
    { id: 5, textMessage: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, expedita.' },
    { id: 6, textMessage: 'Lorem, ipsum dolor sit amet.' }
]


const Dialog = (props) => {
    return <div>
        <NavLink to={/dialogs/ + props.id}>{props.Name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div>
        {props.textMessage}
    </div>
}

let DialogItems = DialogsData.map(d => <Dialog key={d.id} Name={d.Name} /> );

let MessageItems = MessageData.map(t => <Message key={t.id} textMessage={t.textMessage} /> );


const Dialogs = (props) => {
    return <div className={style.dialogs}>
        <div className={style.dialogsItems}>

            <div className={style.dialog}>
                {DialogItems}
            </div>

        </div>

        <div className={style.messagesItems}>
            <div className={style.message}>
                {MessageItems}
            </div>
        </div>

    </div>

}

export default Dialogs;
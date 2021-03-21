import React from 'react';
import style from './Dialogs.module.css'
import Message from './Message/Message';
import Dialog from './Dialog/Dialog';
import AddOneMessage from './AddOneMessage/AddOneMessage';



const Dialogs = (props) => {

    let dialogs = props.dialogPage.dialogs;
    let messages = props.dialogPage.messages;
    let NewMessageText =  props.dialogPage.NewMessageText;

    let DialogItems = dialogs.map(d => <Dialog key={d.id} Name={d.Name} />);

    let MessageItems = messages.map(t => <Message key={t.id} textMessage={t.textMessage} />);

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
            <div>
                <AddOneMessage dispatch = {props.dispatch} NewMessageText = {NewMessageText} />
            </div>
        </div>

    </div>

}

export default Dialogs;
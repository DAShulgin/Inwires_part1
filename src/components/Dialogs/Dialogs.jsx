import React from 'react';
import style from './Dialogs.module.css'
import Message from './Message/Message';
import Dialog from './Dialog/Dialog';
import AddOneMessage from './AddOneMessage/AddOneMessage';



const Dialogs = (props) => {

    let DialogItems = props.dialogs.map(d => <Dialog key={d.id} Name={d.Name} />);

    let MessageItems = props.messages.map(t => <Message key={t.id} textMessage={t.textMessage} />);

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
                <AddOneMessage NewMessageText={props.NewMessageText}
                    NewMessage={props.NewMessage}
                    updateMessage={props.updateMessage} />
            </div>
        </div>

    </div>

}

export default Dialogs;
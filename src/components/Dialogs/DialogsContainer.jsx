import React from 'react';
import { addMessageAC, updateNewMessageTextAC } from '../../Redux/dialog-reducer';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {

    let dialogPage = props.store.getState().dialogPage;

    let NewMessage = () => {
        props.store.dispatch(addMessageAC());
    }

    let updateMessage = (text) => {
        props.store.dispatch(updateNewMessageTextAC(text));
    }

    return <Dialogs
        dialogs={dialogPage.dialogs}
        messages={dialogPage.messages}
        NewMessageText={dialogPage.NewMessageText}
        NewMessage={NewMessage}
        updateMessage={updateMessage}
    />
}

export default DialogsContainer;
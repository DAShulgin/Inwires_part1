import React from 'react';
import { addMessageAC, updateNewMessageTextAC } from '../../Redux/dialog-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {

    return {
        dialogs: state.dialogPage.dialogs,
        messages: state.dialogPage.messages,
        NewMessageText: state.dialogPage.NewMessageText
    }
}

let mapStateDispatchToProps = (dispatch) => {

    return {
        NewMessage: () => { dispatch(addMessageAC()); },
        updateMessage: (text) => {dispatch(updateNewMessageTextAC(text)); }
    }
}

const DialogsContainer = connect(mapStateToProps, mapStateDispatchToProps)(Dialogs);

export default DialogsContainer;
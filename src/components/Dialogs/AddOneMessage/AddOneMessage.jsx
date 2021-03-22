import React from 'react';
import { addMessageAC, updateNewMessageTextAC } from '../../../Redux/dialog-reducer';



const AddOneMessage = (props) => {

    let NewMessage = () => {
        props.dispatch(addMessageAC());
    }

    let updateMessage = (e) => {   
        props.dispatch(updateNewMessageTextAC(e.target.value));
    }
    
    return <div>
        <div><textarea  onChange = {updateMessage}  value = {props.NewMessageText} ></textarea> </div>
        <div><button onClick={NewMessage}>Написать</button></div>
    </div>
}

export default AddOneMessage;

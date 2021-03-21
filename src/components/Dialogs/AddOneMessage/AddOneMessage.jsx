import React from 'react';
import { addMessageAC, updateNewMessageTextAC } from '../../../State';



const AddOneMessage = (props) => {

    let newMessageElement = React.createRef();

    let NewMessage = () => {
        props.dispatch(addMessageAC());
    }

    let updateMessage = () => {
        let text = newMessageElement.current.value;
        props.dispatch(updateNewMessageTextAC(text));
    }
    
    return <div>
        <div><textarea  onChange = {updateMessage}  ref={newMessageElement} value = {props.NewMessageText} ></textarea> </div>
        <div><button onClick={NewMessage}>Написать</button></div>
    </div>
}

export default AddOneMessage;

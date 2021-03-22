import React from 'react';

const AddOneMessage = (props) => {

    let onClickNewMessage = () => {
        props.NewMessage();
    }

    let onChangeUpdateMessage = (e) => {
        props.updateMessage(e.target.value);
    }

    return <div>
        <div><textarea onChange={onChangeUpdateMessage} value={props.NewMessageText} ></textarea> </div>
        <div><button onClick={onClickNewMessage}>Написать</button></div>
    </div>
}

export default AddOneMessage;

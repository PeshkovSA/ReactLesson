import React from 'react';
import s from './Message.css';
import Dialogs from "../Dialogs";

const Message = (props) => {
    return (<div className={s.dialog}>{props.message}</div>)
}

export default Message;
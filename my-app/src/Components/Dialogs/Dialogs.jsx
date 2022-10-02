import React from 'react';
import s from './Dialogs.module.css';


const DialogItem = (props) => {

    return (
        <div className={s.dialog + ' ' + s.active}>
            <a href={'/dialogs/' + props.id}>{props.name}</a>
        </div>
        <div></div>
    )
}

const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}
const Dialogs = (props) => {
    let dialogs = [
        {id: 1, name: 'Sema'},
        {id: 2, name: 'Masha'},
        {id: 3, name: 'Ivan'},
        {id: 4, name: 'Anna'},
        {id: 5, name: 'Elena'},
        {id: 6, name: 'Egor'}
    ]
    let messages = [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How are u?'},
        {id: 3, message: 'Ok'},
        {id: 4, message: 'Fine'},
        {id: 5, message: 'Great'}
]

    let dialogsElements = dialogs.map( d  => <DialogItem name={d.name} id={d.id} />  );
    let messagesElements = messages.map (m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;
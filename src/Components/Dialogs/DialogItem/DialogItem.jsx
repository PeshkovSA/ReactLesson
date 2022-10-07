import React from 'react';
import s from './DialogItem.module.css';
import Dialogs from "../Dialogs";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    return (
        <div className={s.dialogs + ' ' + s.active}>
            <NavLink  to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;
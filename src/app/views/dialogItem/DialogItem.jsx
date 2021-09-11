import React from 'react';
import d from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

const DialogContext = (props) => {
    let path = "/dialogitem/" + props.id;
    return (
        <div>
            <div className={d.dialog + ' ' + d.active}>
                <NavLink to={path}>{props.name}</NavLink>
            </div>

        </div>
    )
}


const Message = (props) => {
    return (
        <div>
            <div className="{d.message}">{props.message}</div>
        </div>

    )
};


const DialogItem = (props) => {
    let dialogContextData = [{id: 1, name: 'Oleg'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Sveta'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Vlad'},
    ]
    return (
        <div className={d.dialogs}>
            <div className={d.dialogsitems}>

                <DialogContext name="Oleg" id="1"/>
                <DialogContext name="Andrey" id="2"/>
                <DialogContext name="Sasha" id="3"/>
                <DialogContext name="Sveta" id="4"/>
                <DialogContext name="Victor" id="5"/>
                <DialogContext name="Vlad" id="6"/>
            </div>

            <div className={d.message}>
                <Message message="Hi"/>
                <Message message="How are you"/>
                <Message message="Hi hi"/>
                <Message message="Good moning"/>
                <Message message="Good after"/>
                <Message message="List"/>
            </div>

        </div>
    )
};

export default DialogItem;
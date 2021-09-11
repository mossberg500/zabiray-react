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
    let dialogContextData = [
        {id: 1, name: 'Oleg'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Sveta'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Vlad'}
    ]

    let messageData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Hi hi'},
        {id: 4, message: 'Good moning'},
        {id: 5, message: 'Good after'},
        {id: 6, message: 'List'}
    ]

    /* массив реакт jsx компонентов */
    let dialogElements = [
        <DialogContext name={dialogContextData[0].name} id={dialogContextData[0].id} />,
        <DialogContext name={dialogContextData[1].name} id ={dialogContextData[1].id} />,
        <DialogContext name={dialogContextData[2].name} id ={dialogContextData[2].id} />,
        <DialogContext name={dialogContextData[3].name} id ={dialogContextData[3].id} />,
        <DialogContext name={dialogContextData[4].name} id ={dialogContextData[4].id} />,
        <DialogContext name={dialogContextData[5].name} id ={dialogContextData[5].id} />
]

    return (
        <div className={d.dialogs}>
            <div className={d.dialogsitems}>
                {dialogElements}
                {/* <DialogContext name={dialogContextData[0].name} id={dialogContextData[0].id}/>
                <DialogContext name={dialogContextData[1].name} id={dialogContextData[1].id}/>
                <DialogContext name={dialogContextData[2].name} id={dialogContextData[2].id}/>
                <DialogContext name={dialogContextData[3].name} id={dialogContextData[3].id}/>
                <DialogContext name={dialogContextData[4].name} id={dialogContextData[4].id}/>
                <DialogContext name={dialogContextData[5].name} id={dialogContextData[5].id}/>*/}

            </div>

            <div className={d.message}>
                {/*<Message message={messageData[0].message}/>
                <Message message={messageData[1].message}/>
                <Message message={messageData[2].message}/>
                <Message message={messageData[3].message}/>
                <Message message={messageData[4].message}/>
                <Message message={messageData[5].message}/>*/}
            </div>

        </div>
    )
};

export default DialogItem;
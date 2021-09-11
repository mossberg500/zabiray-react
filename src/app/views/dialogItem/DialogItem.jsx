import React from 'react';
import d from './DialogItem.module.css'
import DialogContext from "./DialogContext/DialogContext";
import Message from "./Message/Message";


const DialogItem = (props) => {

    /*let dialogContextData = [
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
*/
    /* массив реакт jsx компонентов */
    let dialogElements = props.dialogContextData.map( dialog=> <DialogContext id={dialog.id} name={dialog.name} /> );

    let messagesElement = props.messageData.map(mes=><Message message={mes.message}/>)
    return (
        <div className={d.dialogs}>
            <div className={d.dialogsitems}>
                {dialogElements}
            </div>
            <div className={d.message}>
                { messagesElement }
            </div>
        </div>
    )
};

export default DialogItem;
import React from 'react';
import d from './DialogItem.module.css'
import DialogContext from "./DialogContext/DialogContext";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/mesage-reducer";

// Dialogs
const DialogItem = (props) => {

    let state = props.dialogStat

    /* массив реакт jsx компонентов */
    let dialogElements = state.dialogContextData.map( dialog=> <DialogContext id={dialog.id} name={dialog.name} /> );

    let messagesElement = state.messageData.map(mes=><Message message={mes.message}/>)

    let newMessageBody = state.newMassageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);

    }

    let a = 3.14
    let b = 0.3
    let sum = (a, b) => {
        return(
        a/b*10000.678
    )}
    return (
        <div className={d.dialogs}>

            <h3>список диалогов</h3>
            <div>
                <div className="card-body table-responsive">

                    <textarea></textarea>
                    <p>{sum(a, b)}</p>



                </div>
                <div>
                    {/* концепция callbeck-ов когда мы не вызываем функцию а отдаем её кому-то
                        чтобы ее этот кто-то вызвал.  addNewOffers  без скобок просто отдаем функцию*/}
                    {/*<button onClick={ addDialogItem }>Добавить диалог</button>*/}
                </div>
            </div>




            <div className={d.dialogsitems}>
                {dialogElements}
            </div>

            <div className={d.message}>
                <div>{ messagesElement }</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder="Enter your message" /> </div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
};

export default DialogItem;
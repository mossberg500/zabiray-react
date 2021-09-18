import React from 'react';
import d from './DialogItem.module.css'
import DialogContext from "./DialogContext/DialogContext";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/mesage-reducer";

const DialogItem = (props) => {

  //  let NewDialogItem = React.createRef();
  //  let addDialogItem = () => {
  //      let text = NewDialogItem.current.value;
 //   };

    /* массив реакт jsx компонентов */
    let dialogElements = props.dialogStat.dialogContextData.map( dialog=> <DialogContext id={dialog.id} name={dialog.name} /> );

    let messagesElement = props.dialogStat.messageData.map(mes=><Message message={mes.message}/>)

    let newMessageBody = props.dialogStat.newMassageBody;

    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.dispatch(updateNewMessageBodyCreator(body))

    }

    return (
        <div className={d.dialogs}>

            <h3>список диалогов</h3>
            <div>
                <div className="card-body table-responsive">

                    <textarea></textarea>



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
                                   placeholder="Enter your massege" /> </div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
};

export default DialogItem;
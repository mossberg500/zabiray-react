import React from 'react';
import d from './DialogItem.module.css'
import DialogContext from "./DialogContext/DialogContext";
import Message from "./Message/Message";


const DialogItem = (props) => {

    let NewDialogItem = React.createRef();

    let addDialogItem = () => {
        let text = NewDialogItem.current.value;
    };


    /* массив реакт jsx компонентов */
    let dialogElements = props.dialogStat.dialogContextData.map( dialog=> <DialogContext id={dialog.id} name={dialog.name} /> );

    let messagesElement = props.dialogStat.messageData.map(mes=><Message message={mes.message}/>)
    return (
        <div className={d.dialogs}>

            <h3>список диалогов</h3>
            <div>
                <div className="card-body table-responsive">

                    <textarea ref={ NewDialogItem }></textarea>



                </div>
                <div>
                    {/* концепция callbeck-ов когда мы не вызываем функцию а отдаем её кому-то
                        чтобы ее этот кто-то вызвал.  addNewOffers  без скобок просто отдаем функцию*/}
                    <button onClick={ addDialogItem }>Добавить диалог</button>
                </div>
            </div>




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
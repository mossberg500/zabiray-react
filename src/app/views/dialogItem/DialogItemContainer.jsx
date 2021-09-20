import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/mesage-reducer";
import DialogItem from "./DialogItem";

// Dialogs
const DialogItemContainer = (props) => {

    let stat = props.store.getState().dialogStat;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return ( <DialogItem updateNewMessageBody={ onNewMessageChange }
                         sendMessage={ onSendMessageClick }
                         dialogStat={ stat }
    /> )
};

export default DialogItemContainer;
import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/mesage-reducer";
import DialogItem from "./DialogItem";
import {connect} from "react-redux";

// Dialogs

/*
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
*/

let mapStateToProps = (state) => {
    return{
        dialogStat: state.dialogStat
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        updateNewMessageBody: (body) => {dispatch(updateNewMessageBodyCreator(body));
        },
        sendMessage : () => {dispatch(sendMessageCreator());
        }
    }
}

const SuperDialogItemContainer = connect(mapStateToProps, mapDispatchToProps)(DialogItem);

export default DialogItemContainer;
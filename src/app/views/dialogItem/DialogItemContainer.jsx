import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/mesage-reducer";
import DialogItem from "./DialogItem";
import {connect} from "react-redux";

// Dialogs
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

const DialogItemContainer = connect(mapStateToProps, mapDispatchToProps)(DialogItem);

export default DialogItemContainer;
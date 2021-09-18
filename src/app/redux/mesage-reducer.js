const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
        dialogContextData: [
            {id: 1, name: 'Oleg'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sasha'},
            {id: 4, name: 'Sveta'},
            {id: 5, name: 'Victor'},
            {id: 6, name: 'Vlad'}
        ],
        messageData: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you'},
            {id: 3, message: 'Hi hi'},
            {id: 4, message: 'Good moning'},
            {id: 5, message: 'Good after'},
            {id: 6, message: 'List'}
        ],
        newMassageBody: ""
}

const messageReducer = (state=initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMassageBody = action.body;
            return state;

        case SEND_MESSAGE:
            let body = state.newMassageBody;
            state.newMassageBody = '';
            state.messageData.push({id: 1, message: body})
            return state;
        default:
            return state;
    }
}
export const sendMessageCreator = () =>({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default messageReducer;
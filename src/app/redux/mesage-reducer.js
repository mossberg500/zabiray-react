const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const messageReducer = (state, action) => {
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
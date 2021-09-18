import offerReducer from "./offer-reducer";
import messageReducer from "./mesage-reducer";

const ADD_NEW_OFFERS = 'ADD-NEW-OFFERS';
const UPDATE_NEW_OFFERS = 'UPDATE-NEW-OFFERS';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';


let store ={
    _state: {
        dialogStat: {
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
        },
        offerStat: {
            offers: [
                {id: '1', name: 'Одеяло', categoryId: 'Электроодеяло', supplierId: 'Забирай', date: '09-08-2021'},
                {id: '2', name: 'Яблоко', categoryId: 'Продукты', supplierId: 'Забирай', date: '11-09-2021'},
            ],

            newOffersName: 'фиксированное значение'
        },
    },
    /*уведомить подписчика*/
    _callSubscriber() {
        console.log('State was changed')
    },


    getState() {
   //     debugger;
       return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    /*action - это объект(действие) у которого как минимум есть type*/
    dispatch(action) {
        this._state.offerStat = offerReducer(this._state.offerStat, action)
        this._state.dialogStat = messageReducer(this._state.dialogStat, action)
        this._callSubscriber(this._state);
    }
}

export const addNewOffersActionCreator = () =>({ type: ADD_NEW_OFFERS })
export const updateOffersActionCreator = (text) =>
    ({ type: UPDATE_NEW_OFFERS, newName: text })

export const sendMessageCreator = () =>({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

window.store = store;
export default store;
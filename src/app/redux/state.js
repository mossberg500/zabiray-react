
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
            ]
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


    addNewOffers() {
   //     debugger;
        let newOffer = {
            id: 5,
            name: this._state.offerStat.newOffersName,
            categoryId: 'Электро',
            supplierId: 'Забирай',
            date: '13-09-2021'
        };
        this._state.offerStat.offers.push(newOffer);
        this._state.offerStat.newOffersName='';
        this._callSubscriber(this._state);
    },
    updateNewOffers(newname) {
        this._state.offerStat.newOffersName = newname
        this._callSubscriber(this._state);
    },
    /*action - это объект(действие)*/
    dispatch(action) {
        if(action.type === 'ADD-NEW-OFFERS') {
            let newOffer = {
                id: 5,
                name: this._state.offerStat.newOffersName,
                categoryId: 'Электро',
                supplierId: 'Забирай',
                date: '13-09-2021'
            };
            this._state.offerStat.offers.push(newOffer);
            this._state.offerStat.newOffersName='';
            this._callSubscriber(this._state);
        } else if(action.type === 'UPDATE-NEW-OFFERS') {
            this._state.offerStat.newOffersName = action.newName
            this._callSubscriber(this._state);
        }

    }

}
window.store = store;

export default store;

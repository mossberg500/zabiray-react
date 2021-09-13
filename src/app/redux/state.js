import {renderEntireTree} from "../../render";

let state = {
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
};

export let addNewOffers = () => {

    let newOffer = {
        id: '5',
        name: state.offerStat.newOffersName,
        categoryId: 'Электро',
        supplierId: 'Забирай',
        date: '13-09-2021'
    };
    state.offerStat.offers.push(newOffer);
  //  state.offerStat.newOffersName='';
    renderEntireTree(state);
}


export let updateNewOffers = (newname) => {

    state.offerStat.newOffersName = newname

    /*let newOffer = {
        id: '5',
        name: state.offerStat.newOffersName,
        categoryId: 'Электро',
        supplierId: 'Забирай',
        date: '13-09-2021'
    };

    state.offerStat.offers.push(newOffer);*/


    renderEntireTree(state);
}



export default state;
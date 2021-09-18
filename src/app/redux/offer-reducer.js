const ADD_NEW_OFFERS = 'ADD-NEW-OFFERS';
const UPDATE_NEW_OFFERS = 'UPDATE-NEW-OFFERS';

let initialState = {
    offers: [
        {id: '1', name: 'Одеяло', categoryId: 'Электроодеяло', supplierId: 'Забирай', date: '09-08-2021'},
        {id: '2', name: 'Яблоко', categoryId: 'Продукты', supplierId: 'Забирай', date: '11-09-2021'},
    ],
    newOffersName: 'фиксированное значение'
}


const offerReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_OFFERS:
            let newOffer = {
                id: 5,
                name: state.newOffersName,
                categoryId: 'Электро',
                supplierId: 'Забирай',
                date: '13-09-2021'
            };
            state.offers.push(newOffer);
            state.newOffersName = '';
            return state;
        case UPDATE_NEW_OFFERS:
            state.newOffersName = action.newName
            return state;
        default:
            return state;
    }
}
//  ActionCreator
export const addNewOffersActionCreator = () => ({type: ADD_NEW_OFFERS})
export const updateOffersActionCreator = (text) =>
    ({type: UPDATE_NEW_OFFERS, newName: text})


export default offerReducer;
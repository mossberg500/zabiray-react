const ADD_NEW_OFFERS = 'ADD-NEW-OFFERS';
const UPDATE_NEW_OFFERS = 'UPDATE-NEW-OFFERS';

const offerReducer = (state, action) => {
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
export default offerReducer;
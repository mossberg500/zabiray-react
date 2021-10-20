const SET_OFFERS_DETAIL= 'SET_OFFERS_DETAIL'


let initialState = {
    offerDetail: {
        id: 0,
        id_offer: 0,
        picture: 'пусто',
        name: 'пусто',
    },

};
const offersDetailReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_OFFERS_DETAIL: {
            return { ...state, offerDetail: action.offerDetail }
        }
        default:
            return state;
    }
}
export const setOfferDetail = (offerDetail) => ({type: SET_OFFERS_DETAIL, offerDetail})

export default offersDetailReducer;

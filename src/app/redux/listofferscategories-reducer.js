const SET_LIST_OFFER_CATEGORIES= 'SET-LIST-OFFER-CATEGORIES'
const SET_PAGE_NUMBER= 'SET-PAGE-NUMBER'
const SET_TOTAL_ELEMENTS= 'SET-TOTAL-ELEMENTS'

let initialState = {
    offerscategory: [

        {id: '1', name: 'offersОдеяло', categoryById: 'offersЭлектроодеяло', supplierId: 'offersЗабирай',
            price: {id: '1627',
                    currencyId: '390',
                    date: '2021-09-05T21:00:00.000+00:00'
            },
            date: '11-09-2021'},



        {id: '2', name: 'offersЯблоко', categoryById: 'offersПродукты', supplierId: 'offers22222222222',
            price: {id: '1675',
                currencyId: '400',
                date: '2021-09-05T21:00:00.000+00:00'
            },

            date: '11-09-2021'},

    ],
    pageNumber: 1,
    pageSize: 5,

    totalPages: 5,
    totalElements: 20,

};
const listoffercategoriesReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_LIST_OFFER_CATEGORIES: {
          return { ...state, offerscategory: [...action.offerscategory] }
        }
        case SET_PAGE_NUMBER: {
            return { ...state, pageNumber: action.pageNumber }
        }
        case SET_TOTAL_ELEMENTS: {
            return { ...state, totalElements: action.totalEl }
        }

        default:
            return state;
    }
}

export const setOffersCategory = (offerscategory) => ({type: SET_LIST_OFFER_CATEGORIES, offerscategory})
export const setPageNumber = (pageNumber) => ({type: SET_PAGE_NUMBER, pageNumber: pageNumber})
export const setTotalElements = (totalElements) => ({type: SET_TOTAL_ELEMENTS, totalEl: totalElements})

export default listoffercategoriesReducer;
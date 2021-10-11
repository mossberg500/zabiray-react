//const FOLLOW = 'FOLLOW'
//const UNFOLLOW = 'UNFOLLOW'
const SET_CATEGORIES= 'SET_CATEGORIES'
//const SET_PAGE_NUMBER= 'SET-PAGE-NUMBER'
//const SET_TOTAL_ELEMENTS= 'SET-TOTAL-ELEMENTS'
//const TOGGLE_IS_FETCHING= 'TOGGLE-IS-FETCHING'

let initialState = {
    categories: [
        {id: '1', nameCategory: 'штора'},
        {id: '2', nameCategory: 'гардина'},
        {id: '3', nameCategory: 'Спортивные товары'}
    ],

};
const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_CATEGORIES: {
            return { ...state, categories: [...action.categories] }
        }
        default:
            return state;
    }
}
export const setCategories = (categories) => ({type: SET_CATEGORIES, categories})

export default categoriesReducer;
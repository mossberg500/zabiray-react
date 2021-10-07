const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS= 'SET-USERS'
const SET_PAGE_NUMBER= 'SET-PAGE-NUMBER'
const SET_TOTAL_ELEMENTS= 'SET-TOTAL-ELEMENTS'
const TOGGLE_IS_FETCHING= 'TOGGLE-IS-FETCHING'

let initialState = {
    users: [],
    pageNumber: 1,
    pageSize: 5,

    totalPages: 5,
    totalElements: 20,
    isFetching: false
};
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            /*return { ...state, users: [ ...state.users, ...action.users] }*/
            return { ...state, users: [...action.users] }
        }
        case SET_PAGE_NUMBER: {
            return { ...state, pageNumber: action.pageNumber }
        }
        case SET_TOTAL_ELEMENTS: {
            return { ...state, totalElements: action.totalEl }
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }


        default:
            return state;
    }
}

export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setPageNumber = (pageNumber) => ({type: SET_PAGE_NUMBER, pageNumber: pageNumber})
export const setTotalElements = (totalElements) => ({type: SET_TOTAL_ELEMENTS, totalEl: totalElements})
export const setIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching})


export default usersReducer;
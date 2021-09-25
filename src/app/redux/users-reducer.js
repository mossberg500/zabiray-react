const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS= 'SET-USERS'

let initialState = {
    users: [
        { id: '1', photoUrl: 'https://zabiray.com.ua/image/cache/catalog/YML441a46fc0209632b8c44dc67b38db78a/1115/IMGaa1e335324adeb1aad1f8c399af1782b-800x800.jpg', followed: false, fullName: 'Dmitry', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'}},
        { id: '2', photoUrl: 'https://zabiray.com.ua/image/cache/catalog/YML441a46fc0209632b8c44dc67b38db78a/1115/IMGaa1e335324adeb1aad1f8c399af1782b-800x800.jpg', followed: false, fullName: 'Sasha', status: 'I am from', location: {city: 'Kiev', country: 'Ukraine'}},
        {id: '3', photoUrl: 'https://zabiray.com.ua/image/cache/catalog/YML441a46fc0209632b8c44dc67b38db78a/1115/IMGaa1e335324adeb1aad1f8c399af1782b-800x800.jpg', followed: true, fullName: 'Oleg', status: 'I am too', location: {city: 'Dnepr', country: 'Ukraine'}},
        {id: '4', photoUrl: 'https://zabiray.com.ua/image/cache/catalog/YML441a46fc0209632b8c44dc67b38db78a/1115/IMGaa1e335324adeb1aad1f8c399af1782b-800x800.jpg', followed: false, fullName: 'Vlad', status: 'I am ', location: {city: 'Soho', country: 'Belgium'}},
    ]
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
            return { ...state, users: [ ...action.users, ...action.users] }
        }

        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})


export default usersReducer;
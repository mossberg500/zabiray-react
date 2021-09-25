import {combineReducers, createStore} from "redux";
import offerReducer from "./offer-reducer";
import messageReducer from "./mesage-reducer";
import usersReducer from "./users-reducer";


let reducers = combineReducers({

    offerStat: offerReducer,
    dialogStat: messageReducer,
    usersPage: usersReducer
});

let redux_store = createStore(reducers);


let store = createStore(reducers);
window.store = store;

export default redux_store;
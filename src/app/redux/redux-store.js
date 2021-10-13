import {combineReducers, createStore} from "redux";
import offerReducer from "./offer-reducer";
import messageReducer from "./mesage-reducer";
import usersReducer from "./users-reducer";
import categoriesReducer from "./categories-reducer";
import ListOfOffersFCategories from "../views/listofoffersfromcategories/ListOfOffersFCategories";
import listoffercategoriesReducer from "./listofferscategories-reducer";


let reducers = combineReducers({

    offerStat: offerReducer,
    dialogStat: messageReducer,
    usersPage: usersReducer,
    categoriesStat: categoriesReducer,
    listOfOffersFCategoriesStat: listoffercategoriesReducer
});

let redux_store = createStore(reducers);


let store = createStore(reducers);
window.store = store;

export default redux_store;
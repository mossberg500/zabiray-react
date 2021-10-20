import React from 'react';
import './App.css';
import Dialogs from "./app/components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import MyOffersContainer from "./app/views/Offers/MyOffersContainer";
import DialogItemContainer from "./app/views/dialogItem/DialogItemContainer";
import UsersContainer from "./app/views/users/UsersContainer";
import CategoriesContainer from "./app/views/categories/CategoriesContainer";
import ListOfOffersFCategoriesContainer from "./app/views/listofoffersfromcategories/ListOfOffersFCategoriesContainer";
import OffersDetailContainer from "./app/views/listofoffersfromcategories/detailoffers/OffersDetailContainer";


function App() {

    return (

        <div className='app-wrapper1'>
            <div className='header1'>
                <Dialogs/>
            </div>

            <nav className='nav1'>
                {/*<CategoriesContainer />*/}
                <Route path='/categories' render={() => <CategoriesContainer />}/>
            </nav>


            <div className='cont'>
                {/*

                // Profile* MyPosts
                <Route path='/offers' render={ ()=> <MyOffersContainer store={props.store} />} />

                // Dialogs
                <Route path='/dialogitem' render={ ()=> <DialogItemContainer store={props.store} />} />
*/}
                {/*// Profile* MyPosts */}
                <Route path='/offers' render={() => <MyOffersContainer/>}/>
                {/*// Dialogs*/}
                <Route path='/dialogitem' render={() => <DialogItemContainer/>}/>
                {/*// Users*/}
                <Route path='/users' render={() => <UsersContainer /> }/>

                <Route path='/categories/:categId?' render={() => <ListOfOffersFCategoriesContainer /> }/>

                <Route path='/offerdetail/:offId?' render={() => <OffersDetailContainer /> }/>

            </div>


        </div>

    );
}


export default App;

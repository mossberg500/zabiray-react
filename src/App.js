import React from 'react';
import './App.css';
import Categories from "./app/views/categories/Categories";
import Dialogs from "./app/components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import MyOffersContainer from "./app/views/Offers/MyOffersContainer";
import DialogItemContainer from "./app/views/dialogItem/DialogItemContainer";
import UsersContainer from "./app/views/users/UsersContainer";


function App() {

    return (

        <div className='app-wrapper'>
            <div className='header'>
                <Dialogs/>
            </div>
            <nav className='nav'>
                <Categories/>
            </nav>
            <div className='content'>
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
            </div>
        </div>

    );
}


export default App;

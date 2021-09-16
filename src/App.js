import React from 'react';
import './App.css';


import Offers from "./app/views/Offers/Offers";
import Categories from "./app/views/categories/Categories";
import Dialogs from "./app/components/Dialogs/Dialogs";
import DialogItem from "./app/views/dialogItem/DialogItem";
import { Route } from "react-router-dom";
import {BrowserRouter} from "react-router-dom";


function App(props) {

    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <div className='header'>
            <Dialogs />
            </div>
            <nav className='nav'>
                <Categories/>
            </nav>
            <div className='content'>
                {/*<Route path='/dialogitem' component={DialogItem} />
                <Route path='/offers' component={Offers} />
                */}
                <Route path='/dialogitem' render={ ()=> <DialogItem dialogStat={props.state.dialogStat} />} />
                <Route path='/offers' render={ ()=> <Offers offersStat={props.state.offerStat}
                                                            newOffersName={props.state.newOffersName}
                                                            updateNewOffers={props.updateNewOffers}
                                                            addNewOffers={props.addNewOffers} />} />

            </div>
        </div>
        </BrowserRouter>
    );
}



export default App;

import React from 'react';
import './App.css';
import Categories from "./app/views/categories/Categories";
import Dialogs from "./app/components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import MyOffersContainer from "./app/views/Offers/MyOffersContainer";
import DialogItemContainer from "./app/views/dialogItem/DialogItemContainer";


function App(props) {

    return (

        <div className='app-wrapper'>
            <div className='header'>
            <Dialogs />
            </div>
            <nav className='nav'>
                <Categories/>
            </nav>
            <div className='content'>

  {/*              // Dialogs
                <Route path='/dialogitem' render={ ()=> <DialogItem dialogStat={props.state.dialogStat}
                                                                    dispatch={props.dispatch} />} />
  */}


{/*

                // Profile* MyPosts
                <Route path='/offers' render={ ()=> <MyOffersContainer offerStat={props.state.offerStat}
                                                            newOffersName={props.state.newOffersName}
                                                            dispatch={props.dispatch}  />} />
*/}






                {/*// Profile* MyPosts */}
                <Route path='/offers' render={ ()=> <MyOffersContainer store={props.store} />} />


                {/*// Dialogs*/}
                <Route path='/dialogitem' render={ ()=> <DialogItemContainer store={props.store} />} />





           {/*     <Route path='/dialogitem' render={ ()=> <DialogItem  />} />

                <Route path='/offers' render={ ()=> <Offers  />} />
*/}
            </div>
        </div>

    );
}



export default App;

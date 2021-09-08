import React from 'react';
import './App.css';


import Offers from "./app/views/Offers/Offers";
import Categories from "./app/views/categories/Categories";
import Dialogs from "./app/components/Dialogs/Dialogs";

function App() {
    return (
        <div className='app-wrapper'>
            <div className='header'>
            <Dialogs />
            </div>
            <nav className='nav'>
                <Categories/>
            </nav>
            <div className='content'>
                <Offers />
            </div>
        </div>
    );
}



export default App;

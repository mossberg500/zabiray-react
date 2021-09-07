import React from 'react';
import './App.css';
import Header from './../src/app/components/Header'
import Technologies from './../src/app/components/Technologies'
import Offers from "./app/views/Offers/Offers";
import Categories from "./app/views/categories/Categories";

function App() {
    return (
        <div className='app-wrapper'>
            <Header />
            <Technologies />
            <nav>
                <Categories/>
            </nav>
            <div>
                <Offers />
            </div>
        </div>
    );
}



export default App;

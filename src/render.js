import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addNewOffers} from "./app/redux/state";


export let renderEntireTree = (state) => {

    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addNewOffers={addNewOffers} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}


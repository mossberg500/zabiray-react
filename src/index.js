import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {addNewOffers, subscribe, updateNewOffers} from "./app/redux/state";
import ReactDOM from "react-dom";
import App from "./App";


let renderEntireTree = () => {

    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 addNewOffers={addNewOffers}
                 updateNewOffers={updateNewOffers}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );

}
renderEntireTree(state);

//мы передаём одну фукцию renderEntireTree в другую subscribe - callback
subscribe(renderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

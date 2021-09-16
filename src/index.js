import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./app/redux/state";
import ReactDOM from "react-dom";
import App from "./App";


let renderEntireTree = (state) => {

    ReactDOM.render(
        <React.StrictMode>
            {/*здесь вызываем getState()*/}
            <App state={store.getState()}
                 /*а здесь не вызываем addNewOffers,
                 а передаём параметром функцию - callback
                  а также биндим функцию (связываем со стором )*/
                 addNewOffers={store.addNewOffers.bind(store)}
                 /*updateNewOffers - callback*/
                 updateNewOffers={store.updateNewOffers.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );

}
renderEntireTree(store.getState());

//мы передаём одну фукцию renderEntireTree в другую subscribe - callback
store.subscribe(renderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

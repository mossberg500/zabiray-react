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
                 dispatch={store.dispatch.bind(store)} />
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

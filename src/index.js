import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./app/redux/redux-store";
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from "react-redux";


let renderEntireTree = (state) => {
    debugger;

    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>

                {/*         <App state={state}
                 dispatch={store.dispatch.bind(store)} store={store} />
   */}

                <App/>
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );

}
renderEntireTree(store.getState());


store.subscribe(() => {
    // передаем новый стейт подписчику и отрисовываем UI
    let state = store.getState();
    renderEntireTree(state);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

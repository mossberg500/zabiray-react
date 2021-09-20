import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./app/redux/redux-store";
import ReactDOM from "react-dom";
import App from "./App";
import StoreContext from "./StoreContext";


let renderEntireTree = (state) => {
    debugger;

    ReactDOM.render(
        <React.StrictMode>
        {/*    <StoreContext.Provider value={store}>
                <App />
        */}
        {/*здесь вызываем getState()*/}
            <App state={state}
                 dispatch={store.dispatch.bind(store)} store={store} />

      {/*      </StoreContext.Provider>*/}
        </React.StrictMode>,
        document.getElementById('root')
    );

}
renderEntireTree(store.getState());


store.subscribe(() => {
    // передаем новый стейт подписчику и отрисовываем UI
        let state = store.getState();
        renderEntireTree(state);
} );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogContextData = [
       {id: 1, name: 'Oleg'},
       {id: 2, name: 'Andrey'},
       {id: 3, name: 'Sasha'},
       {id: 4, name: 'Sveta'},
       {id: 5, name: 'Victor'},
       {id: 6, name: 'Vlad'}
   ]

   let messageData = [
       {id: 1, message: 'Hi'},
       {id: 2, message: 'How are you'},
       {id: 3, message: 'Hi hi'},
       {id: 4, message: 'Good moning'},
       {id: 5, message: 'Good after'},
       {id: 6, message: 'List'}
   ]


ReactDOM.render(
 <React.StrictMode>
   <App  dialogContextData={dialogContextData} messageData={messageData} />
 </React.StrictMode>,
 document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

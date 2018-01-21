import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {addExpense} from './actions/expenses';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const store=configureStore();
console.log(store.getState());
/*const boiler = <div>
        <p>JSX is working</p>
    </div>;

ReactDOM.render(boiler,document.getElementById('app'));
*/
store.dispatch(addExpense({ description: 'Water Bill',note:'Water Bill for March', amount: 100, createdAt: 1514788200000 }));
const jsx= (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('app'));
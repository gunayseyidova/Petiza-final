import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';

import {configureStore} from '@reduxjs/toolkit';
import { Provider} from 'react-redux';
import cartReducer, { getTotals } from './features/cartSlice';

const store = configureStore({
        reducer:{
                cart:cartReducer,
        },
})

store.dispatch(getTotals())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
         <Provider store={store}>
                 <App />
         </Provider>
);


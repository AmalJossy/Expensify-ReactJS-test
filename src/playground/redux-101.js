import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';


const store = createStore((state = {count:1}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const incby= typeof action.incby === 'number' ? action.incby : 1 ;
            return {
                count: state.count + incby
            }
        default:
        return state;
    }
    
});


console.log(store.getState());
const countup= () => {
    store.dispatch({
        type:'INCREMENT',
        incby : 5
    })
}
const template= <div>
    <h1>Redux tuts</h1>
    <h2>count: {store.getState().count}</h2>
    <button onClick={countup}>Increment</button>
</div>

ReactDOM.render(template,document.getElementById('app'));
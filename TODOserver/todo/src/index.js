// import React from 'react';
// import ReactDOM from 'react-dom';
// import {Provider} from 'react-redux';
// import {createStore} from 'redux';
// import Reducers from './reducer'

// import App from './App';

// ReactDOM.render(
//     <Provider store={createStore(Reducers)}>
//         <App />
//     </Provider>,
//     document.getElementById('root'));


import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import {Provider} from 'react-redux';
import {createStore,compose,applyMiddleware} from 'redux';
import Reducers from './reducer'
import reduxThunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(Reducers,composeEnhancers(applyMiddleware(reduxThunk)));

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>,
    document.getElementById('root')
);



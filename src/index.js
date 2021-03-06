import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './index.css';
import pokemonReducer from './reducers/pokemonReducer';
import { logActions, reportError } from './middlewares';

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE || compose;

const composedEnhancers = composeAlt(
	applyMiddleware(thunk, logActions, reportError),
);

const store = createStore(pokemonReducer, composedEnhancers);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'),
);

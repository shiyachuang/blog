import React from 'react';
import {render} from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from '../reducers';
import { Provider, connect } from 'react-redux'
import Home from './Home';
import HelpDetail from './HelpDetail';

import { createBrowserHistory } from 'history'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { connectRouter, routerMiddleware } from 'connected-react-router'


const history = createBrowserHistory()


let createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);
let store = createStoreWithMiddleware(rootReducer);

// const store = createStore(
//   connectRouter(history)(rootReducer), // new root reducer with router state
//   {}, // initialState
//   compose(  // middleware
//     applyMiddleware(
//       routerMiddleware(history), // for dispatching history actions
//       ReduxThunk
//     )
//   )
// )

import { Switch } from 'react-router'
import { ConnectedRouter } from 'connected-react-router'


render (
	<Provider store={store}>
		<Router>
			<Route path="/home" component={Home} />
		</Router>
	</Provider>
);

// render(
// 	<Provider store={store}>
// 		<ConnectedRouter history={history}>
// 			<App>
// 				<Link to="/home">首页</Link>
// 				<Switch>
// 					<Route exact path="/home" component={Home} />
// 					<Route path="/detail" component={HelpDetail} />		
// 				</Switch>
// 			</App>
// 		</ConnectedRouter>
// 	</Provider>, 
// 	document.getElementById('container')
// );


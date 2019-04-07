import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes'
import './components/style/minify/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
//MDBReact
import 'mdbreact/dist/css/mdb.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

//Tools
import thunk from 'redux-thunk'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

//Firebase Tools
import { getFirestore, reduxFirestore } from 'redux-firestore'
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase'
//Reducers
import rootReducers from './store/reducers/rootReducers'
//Config
	//Firebase Config
	import firebaseConfig from './config/firebaseConfig'

const store = createStore(rootReducers,
		compose(
			applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
			reduxFirestore(firebaseConfig),
			reactReduxFirebase(firebaseConfig,{useFirestoreForProfile: true, userProfile: 'dataUsers', attachAuthIsReady: true})
		)
	)

ReactDOM.render(
	<Provider store={store}>
	<Routes />
	</Provider>, document.getElementById('root'));

serviceWorker.unregister();

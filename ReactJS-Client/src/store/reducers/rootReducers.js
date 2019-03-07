import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'
import countryReducer from './countryReducer'
import firebaseCrudReducer from './firebaseCrudReducer'
import firebaseAuthReducer from './firebaseAuthReducer'

const rootReducers = combineReducers({
	firebase: firebaseReducer,
	firestore: firestoreReducer,
	firebaseCrud: firebaseCrudReducer,
	auth: firebaseAuthReducer,
	countries: countryReducer
})

export default rootReducers
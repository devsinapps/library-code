import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'
import firebaseCrudReducer from './firebaseCrudReducer'
import firebaseAuthReducer from './firebaseAuthReducer'

const rootReducers = combineReducers({
	firebase: firebaseReducer,
	firestore: firestoreReducer,
	firebaseCrud: firebaseCrudReducer,
	auth: firebaseAuthReducer
})

export default rootReducers
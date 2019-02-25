import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'
import firebaseCrudReducer from './firebaseCrudReducer'


const rootReducers = combineReducers({
	firebase: firebaseReducer,
	firestore: firestoreReducer,
	firebaseCrud: firebaseCrudReducer
})

export default rootReducers
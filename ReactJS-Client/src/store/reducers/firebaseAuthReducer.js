const initState = {
	authError: ''
}

const firebaseAuthReducer = ( state = initState, action ) => {
	switch(action.type){
		case "SIG_IN_SUCCESS":
			console.log('SIG_IN_SUCCESS')
			return{
				...state,
				authError: ''
			}

		case "SIGN_IN_ERROR":
			console.log('SIGN_IN_ERROR')
			return{
				...state,
				authError:"SIGN_IN_ERROR" 
			}
		case "SIGN_UP_SUCCESS":
			console.log('SIGN_UP_SUCCESS')
			return{
				...state,
				authError: ''
			}
		case "SIGN_UP_ERROR":
			console.log('SIGN_UP_ERROR')
			return{
				...state,
				authError:"SIGN_UP_ERROR" 
			}

		case "SIGNOUT_SUCCESS":
			console.log('SIGNOUT_SUCCESS')
			return{
				...state,
				authError:"" 
			}

		case "SIGNOUT_ERROR":
			console.log('SIGNOUT_ERROR')
			return{
				...state,
				authError:"SIGNOUT_ERROR" 
			}
		default:
			return state;
	}
}

export default firebaseAuthReducer
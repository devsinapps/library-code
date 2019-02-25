const initState = {
	crudError: ''
}

const firebaseCrudReducer = ( state = initState, action ) => {
	switch(action.type){
		case "ADD_DATA_SUCCESS":
			console.log("ADD_DATA_SUCCESS")
			return {
				...state,
				crudError: ''
			}

		case "ADD_DATA_ERROR":
			console.log("ADD_DATA_ERROR")
			return {
				...state,
				crudError: 'ADD_DATA_ERROR'
			}

		case "UPDATE_DATA_SUCCESS":
			console.log("UPDATE_DATA_SUCCESS")
			return {
				...state,
				crudError: ''
			}

		case "UPDATE_DATA_ERROR":
			console.log("UPDATE_DATA_ERROR")
			return {
				...state,
				crudError: 'UPDATE_DATA_ERROR'
			}

		case "DELETE_DATA_SUCCESS":
			console.log("DELETE_DATA_SUCCESS")
			return {
				...state,
				crudError: ''
			}

		default:
			return state
	}
}

export default firebaseCrudReducer
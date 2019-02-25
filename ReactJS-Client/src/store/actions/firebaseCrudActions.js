export const addData = (newData) => {
	return(dispatch, getState, {getFirestore})=>{
		const firestore = getFirestore();

		firestore.collection('users').add({
			...newData,
			firstName: newData.firstName,
			lastName: newData.lastName,
			age: newData.age,
			email: newData.email,
			address: newData.address
		}).then(()=>{
			dispatch({
				type: "ADD_DATA_SUCCESS"
			})
		}).catch((err)=>{
			dispatch({
				type: "ADD_DATA_ERROR",
				err
			})
		})
	}
}

export const updateData = (data) => {
	return(dispatch, getState, {getFirestore})=>{
		const firestore = getFirestore();

		firestore.collection('users').doc(data.userId).set({
			firstName: data.firstName,
			lastName: data.lastName,
			age: data.age,
			email: data.email,
			address: data.address
		}).then(()=>{
			dispatch({
				type: "UPDATE_DATA_SUCCESS"
			})
		}).catch((err)=>{
			dispatch({
				type: "UPDATE_DATA_ERROR",
				err
			})
		})
	}
}

export const deleteData = (userId) => {
	return(dispatch, getState, {getFirestore})=>{
		const firestore = getFirestore();

		firestore.collection('users').doc(userId).delete().then(()=>{
			dispatch({
				type: "DELETE_DATA_SUCCESS"
			})
		})
	}
}
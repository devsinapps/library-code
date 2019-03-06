export const signIn = (credentials) => {
	return(dispatch, getState, {getFirebase})=>{
		const firebase = getFirebase();

		firebase.auth().signInWithEmailAndPassword(
			credentials.email,
			credentials.password
		).then(()=>{
			dispatch({
				type: "SIG_IN_SUCCESS"
			})
		}).catch((err)=>{
			dispatch({
				type: "SIGN_IN_ERROR",
				err
			})
		})
	}
}

export const signUp = (newUSer) => {
	return(dispatch, getState, {getFirebase, getFirestore})=>{
		const firebase = getFirebase();
		const firestore = getFirestore();

		firebase.auth().createUserWithEmailAndPassword(
			newUSer.email,
			newUSer.password
		).then((resp)=>{
			return firestore.collection('dataUsers').doc(resp.user.uid).set({
				firstName: newUSer.firstName,
				lastName: newUSer.lastName,
				age: newUSer.age,
				gender: newUSer.gender,
				email: newUSer.email,
				initials: newUSer.firstName[0] + newUSer.lastName[0],
				navColor: '#78e08f',
				createdAt: new Date()
			})
		}).then(()=>{
			dispatch({
				type: "SIGN_UP_SUCCESS"
			})
		}).catch((err)=>{
			dispatch({
				type: "SIGN_UP_ERROR",
				err
			})
		})
	}
}
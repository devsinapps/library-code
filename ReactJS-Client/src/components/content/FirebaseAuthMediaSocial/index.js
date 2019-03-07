import React from 'react'
//Tools
import firebase from './../../../config/firebaseConfig'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
//Container
import { ContainerRow, ColCard } from './../../grid/GridBootstrap'

class FirebaseAuthMediaSocial extends React.Component{
	state = {
		isSignedin: false
	}

	//Options Sign In Firebase
	uiConfig = {
		signInFlow: "popup",
		signInOptions: [
			firebase.auth.GoogleAuthProvider.PROVIDER_ID,
			firebase.auth.FacebookAuthProvider.PROVIDER_ID,
			firebase.auth.GithubAuthProvider.PROVIDER_ID,
			firebase.auth.EmailAuthProvider.PROVIDER_ID,
		],
		callbacks: {
			signInSuccess: () => false
		}
	}

	componentDidMount(){
		firebase.auth().onAuthStateChanged(user => {
			this.setState({
				isSignedin: !!user
			})
			console.log(user)
		})

	}
	render(){
		const { isSignedin } = this.state
		return(
			<div id='FirebaseAuthMediaSocial'>
				<ContainerRow>
					<ColCard lgCol='12' mdCol='12' smCol='12' xsCol='12' colClass='mx-auto' brCard='mb-3' tlCard='Auth'>
					{isSignedin ?
						(
							<div>
								<div> User Signed In </div>
								<h1> Welcome {firebase.auth().currentUser.displayName}</h1>
								<img alt='profile pict' src={firebase.auth().currentUser.photoURL} />
								<br />
								<button onClick={() => firebase.auth().signOut()}> Sign Out </button>
							</div>
						)
						:
						(
							<StyledFirebaseAuth
								uiConfig={this.uiConfig}
								firebaseAuth={firebase.auth()}
							/>
						) 
					}

					</ColCard>
				</ContainerRow>
			</div>
		)
	}
}

export default FirebaseAuthMediaSocial
import React from 'react'
//Actions
import { signOut } from './../../../store/actions/firebaseAuthActions'
//Tools
import { connect } from 'react-redux'
//Container
import { ContainerRow, ColCard } from './../../grid/GridBootstrap'
//Reactstrap
import { Button } from 'reactstrap'
//Component
import SignIn from './SignIn'
import SignUp from './SignUp'
import AuthView from './AuthView'
class FirebaseAuth extends React.Component{
	state = {
		caseAuth: 1
	}

	signInCase = () => {
		this.setState({
			caseAuth: 1
		})
	}

	signUpCase = () => {
		this.setState({
			caseAuth: 2
		})
	}

	render(){
		const { caseAuth } = this.state
		const { auth, profile } = this.props
		const Auth = caseAuth == 1 ? <SignIn /> : <SignUp />;
		const ViewProfile = auth.uid !== null ? null  : <AuthView profile={profile}/>;
		return(
			<div id='FirebaseAuth'>
				<Button color='primary' onClick={this.signInCase}> Sign In </Button> {' '}
				<Button color='info' onClick={this.signUpCase}> Sign Up </Button> {' '}
				<ContainerRow>
					<ColCard lgCol='8' mdCol='8' smCol='8' xsCol='8' colClass='mx-auto' brCard='mb-3' tlCard='Firebase Auth'>
						{Auth}
					</ColCard>
				</ContainerRow>
				<AuthView profile={profile}/>
				<Button color='info' onClick={this.props.signOut}> Sign Out </Button> {' '}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	console.log(state)
	return{
		auth: state.firebase.auth,
		profile: state.firebase.profile
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		signOut: () => dispatch(signOut())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(FirebaseAuth)
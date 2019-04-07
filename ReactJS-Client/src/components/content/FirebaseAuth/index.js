import React from 'react'
//Actions
import { signOut } from './../../../store/actions/firebaseAuthActions'
//Tools
import { connect } from 'react-redux'
//Container
import { ContainerFluidRow, Collapsible } from './../../grid/GridBootstrap'
//Reactstrap
import { Button } from 'reactstrap'
//Component
import SignIn from './SignIn'
import SignUp from './SignUp'
import { AuthView } from './AuthView'
class FirebaseAuth extends React.Component{
	state = {
		caseAuth: 1
	}

	formAction = (mode) => {
		switch(mode){
			case 'SIGNIN':
				this.setState({
					caseAuth: 1
				})
				break;

			case 'SIGNUP':
				this.setState({
					caseAuth: 2
				})
				break;

			default: 
				return null
		}
	}

	render(){
		const { caseAuth } = this.state
		const { auth, profile } = this.props
		const Auth = caseAuth == 1 ? <SignIn /> : <SignUp />;

		return(
			<div id='FirebaseAuth'>
				<Button color='primary' onClick={()=>this.formAction('SIGNIN')}> Sign In </Button> {' '}
				<Button color='info' onClick={()=>this.formAction('SIGNUP')}> Sign Up </Button> {' '}
				<ContainerFluidRow rowClass='justify-content-center'>
					<Collapsible lgCol='4' mdCol='4' smCol='4' brCard='mb-3' tlCard='Firebase Auth'>
						{Auth}
					</Collapsible>
				</ContainerFluidRow>
				<AuthView profile={profile}/>
				<Button color='info' onClick={this.props.signOut}> Sign Out </Button> {' '}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
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
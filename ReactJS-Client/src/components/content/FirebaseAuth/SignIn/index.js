import React from 'react'
//Actions
import { signIn } from './../../../../store/actions/firebaseAuthActions'
//Tools
import { connect } from 'react-redux'
//Reactstrap
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
class SignIn extends React.Component{
	state = {
		email: '',
		password: ''
	}

	onChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	onSubmit = (e) => {
		e.preventDefault();
		this.props.signIn(this.state)
	} 
	render(){
		return(
			<Form onSubmit={this.onSubmit}>
				<FormGroup>
					<Label htmlFor='email'> Email </Label>
					<Input
						id='email'
						type='email'
						onChange={this.onChange}
					/>
				</FormGroup>
				<FormGroup>
					<Label htmlFor='password'> Password </Label>
					<Input
						id='password'
						type='password'
						onChange={this.onChange}
					/>
				</FormGroup>
				<FormGroup className='text-center'>
					<Button block color='primary'> Sign In </Button>
				</FormGroup>
			</Form>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		signIn: (credentials) => dispatch(signIn(credentials))
	}
}

export default connect(null,mapDispatchToProps)(SignIn)
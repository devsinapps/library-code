import React from 'react'
//Actions
import { signUp } from './../../../../store/actions/firebaseAuthActions'
//Tools
import { connect } from 'react-redux'
//Component
import { UserInfo } from './UserInfo'
import { UserContact } from './UserContact'
import { UserPass } from './UserPass'
class SignUp extends React.Component{
	state = {
		step: 1,
		firstName: '',
		lastName: '',
		gender: '',
		age: '',
		email: '',
		phone: '',
		password: '',
		keypass: ''
	}

	onChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	nextStep = (e) => {
		const { step } = this.state
		this.setState({
			step: step + 1
		})
	}

	//Handle Component User Contact
	stepAtContact = (e) => {
		const { step, email } = this.state
		const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if(!regex.test(email)){
			alert('email invalid')
		}else{
			this.setState({
				step: step + 1
			})
		}
	}

	onChangeOnContact = (e) => {
		const { phone } = this.state
		const rest = e.target.value;
		if(e.target.validity.valid){
			this.setState({
				phone: rest
			})
		}else if(rest === '' || rest === '-'){
			this.setState({
				phone: rest
			})
		}
	}

	//Handle Component User Password
	onSubmit = (e) => {
		e.preventDefault();
		const { firstName, lastName, gender, age, email, phone, password, keypass } = this.state
		const newUser = {
			firstName, 
			lastName, 
			gender, 
			age, 
			email, 
			phone, 
			password
		}
		if(password !== keypass){
			alert('Password Failed');
		}else{
			this.props.signUp(newUser)
		}
	}
	render(){
		const { step } = this.state
		const { firstName, lastName, gender, age, email, phone, password, keypass } = this.state
		const value = { firstName, lastName, gender, age, email, phone, password, keypass }
		switch(step){
			case 1:
				return(
					<UserInfo 
						value={value}
						onChange={this.onChange}
						nextStep={this.nextStep}
					/>
				)
			case 2:
				return(
					<UserContact 
						value={value}
						onChange={this.onChange}
						onChangeOnContact={this.onChangeOnContact}
						stepAtContact={this.stepAtContact}
					/>
				)
			case 3:
				return(
					<UserPass 
						value={value}
						onChange={this.onChange}
						onSubmit={this.onSubmit}
					/>
				)
			default:
				return null
		}
	}
}

const mapStateToProps = (state) => {
	return{

	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		signUp: (newUser) => dispatch(signUp(newUser))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
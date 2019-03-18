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

	stepAuth = (mode) => {
		const { step, firstName, lastName, gender, age, email, phone, password, keypass } = this.state
		if(mode === 'UserInfo'){
			this.setState({
				step: step + 1
			})
		}else if(mode === 'UserContact'){
			const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			if(!regex.test(email)){
				alert('Email Invalid')
			}else{
				this.setState({
					step: step + 1
				})
			}
		}else if(mode === 'SignUp'){
			const parseAge = parseInt(age);
			const newUser = {
				firstName, 
				lastName, 
				gender, 
				age: parseAge, 
				email, 
				phone, 
				password
			}
			if(password !== keypass){
				alert('Password Not Confirmed')
			}else{
				this.props.signUp(newUser)
			}
		}
	}

	render(){
		const { step, firstName, lastName, gender, age, email, phone, password, keypass } = this.state
		const value = { firstName, lastName, gender, age, email, phone, password, keypass }
		switch(step){
			case 1:
				return(
					<UserInfo 
						value={value}
						onChange={this.onChange}
						stepAuth={this.stepAuth}
					/>
				)
			case 2:
				return(
					<UserContact 
						value={value}
						onChange={this.onChange}
						onChangeOnContact={this.onChangeOnContact}
						stepAuth={this.stepAuth}
					/>
				)
			case 3:
				return(
					<UserPass 
						value={value}
						onChange={this.onChange}
						stepAuth={this.stepAuth}
					/>
				)
			default:
				return null
		}
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		signUp: (newUser) => dispatch(signUp(newUser))
	}
}

export default connect(null, mapDispatchToProps)(SignUp)
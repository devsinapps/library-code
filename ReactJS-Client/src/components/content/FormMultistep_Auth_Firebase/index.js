import React from 'react'
//Actions
import { signIn, signUp } from './../../../store/actions/firebaseAuthActions'
//Tools
import { connect } from 'react-redux'
//Container 
import { ContainerRow, ColCard } from './../../grid/GridBootstrap'
//Component
import { UserInfo } from './UserInfo'
import { UserContact } from './UserContact'
import { UserPass } from './UserPass'
class FMAuth_Firebase extends React.Component{
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

	onSubmit = (e) => {
		e.preventDefault();
		const { firstName, lastName, gender, age, email, phone, password } = this.state
		const newUser = {
			firstName, 
			lastName, 
			gender, 
			age, 
			email, 
			phone, 
			password
		}

		this.props.signUp(newUser)
	}
	render(){
		console.log(this.state)
		const { step } = this.state
		const { firstName, lastName, gender, age, email, phone, password, keypass } = this.state
		const value = { firstName, lastName, gender, age, email, phone, password, keypass }
		switch(step){
			case 1:
				return(
					<div id='FMAuth_Firebase'>
						<ContainerRow>
							<ColCard lgCol='6' mdCol='6' smCol='6' xsCol='6' colClass='mx-auto' brCard='mb-3' tlCard='User Info'>
								<UserInfo 
								value={value}
								onChange={this.onChange}
								nextStep={this.nextStep}
								/>
							</ColCard>
						</ContainerRow>
					</div>
				)
			case 2:
				return(
					<div id='FMAuth_Firebase'>
						<ContainerRow>
							<ColCard lgCol='6' mdCol='6' smCol='6' xsCol='6' colClass='mx-auto' brCard='mb-3' tlCard='User Info'>
								<UserContact 
								value={value}
								onChange={this.onChange}
								nextStep={this.nextStep}
								/>
							</ColCard>
						</ContainerRow>
					</div>
				)
			case 3:
				return(
					<div id='FMAuth_Firebase'>
						<ContainerRow>
							<ColCard lgCol='6' mdCol='6' smCol='6' xsCol='6' colClass='mx-auto' brCard='mb-3' tlCard='User Info'>
								<UserPass 
								value={value}
								onChange={this.onChange}
								nextStep={this.nextStep}
								onSubmit={this.onSubmit}
								/>
							</ColCard>
						</ContainerRow>
					</div>
				)
			default:
				return null
		}
	}
}

const mapStateToProps = (state) => {
	console.log(state)
	return{

	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		signUp: (newUser) => dispatch(signUp(newUser))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(FMAuth_Firebase)
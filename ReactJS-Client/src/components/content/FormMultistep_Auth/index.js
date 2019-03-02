import React from 'react'
//Container
import { ContainerRow, ColCard } from './../../grid/GridBootstrap'
//Component 
import { UserInfo } from './UserInfo'
import { UserContact } from './UserContact'
import { UserPass } from './UserPass'
import { UserSuccess } from './UserSuccess'
export class FMAuth extends React.Component{
	state = {
		step: 1,
		firstName: '',
		lastName: '',
		age: '',
		gender: '',
		email: '',
		phone: '',
		password: '',
		checkpass: ''
	}

	nextStep = (e) => {
		e.preventDefault();
		const { step } = this.state
		this.setState({
			step: step + 1
		})
	}

	onChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	//Handle Button on Info Component
	nextStepInfo = (e) => {
		e.preventDefault();
		const { step, email } = this.state
		const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if(!regex.test(email)){
			return alert('Email Invalid')
		}else{
			this.setState({
				step: step + 1
			})
		}
	}

	//Handle Form Input Phone
	onChangeOnContact = (e) => { 
		const { phone } = this.state
		const rest  = e.target.value
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

	//Handle Button Sign Up
	onSubmit = (e) => {
		e.preventDefault();
		const { step, password, checkpass } = this.state
		if(password !== checkpass){
			return alert('Password Wrong')
		}else{
			this.setState({
				step: step + 1
			})
		}
	}
	render(){
		const { step } = this.state 
		const { firstName, lastName, age, gender, email, phone, password, checkpass } = this.state
		const value = { firstName, lastName, age, gender, email, phone ,password, checkpass }
		switch(step){
			case 1:
				return(
					<ContainerRow>
						<ColCard lgCol='5' mdCol='5' smCol='5' xsCol='5' colClass='mx-auto' brCard='mb-3' tlCard='User Info'>
							<UserInfo 
								value={value}
								nextStep={this.nextStep}
								onChange={this.onChange}
							/>
						</ColCard>
					</ContainerRow>
				)
			case 2:
				return(
					<ContainerRow>
						<ColCard lgCol='5' mdCol='5' smCol='5' xsCol='5' colClass='mx-auto' brCard='mb-3' tlCard='User Contact'>
							<UserContact
								value={value} 
								nextStepInfo={this.nextStepInfo}
								onChange={this.onChange}
								onChangeOnContact={this.onChangeOnContact}
							/>
						</ColCard>
					</ContainerRow>
				)
			case 3:
				return(
					<ContainerRow>
						<ColCard lgCol='5' mdCol='5' smCol='5' xsCol='5' colClass='mx-auto' brCard='mb-3' tlCard='User Security'>
							<UserPass 
								value={value}
								onSubmit={this.onSubmit}
								onChange={this.onChange}
							/>
						</ColCard>
					</ContainerRow>
				)
			case 4:
				return(
					<UserSuccess 
						value={value}
					/>
				)
			default:
			return null
		}
	}
}
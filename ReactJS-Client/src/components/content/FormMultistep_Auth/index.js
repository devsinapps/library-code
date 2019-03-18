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
	
	stepAuth = (mode) => {
		const { step, firstName, lastName, age, gender, email, phone, password, checkpass } = this.state
		switch(mode){
			case 'UserInfo':
				this.setState({
					step: step + 1
				})
				break;
			case 'UserContact':
				const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				if(!regex.test(email)){
					alert('Email Invalid')
				}else{
					this.setState({
						step: step + 1
					})
				}
				break;
			case 'SignUp':
				if(password !== checkpass){
					alert('Password not confirmed')
				}else{
					this.setState({
						step: step + 1
					})
				}
				break;
			default:
				return null
		}
	}

	onChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
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
								stepAuth={this.stepAuth}
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
								stepAuth={this.stepAuth}
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
								stepAuth={this.stepAuth}
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
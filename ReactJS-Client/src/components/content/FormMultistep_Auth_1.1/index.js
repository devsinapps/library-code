import React, { Component } from 'react'
//grid
import { ContainerFluidRow, ColCard } from './../../grid/GridBootstrap'
//pages
import { UserForm } from './userForm'
export class FMAuth_1_1 extends Component{
	state = {
		step: 1,
		name: '',
		email: '',
		phone: ''
	}

	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	toggle = (mode) => {
		switch(mode){
			case 'keyForm':
				this.setState({
					step: 2
				})
				break;

			case 'Success':
				this.setState({
					step: 3
				})

			default:
				return null
		}
	}
	render(){
		const { step, name, email, phone } = this.state
		const value = { name, email, phone }
		switch(step){
			case 1:
				return(
					<div className='FMAuth_1_1'>
						<ContainerFluidRow rowClass='justify-content-center'>
							<ColCard lgCol='6' mdCol='6' smCol='6' tlCard='' brCard='mb-3'>
								<UserForm 
									value={value}
									handleChange={this.handleChange}
									toggle={this.toggle}
								/>
							</ColCard>
						</ContainerFluidRow>
					</div>
				)
				break;
			default:
				return null
		}
		
	}
}
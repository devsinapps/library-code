import React from 'react'

//Container
import { ContainerFluidRow, Collapsible } from './../../grid/GridBootstrap'
//Reactstrap
import { CardTitle, Button } from 'reactstrap'
//Component
import { DataForm } from './DataForm'
export class DataDetail extends React.Component{
	state = {
		user: {},
		userId: 0,
		name: '',
		username: '',
		email: '',
		phone: '',
		website: ''
	}

	componentDidMount(){
		const userId = this.props.match.params.user_id
		fetch('https://jsonplaceholder.typicode.com/users/'+userId)
		.then(response => response.json())
		.then(data => this.setState({
			user: data
		}))
	}

	getDataToForm = async (e) => {
		e.preventDefault();
		const userId = this.props.match.params.user_id
		const api_get = await fetch('https://jsonplaceholder.typicode.com/users/'+userId)
		const data = await api_get.json();
		this.setState({
			userId: data.id,
			name: data.name,
			username: data.username,
			email: data.email,
			phone: data.phone,
			website: data.website
		})
		
	}

	onChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	updateUser = () => {
		const { user } = this.state
		const { userId, name, username, email, phone, website } = this.state
		user.id = userId
		user.name = name
		user.username = username
		user.email = email
		user.phone = phone
		user.website = website
		this.setState({
			user: user
		})
	}
	render(){
		const { user, userId, name, username, email, phone, website } = this.state
		const value = { userId, name, username, email, phone, website }
		const styleDisplay = userId > 0 ? 'inline-block' : 'none';
		if(user){
			return(
				<div>
					<ContainerFluidRow rowClass='justify-content-center'>
						<Collapsible lgCol='6' mdCol='6' smCol='6' brCard='mb-3' tlCard='Data Detail'>
							<CardTitle> {user.name} </CardTitle>
							<ul>
								<li> {user.username} </li>
								<li> {user.email} </li>
								<li> {user.website} </li>
							</ul>
							<Button onClick={this.getDataToForm}> Update </Button>
						</Collapsible> 
					</ContainerFluidRow>
					<ContainerFluidRow rowClass='justify-content-center'>
						<Collapsible lgCol='6' mdCol='6' smCol='6' brCard='mb-3' tlCard='Data Detail'>
							<DataForm 
								value={value}
								onChange={this.onChange}
								updateUser={this.updateUser}
							/>
						</Collapsible> 
					</ContainerFluidRow>
				</div>
			)
		}
		else{
			return(
				<div>
					Loading 
				</div>
			)
		}
	}
}
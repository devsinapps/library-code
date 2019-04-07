import React, { Component } from 'react'
//Tools
import axios from 'axios'
//Container
import { ContainerFluidRow, Collapsible } from './../../grid/GridBootstrap'
//Component
import { DataTable } from './DataTable'
import { DataForm } from './DataForm'
export class ArrObjCrud extends Component{
	state = {
		users: [],
		userId: '',
		name: '',
		username: '',
		email: '',
		phone: '',
		website: ''
	}

	componentDidMount(){
		axios.get('https://jsonplaceholder.typicode.com/users')
		.then(response => this.setState({
			users: response.data
		}))
	}

	onChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}
	
	formAction = (mode, data) => {
		const { users, userId, name, username, email, phone, website } = this.state
		switch(mode){
			case 'GETDATA':
				this.setState({
					userId: data.id,
					name: data.name,
					username: data.username,
					email: data.email,
					phone: data.phone,
					website: data.website
				})
				break;

			case 'SAVE':
				const newData = {
					id: new Date(),
					name, 
					username, 
					email, 
					phone, 
					website
				}
				if(name === '' || username === '' || email === '' || phone === '' || website === ''){
					return alert('Data Masih Ada Yang Kosong')	
				}
				else{
					users.unshift(newData)
					this.setState({
						users: users,
						userId: '',
						name: '',
						username: '',
						email: '',
						phone: '',
						website: ''
					})
				} 
				break;

			case 'UPDATE':
				const checkUpd = window.confirm('Update?')
				if(checkUpd === true){
					for(let i = 0; i < users.length; i++){
						if(users[i].id && users[i].id === userId){
							users[i].id = userId
							users[i].name = name
							users[i].username = username
							users[i].email = email
							users[i].phone = phone
							users[i].website = website
							this.setState({
								users: users,
								userId: '',
								name: '',
								username: '',
								email: '',
								phone: '',
								website: ''
							})
						}
					}
				}
				else{
					return null
				}
				break;

			case 'DELETE':
				const checkDel = window.confirm('Delete?')
				if(checkDel === true){
					for(let i = 0; i < users.length; i++){
						if(users[i].id && users[i].id === userId){
							users.splice(i, 1)
							this.setState({
								users: users,
								userId: '',
								name: '',
								username: '',
								email: '',
								phone: '',
								website: ''
							})
						}
					}
				}
				break;

			case 'RESET':
				this.setState({
					userId: '',
					name: '',
					username: '',
					email: '',
					phone: '',
					website: ''
				});
				break;

			default:
				return null
		}
	}
	render(){
		const { users } = this.state
		const { name, username, email, phone, website } = this.state
		const value = { name, username, email, phone, website }
		return(
			<div id='ArrObjCrud'>
				<ContainerFluidRow>
					<Collapsible lgCol='12' mdCol='12' smCol='12'  brCard='mb-3' tlCard='Array Object Crud'>
						<DataTable 
						users={users}
						getDataRow={this.getDataRow}
						formAction={this.formAction}
						/>
					</Collapsible>
					<Collapsible lgCol='12' mdCol='12' smCol='12' brCard='mb-3' tlCard='Array Object Crud'>
						<DataForm 
							value={value}
							onChange={this.onChange}
							formAction={this.formAction}
						/>
					</Collapsible>
				</ContainerFluidRow>
			</div>
		)
	}
}
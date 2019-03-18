import React, { Component } from 'react'
//Tools
import axios from 'axios'
//Container
import { ContainerRow, ColCard } from './../../grid/GridBootstrap'
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

	getDataRow = (user) => {
		this.setState({
			userId: user.id,
			name: user.name,
			username: user.username,
			email: user.email,
			phone: user.phone,
			website: user.website
		})
	}

	onChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}
	
	crudMode = (mode) => {
		const { users, userId, name, username, email, phone, website } = this.state
		switch(mode){
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
				<ContainerRow>
					<ColCard lgCol='6' mdCol='6' smCol='6' xsCol='6' brCard='mb-3' tlCard='Array Object Crud'>
						<DataTable 
						users={users}
						getDataRow={this.getDataRow}
						/>
					</ColCard>
					<ColCard lgCol='6' mdCol='6' smCol='6' xsCol='6' brCard='mb-3' tlCard='Array Object Crud'>
						<DataForm 
							value={value}
							onChange={this.onChange}
							resetForm={this.resetForm}
							addData={this.addData}
							updateData={this.updateData}
							deleteData={this.deleteData}
							crudMode={this.crudMode}
						/>
					</ColCard>
				</ContainerRow>
			</div>
		)
	}
}
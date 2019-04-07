import React from 'react'

//Container
import { ContainerFluidRow, Collapsible } from './../../grid/GridBootstrap'
//Reactstrap
import { Button } from 'reactstrap'
//Component
import { DataTable } from './DataTable'
import { DataModal } from './DataModal'
export class ArrObjCrudModal extends React.Component{
	state = {
		users: [],
		modal: false,
		userId: '',
		name: '',
		username: '',
		email: '',
		phone: '',
		website: ''
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(data => this.setState({
			users: data
		}))
	}

	onChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	formAction = (mode, data) => {
		const { users, userId, modal, name, username, email, phone, website } = this.state
		switch(mode){
			case 'GETDATA':
				this.setState({
					modal: !this.state.modal,
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
						modal: !this.state.modal,
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
							//Update View
							this.setState({
								users: users,
								modal: !this.state.modal,
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
							users.splice(i,1)
							//Update View
							this.setState({
								users: users,
								modal: !this.state.modal,
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

			case 'RESET':
				this.setState({
					modal: !this.state.modal,
					userId: '',
					name: '',
					username: '',
					email: '',
					phone: '',
					website: ''
				})
				break;

			case 'OPEN':
				this.setState({
					modal: !this.state.modal,
					userId: '',
					name: '',
					username: '',
					email: '',
					phone: '',
					website: ''
				})
				break;

			default:
				return null
		}
	}

	render(){
		const { users, modal } = this.state
		const { userId, name, username, email, phone, website } = this.state
		const value = { userId, name, username, email, phone, website }
		return(
			<div id='ArrObjCrudModal'>
				<ContainerFluidRow>
					<Collapsible lgCol='12' mdCol='12' smCol='12' brCard='mb-3' tlCard='Data Table'>
						<DataTable 
							users={users}
							formAction={this.formAction}
						/>
						<Button color='primary' onClick={()=>this.formAction('OPEN', '')}> + </Button>
					</Collapsible>
				</ContainerFluidRow>
				<DataModal 
					modal={modal}
					value={value}
					onChange={this.onChange}
					formAction={this.formAction}
				/>
			</div>
		)
	}
}
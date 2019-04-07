import React, { Component } from 'react'
//Actions
import { addData, updateData, deleteData } from './../../../store/actions/firebaseCrudActions'
//Tools
import { connect } from 'react-redux'
//Container
import { ContainerFluidRow, Collapsible } from './../../grid/GridBootstrap'
//MDBReact
import { MDBInput, MDBBtn, ToastContainer, toast } from "mdbreact";
//Component
import { FirebaseTable } from './FirebaseTable'
import { FirebaseForm } from './FirebaseForm'
class FirebaseCrud extends Component{
	state = {
		userId: '',
		firstName: '',
		lastName: '',
		age: '',
		email: '',
		address: ''
	}

	onChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	notify = (type) => {
		switch(type){
			case "EMPTY":
			toast.error('Form Cannot Empty', {
	          autoClose: 3000
	        });
	        break;
		}
	}

	formAction = (mode, data) => {
		const { userId, firstName, lastName, age, email, address } = this.state
		switch(mode){
			case 'GETDATA':
				this.setState({
					userId: data.id,
					firstName: data.firstName,
					lastName: data.lastName,
					age: data.age,
					email: data.email,
					address: data.address
				})
				break;

			case 'SAVE':
				const newData = {
					firstName, 
					lastName, 
					age, 
					email, 
					address
				}
				if(firstName === '' || lastName === '' || age === '' || email === '' || address === ''){
					this.notify('EMPTY')
				}
				else{
					this.props.addData(newData)
					this.setState({
						firstName: '',
						lastName: '',
						age: '',
						email: '',
						address: ''
					})
				}
				break;

			case 'UPDATE':
				const dataUpd = {
					userId, 
					firstName, 
					lastName, 
					age, 
					email, 
					address
				}
				const checkUpd = window.confirm('Update?')
				if(checkUpd === true){
					this.props.updateData(dataUpd)
					this.setState({
						userId: '',
						firstName: '',
						lastName: '',
						age: '',
						email: '',
						address: ''
					})
				}
				else{
					return null
				}
				break;

			case 'DELETE':
				const checkDel = window.confirm('Delete?')
				if(checkDel === true){
					this.props.deleteData(userId)
					this.setState({
						userId: '',
						firstName: '',
						lastName: '',
						age: '',
						email: '',
						address: ''
					})
				}
				else{
					return null
				}
				break;

			case 'RESET':
				this.setState({
					userId: '',
					firstName: '',
					lastName: '',
					age: '',
					email: '',
					address: ''
				})
				break;

			default:
				return null
		}
	}

	render(){
		const { dataRoutes } = this.props
		const { userId,firstName, lastName, age, email, address } = this.state
		const value = { userId,firstName, lastName, age, email, address }
		return(
			<div id='ArrObjCrud'>
				<ContainerFluidRow>
					<Collapsible lgCol='12' mdCol='12' smCol='12' brCard='mb-3' tlCard='Firebase Crud'>
						<FirebaseTable 
							dataRoutes={dataRoutes}
							formAction={this.formAction}
						/>
					</Collapsible>
					<Collapsible lgCol='12' mdCol='12' smCol='12' brCard='mb-3' tlCard='Firebase Crud'>
						<FirebaseForm 
							value={value}
							onChange={this.onChange}
							formAction={this.formAction}
						/>
					</Collapsible>
					<ToastContainer
			          hideProgressBar={true}
			          newestOnTop={true}
			          autoClose={5000}
			        />
				</ContainerFluidRow>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		addData: (newData) => dispatch(addData(newData)),
		updateData: (dataUpd) => dispatch(updateData(dataUpd)),
		deleteData: (userId) => dispatch(deleteData(userId)),
	}
}

export default connect(null, mapDispatchToProps)(FirebaseCrud)
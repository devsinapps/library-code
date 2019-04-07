import React from 'react'
//Actions
import { addData, updateData, deleteData } from './../../../store/actions/firebaseCrudActions'
//Tools
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
//Container
import { ContainerFluidRow, Collapsible } from './../../grid/GridBootstrap'
//Reactstrap
import { Button } from 'reactstrap'
//Component
import { FirebaseTable } from './FirebaseTable'
import { FirebaseModal } from './FirebaseModal'
class FirebaseCrudModal extends React.Component{
	state = {
		modal: false,
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

	formAction = (mode, data) => {
		const { modal, userId, firstName, lastName, age, email, address } = this.state
		switch(mode){
			case 'GETDATA':
				this.setState({
					modal: !this.state.modal,
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
					return alert('Data Masih Ada yg Kosong')
				}
				else{
					this.props.addData(newData)
					this.setState({
						modal: !this.state.modal,
						firstName: '',
						lastName: '',
						age: '',
						email: '',
						address: ''
					})
				}
				break;

			case 'UPDATE':
				const dataUpdate = {
					userId, 
					firstName, 
					lastName, 
					age, 
					email, 
					address
				}
				const checkUpd = window.confirm('Update?')
				if(checkUpd === true){
					this.props.updateData(dataUpdate)
					this.setState({
						modal: !this.state.modal,
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
						modal: !this.state.modal,
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
					modal: !this.state.modal,
					userId: '',
					firstName: '',
					lastName: '',
					age: '',
					email: '',
					address: ''
				})
				break;

			case 'OPEN':
				this.setState({
					modal: !this.state.modal,
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
		const { modal } = this.state
		const { userId,firstName, lastName, age, email, address } = this.state
		const value = { userId,firstName, lastName, age, email, address }
		return(
			<div id='FirebaseCrudModal'>
				<ContainerFluidRow>
					<Collapsible lgCol='12' mdCol='12' smCol='12' brCard='mb-3' tlCard='Table'>
						<FirebaseTable 
							dataRoutes={dataRoutes}
							formAction={this.formAction}
						/>
						<Button onClick={()=>this.formAction('OPEN', '')}> + </Button>
					</Collapsible>
					<FirebaseModal 
						value={value}
						modal={modal}
						onChange={this.onChange}
						formAction={this.formAction}
					/>
				</ContainerFluidRow>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		addData: (newData) => dispatch(addData(newData)),
		updateData: (dataUpdate) => dispatch(updateData(dataUpdate)),
		deleteData: (userId) => dispatch(deleteData(userId)),
	}
}

export default connect(null, mapDispatchToProps)(FirebaseCrudModal)
	

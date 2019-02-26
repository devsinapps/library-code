import React from 'react'
//Actions
import { addData, updateData, deleteData } from './../../../store/actions/firebaseCrudActions'
//Tools
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
//Container
import { ContainerRow, ColCard } from './../../grid/GridBootstrap'
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

	toggleModal = () => {
		this.setState({
			modal: !this.state.modal
		})
	}

	toggleTable = (user) => {
		this.setState({
			modal: !this.state.modal,
			userId: user.id,
			firstName: user.firstName,
			lastName: user.lastName,
			age: user.age,
			email: user.email,
			address: user.address
		})
	}

	onChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	resetForm = () => {
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

	addData = (e) => {
		e.preventDefault();
		const { firstName, lastName, age, email, address } = this.state
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
	}

	updateData = () => {
		const { userId, firstName, lastName, age, email, address } = this.state
		const data = {
			userId, 
			firstName, 
			lastName, 
			age, 
			email, 
			address
		}
		const check = window.confirm('Update?')
		if(check === true){
			this.props.updateData(data)
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
	}

	deleteData = () => {
		const { userId } = this.state
		const check = window.confirm('Delete?')
		if(check === true){
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
	}
	render(){
		const { modal } = this.state
		const { users } = this.props
		const { userId,firstName, lastName, age, email, address } = this.state
		const value = { userId,firstName, lastName, age, email, address }
		return(
			<div id='FirebaseCrudModal'>
				<ContainerRow>
					<ColCard lgCol='12' mdCol='12' smCol='12' xsCol='12' brCard='mb-3' tlCard='Table'>
						<FirebaseTable 
							users={users}
							toggleTable={this.toggleTable}
						/>
						<Button onClick={this.toggleModal}> + </Button>
					</ColCard>
					<FirebaseModal 
						value={value}
						modal={modal}
						onChange={this.onChange}
						resetForm={this.resetForm}
						addData={this.addData}
						updateData={this.updateData}
						deleteData={this.deleteData}
					/>
				</ContainerRow>
			</div>
		)
	}
}


const mapStateToProps = (state) => {
	return{
		users: state.firestore.ordered.users
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		addData: (newData) => dispatch(addData(newData)),
		updateData: (data) => dispatch(updateData(data)),
		deleteData: (userId) => dispatch(deleteData(userId)),
	}
}

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	firestoreConnect([{
		collection: 'users'
	}])
	)(FirebaseCrudModal)

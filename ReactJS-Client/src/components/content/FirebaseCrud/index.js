import React, { Component } from 'react'
//Actions
import { addData, updateData, deleteData } from './../../../store/actions/firebaseCrudActions'
//Tools
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
//Container
import { ContainerRow, ColCard } from './../../grid/GridBootstrap'
//Component
import { FirebaseTable } from './FirebaseTable'
import FirebaseForm from './FirebaseForm'
class FirebaseCrud extends Component{
	state = {
		userId: '',
		firstName: '',
		lastName: '',
		age: '',
		email: '',
		address: ''
	}

	getDataRow = (user) => {
		this.setState({
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

		this.props.addData(newData)
		this.setState({
			firstName: '',
			lastName: '',
			age: '',
			email: '',
			address: ''
		})
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

	resetForm = () => {
		this.setState({
			userId: '',
			firstName: '',
			lastName: '',
			age: '',
			email: '',
			address: ''
		})
	}
	render(){
		const { users } = this.props
		const { userId,firstName, lastName, age, email, address } = this.state
		const value = { userId,firstName, lastName, age, email, address }
		return(
			<div id='ArrObjCrud'>
				<ContainerRow>
					<ColCard lgCol='6' mdCol='6' smCol='6' xsCol='6' brCard='mb-3' tlCard='Firebase Crud'>
						<FirebaseTable 
							users={users}
							getDataRow={this.getDataRow}
						/>
					</ColCard>
					<ColCard lgCol='6' mdCol='6' smCol='6' xsCol='6' brCard='mb-3' tlCard='Firebase Crud'>
						<FirebaseForm 
							value={value}
							onChange={this.onChange}
							addData={this.addData}
							updateData={this.updateData}
							deleteData={this.deleteData}
							resetForm={this.resetForm}
						/>
					</ColCard>
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
	)(FirebaseCrud)
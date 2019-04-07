import React from 'react'

//Tools
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
//Container
import { ContainerFluidRow, Collapsible } from './../../grid/GridBootstrap'
//Reactstrap
import { CardTitle } from 'reactstrap'
class FirebaseDetail extends React.Component{
	render(){
		//this props form below mapStateToProps
		const { user } = this.props
		if(user){
			return(
				<ContainerFluidRow rowClass='justify-content-center'>
					<Collapsible lgCol='8' mdCol='8' smCol='8' brCard='mb-3' tlCard='Detail'>
						<CardTitle> {user.firstName + ' ' + user.lastName} </CardTitle>
						<ul>
							<li> {user.age} </li>
							<li> {user.email} </li>
							<li> {user.address} </li>
						</ul>
					</Collapsible>
				</ContainerFluidRow>
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

const mapStateToProps = (state, ownProps) => {
	const id = ownProps.match.params.user_id
	const users = state.firestore.data.users
	const user = users ? users[id] : null
	return{
		user: user
	}	
}

export default compose(
		connect(mapStateToProps),
		firestoreConnect([{
			collection: 'users'
		}])
	)(FirebaseDetail)
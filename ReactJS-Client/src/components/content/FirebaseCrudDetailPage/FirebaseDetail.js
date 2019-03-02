import React from 'react'

//Tools
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
//Container
import { ContainerRow, ColCard } from './../../grid/GridBootstrap'
//Reactstrap
import { CardTitle } from 'reactstrap'
class FirebaseDetail extends React.Component{
	render(){
		//this props form below mapStateToProps
		const { user } = this.props
		if(user){
			return(
				<ContainerRow>
					<ColCard lgCol='8' mdCol='8' smCol='8' xsCol='8' colClass='mx-auto' brCard='mb-3' tlCard='Detail'>
						<CardTitle> {user.firstName + ' ' + user.lastName} </CardTitle>
						<ul>
							<li> {user.age} </li>
							<li> {user.email} </li>
							<li> {user.address} </li>
						</ul>
					</ColCard>
				</ContainerRow>
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
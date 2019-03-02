import React from 'react'
//Tools
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
//Container
import { ContainerRow, ColCard } from './../../grid/GridBootstrap'
//Component
import FirebaseSummary from './FirebaseSummary'
class FirebaseCrudDetailPage extends React.Component{
	render(){
		//this props from mapStateToProps below
		const { users } = this.props 
		return(
			<div id='FirebaseCrudDetailPage'>
				<ContainerRow>
					<ColCard lgCol='12' mdCol='12' smCol='12' xsCol='12' brCard='mb-3' tlCard='Data'>
						{users && users.map((user)=>{
							return(
								<FirebaseSummary key={user.id} user={user} getDataUser={this.getDataUser}/>
							)
						})
						}
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

export default compose(
	connect(mapStateToProps),
	firestoreConnect([{
		collection: 'users'
	}])
	)(FirebaseCrudDetailPage)
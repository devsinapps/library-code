import React from 'react'
//Tools
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
//Container
import { ContainerFluidRow, Collapsible } from './../../grid/GridBootstrap'
//Component
import { FirebaseSummary } from './FirebaseSummary'
class FirebaseCrudDetailPage extends React.Component{
	render(){
		//this props from mapStateToProps below
		const { dataRoutes } = this.props
		const users = dataRoutes.firestore.ordered.users
 		return(
			<div id='FirebaseCrudDetailPage'>
				<ContainerFluidRow>
					<Collapsible lgCol='12' mdCol='12' smCol='12'  brCard='mb-3' tlCard='Data'>
						{users && users.map((user)=>{
							return(
								<FirebaseSummary key={user.id} user={user} getDataUser={this.getDataUser}/>
							)
						})
						}
					</Collapsible>
				</ContainerFluidRow>
			</div>
		)
	}
}

export default FirebaseCrudDetailPage
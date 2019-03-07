import React from 'react'
//Tools
import { connect } from 'react-redux'
//Reactstrap
import { Card, CardBody } from 'reactstrap'
class AuthView extends React.Component{
	render(){
		const { profile } = this.props
		return(
			<Card>
				<CardBody>
					<ul>
						<li> {profile.firstName + ' ' + profile.lastName} </li>
					</ul>
				</CardBody>
			</Card>
		)
	}
}

const mapStateToProps = (state) => {
	return{
		auth: state.firebase.auth
	}
}

export default AuthView
import React from 'react'
//Tools
import { connect } from 'react-redux'
//Reactstrap
import { Card, CardBody } from 'reactstrap'
export const AuthView = ({profile}) => {
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

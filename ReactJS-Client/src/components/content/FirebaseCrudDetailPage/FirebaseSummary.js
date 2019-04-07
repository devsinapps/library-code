import React from 'react'
//Tools
import { Link } from 'react-router-dom'
//Reactstrap
import { Card, CardBody, CardTitle, CardText } from 'reactstrap'
export const FirebaseSummary = ({user}) => {
	return(
		<Link to={'/f_detail/'+user.id}>
			<Card className='mb-3'>
				<CardBody>
					<CardTitle> {user.firstName + ' ' + user.lastName} </CardTitle>
					<ul>
						<li> {user.age} </li>
						<li> {user.email} </li>
						<li> {user.address} </li>
					</ul>
				</CardBody>
			</Card>
		</Link>
	)
}

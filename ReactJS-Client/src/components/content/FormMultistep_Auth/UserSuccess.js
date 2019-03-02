import React from 'react'
//Container
import { ContainerRow, ColCard } from './../../grid/GridBootstrap'
//Reactstrap
import { CardTitle, CardText } from 'reactstrap'
export class UserSuccess extends React.Component{
	render(){
		const { value } = this.props
		return(
			<ContainerRow>
				<ColCard lgCol='6' mdCol='6' smCol='6' xsCol='6' colClass='mx-auto' brCard='' tlCard='Success Sign Up'>
					<CardTitle> {value.firstName + ' ' + value.lastName} </CardTitle>
					<ul>
						<li> {value.age} </li>
						<li> {value.gender} </li>
						<li> {value.email} </li>
					</ul>
				</ColCard>
			</ContainerRow>
		)
	}
}
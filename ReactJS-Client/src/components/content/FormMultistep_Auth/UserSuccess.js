import React from 'react'
//Container
import { ContainerFluidRow, Collapsible } from './../../grid/GridBootstrap'
//Reactstrap
import { CardTitle, CardText } from 'reactstrap'
export const UserSuccess = ({value}) => {
	return(
		<ContainerFluidRow rowClass='justify-content-center'>
			<Collapsible lgCol='6' mdCol='6' smCol='6' brCard='' tlCard='Success Sign Up'>
				<CardTitle> {value.firstName + ' ' + value.lastName} </CardTitle>
				<ul>
					<li> {value.age} </li>
					<li> {value.gender} </li>
					<li> {value.email} </li>
				</ul>
			</Collapsible>
		</ContainerFluidRow>
	)
}

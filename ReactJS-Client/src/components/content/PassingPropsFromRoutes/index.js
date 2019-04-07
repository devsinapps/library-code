import React from 'react'
//Container
import { ContainerFluidRow, Collapsible } from './../../grid/GridBootstrap'
//Reactstrap
import { CardTitle, CardText, Button } from 'reactstrap'
export class PassingPropsFromRoutes extends React.Component{
	render(){
		const { passingData } = this.props
		return(
			<div id='PassingPropsFromRoutes'>
				<ContainerFluidRow rowClass='justify-content-center'>
					<Collapsible lgCol='6' mdCol='6' smCol='6' colClass='mx-auto' brCard='mb-3' tlCard='Get Props'>
						<CardTitle> {passingData.title} </CardTitle>
						<Button onClick={this.props.passingFunction}> Click Me </Button>
					</Collapsible>
				</ContainerFluidRow>
			</div>
		)
	}
}
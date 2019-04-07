import React, { Component } from 'react'

//Container
import { ContainerFluidRow, Collapsible } from './../../grid/GridBootstrap'
//Component
import { GraphTable } from './GraphTable'
export class GraphQLCrud extends Component{
	render(){
		return(
			<div id='GraphQLCrud'>
				<ContainerFluidRow rowClass='justify-content-center'>
					<Collapsible lgCol='8' mdCol='8' smCol='8' brCard='mb-3' tlCard='Table'>
						<GraphTable />
					</Collapsible>
				</ContainerFluidRow>
			</div>
		)
	}
}
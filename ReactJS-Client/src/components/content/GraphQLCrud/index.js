import React, { Component } from 'react'

//Container
import { ContainerRow, ColCard } from './../../grid/GridBootstrap'
//Component
import { GraphTable } from './GraphTable'
export class GraphQLCrud extends Component{
	render(){
		return(
			<div id='GraphQLCrud'>
				<ContainerRow>
					<ColCard lgCol='8' mdCol='8' smCol='8' xsCol='8' colClass='mx-auto' brCard='mb-3' tlCard='Table'>
						<GraphTable />
					</ColCard>
				</ContainerRow>
			</div>
		)
	}
}
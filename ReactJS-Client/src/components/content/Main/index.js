import React from 'react'

//Container
import { ContainerFluidRow, Collapsible } from './../../grid/GridBootstrap'
export class Main extends React.Component{
	render(){
		return(
			<div id='Main'>
				<ContainerFluidRow>
					<Collapsible lgCol='12' mdCol='12' smCol='12' brCard='mb-3' tlCard='Dashboard'>
					</Collapsible>
				</ContainerFluidRow>
			</div>
		)
	}
}


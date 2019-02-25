import React from 'react'

//Container
import { ContainerRow, ColCard } from './../../grid/GridBootstrap'
export class Main extends React.Component{
	render(){
		return(
			<div id='Main'>
				<ContainerRow>
					<ColCard lgCol='12' mdCol='12' smCol='12' xsCol='12' brCard='mb-3' tlCard='Dashboard'>
					</ColCard>
				</ContainerRow>
			</div>
		)
	}
}


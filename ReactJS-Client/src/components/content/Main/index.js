import React from 'react'

//Container
import { Canvas } from './../../grid/GridBootstrap'
export class Main extends React.Component{
	render(){
		return(
			<Canvas canvasClass='Main' lgCol='12' mdCol='12' smCol='12' tlCard='Dashboard' brCard='mb-3'>
			</Canvas>
		)
	}
}


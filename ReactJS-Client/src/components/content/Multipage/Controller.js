import React from 'react'

//Component
import { Menu1, Menu2, Menu3 } from './Menu'
export class Controller extends React.Component{
	render(){
		const { page } = this.props
		switch(page){
			case 1:
				return(
					<Menu1 />
				)
			case 2:
				return(
					<Menu2 />
				)
			case 3:
				return(
					<Menu3 />
				)
			default:
				return null
		}
	}
}
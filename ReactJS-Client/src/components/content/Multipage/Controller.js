import React from 'react'
//Component
import { Menu1, Menu2, Menu3 } from './Menu'
export const Controller = ({page}) => {
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

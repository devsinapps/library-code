import React from 'react'
//Reactstrap
import { Navbar, NavbarBrand } from 'reactstrap'
export class TopNav extends React.Component{
	render(){
		return(
			<Navbar expand="md" className='TopNav'>
				<NavbarBrand active> Library Code Wayscode </NavbarBrand>
			</Navbar>
		)
	}
}
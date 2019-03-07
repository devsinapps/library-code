import React from 'react'
//Tools
import { Link } from 'react-router-dom'
//Component
import { Dropdown } from './Dropdown'
export class SideNav extends React.Component{
	render(){
		return(
			<div className='SideNav'>
				<div className='menu'>
					<ul>
						<li className='titleMenu'>
							<Link to='/'> 
								<i> Dashboard </i>
							</Link> 
						</li>
						<Dropdown titleDropdown='Array Objecy Crud'>
							<ul>
								<li>
									<Link to='/arrobjcrud' className='link'>
									Crud Single Page 
									</Link>
								</li>
								<li>
									<Link to='/arrobjcrudmodal' >
									Crud Single Page Modal
									</Link>
								</li>
								<li>
									<Link to='/arrobjcruddetail' >
									Crud Single Page Detail
									</Link>
								</li>
							</ul>
						</Dropdown>
						<Dropdown titleDropdown='PostgreSQL'>
							<ul>
								<li>
									<Link to='/postgrecrud' >
									Crud Single Page 
									</Link>
								</li>
								<li>
									<Link to='/postgrecrudmodal' >
									Crud Single Page Modal
									</Link>
								</li>
							</ul>
						</Dropdown>
						<Dropdown titleDropdown='FirebaseNoSQL'>
							<ul>
								<li>
									<Link to='/firebasecrud' >
									Crud Single Page 
									</Link>
								</li>
								<li>
									<Link to='/firebasecrudmodal' >
									Crud Single Page Modal
									</Link>
								</li>
								<li>
									<Link to='/firebasecruddetailpage' >
									Crud Single Page Detail
									</Link>
								</li>
								<li>
									<Link to='/firebaseauth' >
									Firebase Auth
									</Link>
								</li>
								<li>
									<Link to='/firebaseauthmediasocial' >
									Firebase Auth Medsos
									</Link>
								</li>
							</ul>
						</Dropdown>
						<Dropdown titleDropdown='Fetch API'>
							<ul>
								<li>
									<Link to='/fetchapiunsplash' >
									Unsplash
									</Link>
								</li>
								<li>
									<Link to='/fetchapifood2fork' >
									Food 2 Fork
									</Link>
								</li>
							</ul>
						</Dropdown>
						<Dropdown titleDropdown='Mix'>
							<ul>
								<li>
									<Link to='/multipage' >
									Form Multipage
									</Link>
								</li>
								<li>
									<Link to='/fmauth' >
									Form Multistep Auth
									</Link>
								</li>
							</ul>
						</Dropdown>
					</ul>
				</div>
				<div className='toggle'>
				</div>
			</div>
		)
	}
}
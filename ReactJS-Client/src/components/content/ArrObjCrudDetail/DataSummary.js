import React from 'react'
//Tools
import { Link } from 'react-router-dom'
//Reactstrap
import { CardTitle } from 'reactstrap'
export class DataSummary extends React.Component{
	render(){
		const { user } = this.props
		const style = {
			border: '1px solid #f2f2f2',
			borderRadius: '10px',
			margin: '10px',
			padding: '10px',
			cursor: 'pointer',
			boxShadow: '0px 0px 1px rgba(0,0,0,.5)'
		}
		return(
		<Link to={'/arr_detail/'+user.id}>
			<div style={style}>
				<CardTitle> {user.name} </CardTitle>
				<ul>
					<li> {user.username} </li>
					<li> {user.email} </li>
					<li> {user.website} </li>
				</ul>
			</div>
		</Link>
		)
	}
}
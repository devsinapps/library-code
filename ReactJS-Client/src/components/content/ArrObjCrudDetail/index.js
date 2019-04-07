import React from 'react'
//Container
import { ContainerFluidRow, Collapsible } from './../../grid/GridBootstrap'
//Component
import { DataSummary } from './DataSummary'


export class ArrObjCrudDetail extends React.Component{
	state = {
		users: []
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users/')
		.then(response => response.json())
		.then(data => this.setState({
			users: data
		}))
	}
	render(){
		const { users } = this.state
		return(
			<div id='ArrObjCrudDetail'>
				<ContainerFluidRow rowClass='justify-content-center'>
					<Collapsible lgCol='6' mdCol='6' smCol='6' colClass='mx-auto' brCard='mb-3' tlCard='Data Users'>
						{users && users.map((user)=>{
							return(
								<DataSummary key={user.id} user={user}/>
								)
							})
						}
					</Collapsible>
				</ContainerFluidRow>
			</div>
		)
	}
}
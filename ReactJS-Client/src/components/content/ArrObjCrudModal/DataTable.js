import React from 'react'
import { Table } from 'reactstrap'
export const DataTable = (props) => {
	const { users } = props
	let no = 1
	return(
		<Table hover bordered striped responsive size='sm'>
			<thead>
				<tr>
					<th> No </th>
					<th> Name </th>
					<th> Username </th>
					<th> Email </th>
					<th> Phone </th>
					<th> Website </th>
				</tr>
			</thead>
			<tbody>
				{users && users.map((user)=>{
					return(
						<tr key={user.id} onClick={() => props.toggleTable(user)}>
							<td> {no} </td>
							<td> {user.name} </td>
							<td> {user.username} </td>
							<td> {user.email} </td>
							<td> {user.phone} </td>
							<td> {user.website} </td>
						</tr>
					)
				})}
				
			</tbody>
		</Table>
	)
}
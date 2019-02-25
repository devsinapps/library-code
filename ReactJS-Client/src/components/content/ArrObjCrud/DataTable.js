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
					<th> No </th>
					<th> No </th>
					<th> No </th>
					<th> No </th>
					<th> No </th>
				</tr>
			</thead>
			<tbody>
				{users && users.map((user)=>{
					return(
						<tr key={user.id} onClick={() => props.getDataRow(user)}>
							<td> {no++} </td>
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
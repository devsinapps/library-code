import React from 'react'
import { Table } from 'reactstrap'
export const FirebaseTable = (props) => {
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
						<tr key={user.id} onClick={() => props.toggleTable(user)}>
							<td> {no++} </td>
							<td> {user.firstName} </td>
							<td> {user.lastName} </td>
							<td> {user.age} </td>
							<td> {user.email} </td>
							<td> {user.address} </td>
						</tr>
					)
				})}
			</tbody>
		</Table>
	)
}
import React from 'react'

//Reactstrap
import { Table } from 'reactstrap'
export const GraphTable = () => {
	return(
		<Table hover responsive bordered striped size='sm'>
			<thead>
				<tr>
					<th> No </th>
					<th> Name </th>
					<th> Genre </th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td> No </td>
					<td> Name </td>
					<td> Genre </td>
				</tr>
			</tbody>
		</Table>
	)
}
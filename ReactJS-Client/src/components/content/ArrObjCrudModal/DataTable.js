import React from 'react'
//mdbreact
import { MDBDataTable } from 'mdbreact'
export const DataTable = ({users, formAction}) => {
	let no = 1
	const data = {
		columns: [
			{
		        label: 'No',
		        field: 'no',
		        sort: 'asc',
		        width: 50
	        },
	        {
		        label: 'Name',
		        field: 'name',
		        sort: 'asc',
		        width: 200
	        },
	        {
		        label: 'Username',
		        field: 'username',
		        sort: 'asc',
		        width: 100
	        },
	        {
		        label: 'Email',
		        field: 'email',
		        sort: 'asc',
		        width: 200
	        },
	        {
		        label: 'Phone',
		        field: 'phone',
		        sort: 'asc',
		        width: 200
	        },
	        {
		        label: 'Website',
		        field: 'website',
		        sort: 'asc',
		        width: 200
	        }
		],
		rows: users.map((data)=>{
			return(
				{
					clickEvent: ()=>formAction('GETDATA', data),
					no: no++,
					name: data.name,
					username: data.username,
					email: data.email,
					phone: data.phone,
					website: data.website,
				}
			)
		})
	}
	return(
		<MDBDataTable
			scrollY
			scrollX
			hover
			bordered
			striped
			small
			maxHeight='300px'
			data={data}
		/>
	)
}
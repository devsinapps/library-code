import React from 'react'
//mdbreact
import { MDBDataTable } from 'mdbreact'
export const FirebaseTable = ({dataRoutes, formAction}) => {
	const users = dataRoutes.firestore.ordered.users
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
		        label: 'First Name',
		        field: 'firstName',
		        sort: 'asc',
		        width: 200
	        },
	        {
		        label: 'Last Name',
		        field: 'lastName',
		        sort: 'asc',
		        width: 100
	        },
	        {
		        label: 'Age',
		        field: 'age',
		        sort: 'asc',
		        width: 200
	        },
	        {
		        label: 'Email',
		        field: 'email',
		        sort: 'asc',
		        width: 200
	        },
	        {
		        label: 'Adress',
		        field: 'adress',
		        sort: 'asc',
		        width: 200
	        }
		],
		rows: users && users.map((data)=>{
			return(
				{
					clickEvent: ()=>formAction('GETDATA', data),
					no: no++,
					firstName: data.firstName,
					lastName: data.lastName,
					age: data.age,
					email: data.email,
					address: data.address,
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
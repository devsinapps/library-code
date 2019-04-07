import React from 'react'
//mdbreact
import { MDBDataTable } from 'mdbreact'
export const PostgreTable = ({employees, formAction}) => {
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
		        field: 'firstname',
		        sort: 'asc',
		        width: 150
	        },
	        {
		        label: 'Last Name',
		        field: 'lastname',
		        sort: 'asc',
		        width: 150
	        },
	        {
		        label: 'Age',
		        field: 'age',
		        sort: 'asc',
		        width: 50
	        },
	        {
		        label: 'Gender',
		        field: 'gender',
		        sort: 'asc',
		        width: 150
	        },
	        {
		        label: 'Email',
		        field: 'email',
		        sort: 'asc',
		        width: 200
	        },
	        {
		        label: 'Country',
		        field: 'country',
		        sort: 'asc',
		        width: 150
	        },
	        {
		        label: 'City',
		        field: 'city',
		        sort: 'asc',
		        width: 150
	        },
	        {
		        label: 'Address',
		        field: 'address',
		        sort: 'asc',
		        width: 250
	        },
	        {
		        label: 'Education',
		        field: 'education',
		        sort: 'asc',
		        width: 150
	        },
	        {
		        label: 'Join Date',
		        field: 'joindate',
		        sort: 'asc',
		        width: 100
	        }
		],
		rows: employees && employees.map((data)=>{
			return(
				{
					clickEvent: ()=>formAction('GETDATA', data),
					no: no++,
					firstname: data.firstname,
					lastname: data.lastname,
					age: data.age,
					gender: data.gender,
					email: data.email,
					country: data.country,
					city: data.city,
					address: data.address,
					education: data.education,
					joindate: data.joindate,
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
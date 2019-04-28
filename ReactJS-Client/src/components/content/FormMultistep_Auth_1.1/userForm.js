import React from 'react'
//reactstrap
import { FormGroup } from 'reactstrap'
//mdbreact
import { MDBBtn, MDBInput } from 'mdbreact'
export const UserForm = ({value, handleChange, toggle}) => {
	const config = {
		email: value.name.length > 6
	}
	return(
		<form>
			<FormGroup>
				<MDBInput 
					label='Name'
					id='name'
					value={value.name}
					onChange={handleChange}
				/>
			</FormGroup>
			<FormGroup>
				<MDBInput 
					label='Email'
					id='email'
					value={value.email}
					onChange={handleChange}
					disabled={!config.email}
				/>
			</FormGroup>
			<FormGroup>
				<MDBInput 
					label='Phone'
					id='phone'
					value={value.phone}
					onChange={handleChange}
				/>
			</FormGroup>
			<FormGroup>
				<MDBBtn block color='default' onClick={()=>toggle('keyForm')}> Set Password -> </MDBBtn>
			</FormGroup>
		</form>
	)
}
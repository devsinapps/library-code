import React from 'react'
//Reactstrap
import { Row, Col, Form, FormGroup, Label, Input, CustomInput } from 'reactstrap'
//MDBReact
import { MDBBtn, ToastContainer } from "mdbreact";
export const UserContact = ({value, onChange, onChangeOnContact, stepAuth}) => {
	const enabled = value.email.length > 0 &&
					value.phone.length > 0;
	return(
		<Form>
			<FormGroup>
				<Label htmFor='email'> Email </Label>
				<Input
					id='email'
					onChange={onChange}
				/>
			</FormGroup>
			<FormGroup>
				<Label htmFor='phone'> Phone Number </Label>
				<Input
					id='phone'
					value={value.phone}
					min='0'
					max='100'
					maxLength='14'
					pattern="^-?[0-9]\d*\.?\d*$"
					onChange={onChangeOnContact}
				/>
			</FormGroup>
			<FormGroup className='text-center'>
				<MDBBtn block color='primary' onClick={() => stepAuth('UserContact')} disabled={!enabled}> Next </MDBBtn>
			</FormGroup>
			<ToastContainer
		          hideProgressBar={true}
		          newestOnTop={true}
		          autoClose={5000}
		        />
		</Form>
	)
}

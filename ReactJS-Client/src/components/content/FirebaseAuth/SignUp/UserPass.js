import React from 'react'
//Reactstrap
import { Row, Col, Form, FormGroup, Label, Input, CustomInput } from 'reactstrap'
//MDBReact
import {  MDBBtn, ToastContainer } from "mdbreact";
export const UserPass = ({value, onChange, stepAuth}) => {
	const enabled = value.password.length > 0 &&
					value.keypass.length > 0;
	return(
		<Form>
			<FormGroup>
				<Label htmFor='password'> Password </Label>
				<Input
					id='password'
					type='password'
					onChange={onChange}
				/>
			</FormGroup>
			<FormGroup>
				<Label htmFor='keypass'> Confirm </Label>
				<Input
					id='keypass'
					type='password'
					onChange={onChange}
				/>
			</FormGroup>
			<FormGroup className='text-center'>
				<MDBBtn block color='primary' onClick={() => stepAuth('SignUp')} disabled={!enabled}> Sign Up </MDBBtn>
			</FormGroup>
			<ToastContainer
		          hideProgressBar={true}
		          newestOnTop={true}
		          autoClose={5000}
		        />
		</Form>
	)
}

import React from 'react'
//reactstrap
import { Row, Col, Form, FormGroup, Label, Input, CustomInput, Button } from 'reactstrap'
export const UserPass = ({value, onChange, stepAuth}) => {
	const enabled = value.password.length > 0 &&
					value.checkpass.length > 0 ;
	return(
		<Form>
			<FormGroup>
				<Label htmlFor='password'> Password </Label>
				<Input
					id='password'
					type='password'
					onChange={onChange}
				/>
			</FormGroup>
			<FormGroup>
				<Label htmlFor='checkpass'> Confirm </Label>
				<Input
					id='checkpass'
					type='password'
					onChange={onChange}
				/>
			</FormGroup>
			<FormGroup className='text-center'>
				<Button block color='primary' disabled={!enabled} onClick={()=>stepAuth('SignUp')}> Sign Up </Button>
			</FormGroup>
		</Form>
	)
}

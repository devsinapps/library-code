import React from 'react'
//reactstrap
import { Row, Col, Form, FormGroup, Label, Input, CustomInput, Button } from 'reactstrap'
export const UserContact = ({value, onChange, onChangeOnContact, stepAuth}) => {
	const enabled = value.email.length > 0 &&
					value.phone.length > 0 ;
	return(
		<Form>
			<FormGroup>
				<Label htmlFor='email'> Email </Label>
				<Input
					id='email'
					onChange={onChange}
				/>
			</FormGroup>
			<FormGroup>
				<Label htmlFor='phone'> Phone </Label>
				<Input
					id='phone'
					value={value.phone}
					onChange={onChangeOnContact}
					min='0'
					max='100'
					maxLength='13'
					pattern="^-?[0-9]\d*\.?\d*$"
				/>
			</FormGroup>
			<FormGroup className='text-center'>
				<Button block color='primary' onClick={()=>stepAuth('UserContact')} disabled={!enabled}> Next </Button>
			</FormGroup>
		</Form>
	)
}

import React, { Component } from 'react'
//Reactstrap
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap'
export const FirebaseForm = ({value, onChange, formAction}) => {
	const enabled = value.userId.length > 0
	return(
		<Form>
			<Row form>
				<Col lg='4'>
					<FormGroup>
						<Label htmlFor='firstName'> First Name </Label>
						<Input 
							id='firstName'
							value={value.firstName}
							onChange={onChange}
						/>
					</FormGroup>
				</Col>
				<Col lg='4'>
					<FormGroup>
						<Label htmlFor='lastName'> Last Name  </Label>
						<Input 
							id='lastName'
							value={value.lastName}
							onChange={onChange}
						/>
					</FormGroup>
				</Col>
				<Col lg='4'>
					<FormGroup>
						<Label htmlFor='email'> Email </Label>
						<Input 
							id='email'
							value={value.email}
							onChange={onChange}
						/>
					</FormGroup>
				</Col>
				<Col lg='4'>
					<FormGroup>
						<Label htmlFor='age'> Age </Label>
						<Input 
							id='age'
							value={value.age}
							onChange={onChange}
						/>
					</FormGroup>
				</Col>
				<Col lg='4'>
					<FormGroup>
						<Label htmlFor='address'> Address </Label>
						<Input 
							id='address'
							value={value.address}
							onChange={onChange}
						/>
					</FormGroup>
				</Col>
			</Row>
			<FormGroup className='text-center'>
				<Button onClick={()=>formAction('SAVE', '')} disabled={enabled}> Save </Button> {' '}
				<Button onClick={()=>formAction('UPDATE', '')} disabled={!enabled}> Update </Button> {' '}
				<Button onClick={()=>formAction('DELETE', '')} disabled={!enabled}> Delete </Button> {' '}
				<Button onClick={()=>formAction('RESET', '')}> Reset </Button>
			</FormGroup>
		</Form>
	)
}
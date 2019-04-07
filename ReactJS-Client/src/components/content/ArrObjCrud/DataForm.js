import React, { Component } from 'react'
//Reactstrap
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap'
export const DataForm = ({value, onChange, formAction}) => {
	return(
		<Form>
			<Row form>
				<Col lg='4'>
					<FormGroup>
						<Label htmlFor='name'> Name </Label>
						<Input 
							id='name'
							value={value.name}
							onChange={onChange}
						/>
					</FormGroup>
				</Col>
				<Col lg='4'>
					<FormGroup>
						<Label htmlFor='username'> Username </Label>
						<Input 
							id='username'
							value={value.username}
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
						<Label htmlFor='phone'> Phone </Label>
						<Input 
							id='phone'
							value={value.phone}
							onChange={onChange}
						/>
					</FormGroup>
				</Col>
				<Col lg='4'>
					<FormGroup>
						<Label htmlFor='website'> Website </Label>
						<Input 
							id='website'
							value={value.website}
							onChange={onChange}
						/>
					</FormGroup>
				</Col>
			</Row>
			<FormGroup className='text-center'>
				<Button onClick={() => formAction('SAVE', '')}> Save </Button> {' '}
				<Button onClick={() => formAction('UPDATE', '')}> Update </Button> {' '}
				<Button onClick={() => formAction('DELETE', '')}> Delete </Button> {' '}
				<Button onClick={() => formAction('RESET', '')}> Reset </Button>
			</FormGroup>
		</Form>
	)
}

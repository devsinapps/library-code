import React from 'react'

//Reactstrap
import { Row, Col, Form, FormGroup, Label, Input, CustomInput, Button } from 'reactstrap'
export class UserContact extends React.Component{
	render(){
		const { value } = this.props
		const enabled = value.email.length > 0 &&
						value.phone.length > 0;
		return(
			<Form>
				<FormGroup>
					<Label htmFor='email'> Email </Label>
					<Input
						id='email'
						onChange={this.props.onChange}
					/>
				</FormGroup>
				<FormGroup>
					<Label htmFor='phone'> Phone Number </Label>
					<Input
						id='phone'
						onChange={this.props.onChange}
					/>
				</FormGroup>
				<FormGroup className='text-center'>
					<Button block color='primary' onClick={this.props.nextStep} disabled={!enabled}> Next </Button>
				</FormGroup>
			</Form>
		)
	}
}
import React from 'react'

//Reactstrap
import { Row, Col, Form, FormGroup, Label, Input, CustomInput, Button } from 'reactstrap'
export class UserPass extends React.Component{
	render(){
		const { value } = this.props
		const enabled = value.password.length > 0 &&
						value.keypass.length > 0;
		return(
			<Form>
				<FormGroup>
					<Label htmFor='password'> Password </Label>
					<Input
						id='password'
						type='password'
						onChange={this.props.onChange}
					/>
				</FormGroup>
				<FormGroup>
					<Label htmFor='keypass'> Confirm </Label>
					<Input
						id='keypass'
						type='password'
						onChange={this.props.onChange}
					/>
				</FormGroup>
				<FormGroup className='text-center'>
					<Button block color='primary' onClick={() => this.props.stepAuth('SignUp')} disabled={!enabled}> Sign Up </Button>
				</FormGroup>
			</Form>
		)
	}
}
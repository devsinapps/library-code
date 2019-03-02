import React from 'react'

import { Row, Col, Form, FormGroup, Label, Input, CustomInput, Button } from 'reactstrap'
export class UserPass extends React.Component{
	render(){
		const { value } = this.props
		const enabled = value.password.length > 0 &&
						value.checkpass.length > 0 ;
		return(
			<Form onSubmit={this.props.onSubmit}>
				<FormGroup>
					<Label htmlFor='password'> Password </Label>
					<Input
						id='password'
						type='password'
						onChange={this.props.onChange}
					/>
				</FormGroup>
				<FormGroup>
					<Label htmlFor='checkpass'> Confirm </Label>
					<Input
						id='checkpass'
						type='password'
						onChange={this.props.onChange}
					/>
				</FormGroup>
				<FormGroup className='text-center'>
					<Button block color='primary' disabled={!enabled}> Sign Up </Button>
				</FormGroup>
			</Form>
		)
	}
}
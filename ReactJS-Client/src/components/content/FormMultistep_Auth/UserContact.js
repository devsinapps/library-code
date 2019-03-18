import React from 'react'

import { Row, Col, Form, FormGroup, Label, Input, CustomInput, Button } from 'reactstrap'
export class UserContact extends React.Component{
	render(){
		const { value } = this.props
		const enabled = value.email.length > 0 &&
						value.phone.length > 0 ;
		return(
			<Form>
				<FormGroup>
					<Label htmlFor='email'> Email </Label>
					<Input
						id='email'
						onChange={this.props.onChange}
					/>
				</FormGroup>
				<FormGroup>
					<Label htmlFor='phone'> Phone </Label>
					<Input
						id='phone'
						value={value.phone}
						onChange={this.props.onChangeOnContact}
						min='0'
						max='100'
						maxLength='13'
						pattern="^-?[0-9]\d*\.?\d*$"
					/>
				</FormGroup>
				<FormGroup className='text-center'>
					<Button block color='primary' onClick={()=>this.props.stepAuth('UserContact')} disabled={!enabled}> Next </Button>
				</FormGroup>
			</Form>
		)
	}
}
import React from 'react'

//Reactstrap
import { Row, Col, Form, FormGroup, Label, Input, CustomInput, Button } from 'reactstrap'
export class UserInfo extends React.Component{
	render(){
		const { value } = this.props
		const enabled = value.firstName.length > 0 &&
						value.lastName.length > 0 &&
						value.gender.length > 0 &&
						value.age.length > 0;
		return(
			<Form>
				<FormGroup>
					<Label htmFor='firstName'> First Name </Label>
					<Input
						id='firstName'
						onChange={this.props.onChange}
					/>
				</FormGroup>
				<FormGroup>
					<Label htmFor='lastName'> Last Name </Label>
					<Input
						id='lastName'
						onChange={this.props.onChange}
					/>
				</FormGroup>
				<Row>	
					<Col md='6'>
						<FormGroup>
							<Label htmFor='gender'> Last Name </Label>
							<CustomInput type='select' id='gender' onChange={this.props.onChange}>
								<option value=''> Select Gender </option>
								<option value='male'> Male </option>
								<option value='female'> Female  </option>
							</CustomInput>
						</FormGroup>
					</Col>
					<Col md='4'>
						<FormGroup>
							<Label htmFor='age'> Age </Label>
							<Input
								id='age'
								type='number'
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
				</Row>
				<FormGroup className='text-center'>
					<Button block color='primary' onClick={() => this.props.stepAuth('UserInfo')} disabled={!enabled}> Next </Button>
				</FormGroup>
			</Form>
		)
	}
}

import React from 'react'
//Reactstrap
import { Row, Col, Form, FormGroup, Label, Input, CustomInput } from 'reactstrap'
//MDBReact
import { MDBBtn } from "mdbreact";
export const UserInfo = ({value, onChange, stepAuth}) => {
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
					onChange={onChange}
				/>
			</FormGroup>
			<FormGroup>
				<Label htmFor='lastName'> Last Name </Label>
				<Input
					id='lastName'
					onChange={onChange}
				/>
			</FormGroup>
			<Row>	
				<Col md='6'>
					<FormGroup>
						<Label htmFor='gender'> Last Name </Label>
						<CustomInput type='select' id='gender' onChange={onChange}>
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
							onChange={onChange}
						/>
					</FormGroup>
				</Col>
			</Row>
			<FormGroup className='text-center'>
				<MDBBtn block color='primary' onClick={() => stepAuth('UserInfo')} disabled={!enabled}> Next </MDBBtn>
			</FormGroup>
		</Form>
	)
}


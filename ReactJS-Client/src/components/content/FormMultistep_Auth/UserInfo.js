import React from 'react'
//reactstrap
import { Row, Col, Form, FormGroup, Label, Input, CustomInput, Button } from 'reactstrap'
export const UserInfo = ({value, onChange, stepAuth}) => {
	const enabled = value.firstName.length > 0 &&
					value.lastName.length > 0 &&
					value.gender.length > 0 &&
					value.age.length > 0;
	return(
		<Form>
			<FormGroup>
				<Label htmlFor='firstName'> First Name </Label>
				<Input
					id='firstName'
					onChange={onChange}
				/>
			</FormGroup>
			<FormGroup>
				<Label htmlFor='lastName'> Last Name </Label>
				<Input
					id='lastName'
					onChange={onChange}
				/>
			</FormGroup>
			<Row form>
				<Col lg='8'>
					<FormGroup>
						<Label htmlFor='gender'> Gender </Label>
						<CustomInput type='select' id='gender' onChange={onChange}>
							<option value=''> Select Gender </option>
							<option value='male'> Male </option>
							<option value='female'> Female </option>
						</CustomInput>
					</FormGroup>
				</Col>
				<Col lg='4'>
					<FormGroup>
						<Label htmlFor='age'> Age </Label>
						<Input
							id='age'
							type='number'
							onChange={onChange}
						/>
					</FormGroup>
				</Col>
			</Row>
			<FormGroup className='text-center'>
				<Button block color='primary' onClick={()=>stepAuth('UserInfo')} disabled={!enabled}> Next </Button>
			</FormGroup>
		</Form>
	)
}

import React from 'react'

//Reactstrap
import { Row, Col, Form, FormGroup, Label, Input, CustomInput, Button } from 'reactstrap'
export class PostgreForm extends React.Component{
	render(){
		const { value } = this.props
		const enabled = value.employeeId > 0
		return(
			<Form>
				<FormGroup>
					<Label htmlFor='firstname'> First Name </Label>
					<Input
						id='firstname'
						value={value.firstname}
						onChange={this.props.onChange}
					/>
				</FormGroup>
				<FormGroup>
					<Label htmlFor='lastname'> Last Name </Label>
					<Input
						id='lastname'
						value={value.lastname}
						onChange={this.props.onChange}
					/>
				</FormGroup>
				<Row form>
					<Col lg='8'>
						<FormGroup>
							<Label htmlFor='gender'> Gender </Label>
							<Input
								id='gender'
								value={value.gender}
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col lg='8'>
						<FormGroup>
							<Label htmlFor='age'> Age </Label>
							<Input
								id='age'
								type='number'
								value={value.age}
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
				</Row>
				<FormGroup>
					<Label htmlFor='email'> Email </Label>
					<Input
						id='email'
						value={value.email}
						onChange={this.props.onChange}
					/>
				</FormGroup>
				<FormGroup>
					<Label htmlFor='country'> country </Label>
					<Input
						id='country'
						value={value.country}
						onChange={this.props.onChange}
					/>
				</FormGroup>
				<FormGroup>
					<Label htmlFor='city'> city </Label>
					<Input
						id='city'
						value={value.city}
						onChange={this.props.onChange}
					/>
				</FormGroup>
				<FormGroup>
					<Label htmlFor='address'> address </Label>
					<Input
						id='address'
						value={value.address}
						onChange={this.props.onChange}
					/>
				</FormGroup>
				<FormGroup>
					<Label htmlFor='education'> education </Label>
					<Input
						id='education'
						value={value.education}
						onChange={this.props.onChange}
					/>
				</FormGroup>
				<FormGroup>
					<Label htmlFor='joindate'> joindate </Label>
					<Input
						id='joindate'
						type='date'
						value={value.joindate}
						onChange={this.props.onChange}
					/>
				</FormGroup>
				<FormGroup className='text-center'>
					<Button color='primary' onClick={this.props.addData} disabled={enabled}> Save </Button>{' '}
					<Button color='warning' onClick={this.props.updateData} disabled={!enabled}> Update </Button>{' '}
					<Button color='danger' onClick={this.props.deleteData} disabled={!enabled}> Delete </Button>{' '}
					<Button color='info' onClick={this.props.resetForm}> Reset </Button>{' '}
				</FormGroup>
			</Form>
		)
	}
}
import React from 'react'

//Reactstrap
import { Row, Col, Form, FormGroup, Label, Input, CustomInput, Button } from 'reactstrap'
export class PostgreForm extends React.Component{
	state = {
		city: []
	}

	getCity = (country) => {
		this.setState({
			city: country.states
		})
	}
	render(){
		const { city } = this.state
		const { value, countries } = this.props
		const enabled = value.employeeId > 0
		return(
			<Form>
				<Row form>
					<Col lg='4'>
						<FormGroup>
							<Label htmlFor='firstname'> First Name </Label>
							<Input
								id='firstname'
								value={value.firstname}
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col lg='4'>
						<FormGroup>
							<Label htmlFor='lastname'> Last Name </Label>
							<Input
								id='lastname'
								value={value.lastname}
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col lg='4'>
						<FormGroup>
							<Label htmlFor='gender'> Gender </Label>
							<Input
								id='gender'
								value={value.gender}
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col lg='4'>
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
					<Col lg='4'>
						<FormGroup>
							<Label htmlFor='email'> Email </Label>
							<Input
								id='email'
								value={value.email}
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col lg='4'>
						<FormGroup>
							<Label htmlFor='country'> country </Label>
							<CustomInput type='select' id='country' onChange={this.props.onChange}>
								<option value={value.country}> {value.country} </option>
								{countries.map((country)=>{
									return(
										<option value={country.country} onClick={() => this.getCity(country)}> {country.country} </option>
									)
								})}
							</CustomInput>
						</FormGroup>
					</Col>
					<Col lg='4'>
						<FormGroup>
							<Label htmlFor='city'> City </Label>
							<CustomInput type='select' id='city' onChange={this.props.onChange}>
								<option value={value.city}> {value.city} </option>
								{city.map((list)=>{
									return(
										<option value={list}> {list} </option>
									)
								})}
							</CustomInput>
						</FormGroup>
					</Col>
					<Col lg='4'>
						<FormGroup>
							<Label htmlFor='address'> address </Label>
							<Input
								id='address'
								value={value.address}
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col lg='4'>
						<FormGroup>
							<Label htmlFor='education'> education </Label>
							<Input
								id='education'
								value={value.education}
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col lg='4'>
						<FormGroup>
							<Label htmlFor='joindate'> joindate </Label>
							<Input
								id='joindate'
								type='date'
								value={value.joindate}
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
				</Row>
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
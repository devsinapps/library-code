import React from 'react'

//Reactstrap
import { Row, Col, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, CustomInput } from 'reactstrap';
export class PostgreModal extends React.Component{
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
		const enabled = value.employeeId > 0;
		return(
			<div>
	        <Modal isOpen={this.props.modal} toggle={this.props.toggleModal} className={this.props.className}>
	          <ModalHeader toggle={this.props.toggleModal}>Modal title</ModalHeader>
	          <ModalBody>
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
	         		<Row>
	         			<Col lg='8'>
	         				<FormGroup>
			         			<Label htmlFor='gender'> Gender </Label>
			         			<CustomInput type='select' id='gender' onChange={this.props.onChange}>
			         				<option vaue={value.gender}> {value.gender} </option>
			         				<option vaue='male'> Male </option>
			         				<option vaue='female'> Female </option>
			         			</CustomInput>
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
	         			<Label htmlFor='country'> Country </Label>
	         			<CustomInput type='select' id='country' onChange={this.props.onChange}>
	         				<option value={value.country}> {value.country} </option>
	         				{countries.map((country)=>{
	         					return(
	         						<option value={country.country} onClick={() => this.getCity(country)}> {country.country} </option>
	         					)
	         				})}
	         			</CustomInput>
	         		</FormGroup>
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
	         		<FormGroup>
	         			<Label htmlFor='address'> Address </Label>
	         			<Input 
	         				id='address'
	         				value={value.address}
	         				onChange={this.props.onChange}
	         			/>
	         		</FormGroup>
	         		<FormGroup>
	         			<Label htmlFor='education'> Education </Label>
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
	         			<Button color='primary' onClick={this.props.addData} disabled={enabled}> Save </Button> {' '}
	         			<Button color='warning' onClick={this.props.updateData} disabled={!enabled}> Update </Button> {' '}
	         			<Button color='danger' onClick={this.props.deleteData} disabled={!enabled}> Delete </Button> {' '}
	         			<Button color='info' onClick={this.props.resetForm}> Reset </Button>
	         		</FormGroup>
	         	</Form>
	          </ModalBody>
	        </Modal>
	    </div>
		)
	}
}
import React from 'react'
//Reactstrap
import { Row, Col, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, CustomInput } from 'reactstrap';
export const PostgreModal = ({value, modal, className, dataRoutes, onChange, formAction}) => {
	const enabled = value.employeeId > 0;
	return(
		<div>
	        <Modal isOpen={modal} toggle={()=>formAction('RESET', '')} className={className}>
	          <ModalHeader toggle={()=>formAction('RESET', '')}>Modal title</ModalHeader>
	          <ModalBody>
	         	<Form>
	         		<FormGroup>
	         			<Label htmlFor='firstname'> First Name </Label>
	         			<Input 
	         				id='firstname'
	         				value={value.firstname}
	         				onChange={onChange}
	         			/>
	         		</FormGroup>
	         		<FormGroup>
	         			<Label htmlFor='lastname'> Last Name </Label>
	         			<Input 
	         				id='lastname'
	         				value={value.lastname}
	         				onChange={onChange}
	         			/>
	         		</FormGroup>
	         		<Row>
	         			<Col lg='8'>
	         				<FormGroup>
			         			<Label htmlFor='gender'> Gender </Label>
			         			<CustomInput type='select' id='gender' onChange={onChange}>
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
			         				onChange={onChange}
			         			/>
			         		</FormGroup>
			         	</Col>
			         </Row>
			         <FormGroup>
	         			<Label htmlFor='email'> Email </Label>
	         			<Input 
	         				id='email'
	         				value={value.email}
	         				onChange={onChange}
	         			/>
	         		</FormGroup>
	         		<FormGroup>
	         			<Label htmlFor='country'> Country </Label>
	         			<CustomInput type='select' id='country' onChange={onChange}>
	         				<option value={value.country}> {value.country} </option>
	         				{dataRoutes.countries.map((data)=>{
	         					return(
	         						<option value={data.country} onClick={() => formAction('GETCITY', data)}> {data.country} </option>
	         					)
	         				})}
	         			</CustomInput>
	         		</FormGroup>
	         		<FormGroup>
	         			<Label htmlFor='city'> City </Label>
	         			<CustomInput type='select' id='city' onChange={onChange}>
	         				<option value={value.city}> {value.city} </option>
	         				{value.getCity.map((list)=>{
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
	         				onChange={onChange}
	         			/>
	         		</FormGroup>
	         		<FormGroup>
	         			<Label htmlFor='education'> Education </Label>
	         			<Input 
	         				id='education'
	         				value={value.education}
	         				onChange={onChange}
	         			/>
	         		</FormGroup>
	         		<FormGroup>
	         			<Label htmlFor='joindate'> joindate </Label>
	         			<Input 
	         				id='joindate'
	         				type='date'
	         				value={value.joindate}
	         				onChange={onChange}
	         			/>
	         		</FormGroup>
	         		<FormGroup className='text-center'>
	         			<Button color='primary' onClick={()=>formAction('SAVE', '')} disabled={enabled}> Save </Button> {' '}
	         			<Button color='warning' onClick={()=>formAction('UPDATE', '')} disabled={!enabled}> Update </Button> {' '}
	         			<Button color='danger' onClick={()=>formAction('DELETE', '')} disabled={!enabled}> Delete </Button> {' '}
	         			<Button color='info' onClick={()=>formAction('RESET', '')}> Reset </Button>
	         		</FormGroup>
	         	</Form>
	          </ModalBody>
	        </Modal>
    	</div>
	)
}

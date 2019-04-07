import React from 'react'
//reactstrap
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
export const FirebaseModal = ({value, modal, className, onChange, formAction}) => {
	return(
		<div>
	        <Modal isOpen={modal} toggle={() => formAction('RESET', '')} className={className}>
	          <ModalHeader toggle={() => formAction('RESET', '')}>Modal title</ModalHeader>
	          <ModalBody>
	         	<Form>
	         		<FormGroup>
	         			<Label htmlFor='firstName'> firstName </Label>
	         			<Input 
	         				id='firstName'
	         				value={value.firstName}
	         				onChange={onChange}
	         			/>
	         		</FormGroup>
	         		<FormGroup>
	         			<Label htmlFor='lastName'> lastName </Label>
	         			<Input 
	         				id='lastName'
	         				value={value.lastName}
	         				onChange={onChange}
	         			/>
	         		</FormGroup>
	         		<FormGroup>
	         			<Label htmlFor='age'> age </Label>
	         			<Input 
	         				id='age'
	         				value={value.age}
	         				onChange={onChange}
	         			/>
	         		</FormGroup>
	         		<FormGroup>
	         			<Label htmlFor='email'> email </Label>
	         			<Input 
	         				id='email'
	         				value={value.email}
	         				onChange={onChange}
	         			/>
	         		</FormGroup>
	         		<FormGroup>
	         			<Label htmlFor='address'> address </Label>
	         			<Input 
	         				id='address'
	         				value={value.address}
	         				onChange={onChange}
	         			/>
	         		</FormGroup>
	         		<FormGroup className='text-center'>
	         			<Button color='primary' onClick={() => formAction('SAVE', '')}> Save </Button> {' '}
	         			<Button color='warning' onClick={() => formAction('UPDATE', '')}> Update </Button> {' '}
	         			<Button color='danger' onClick={() => formAction('DELETE', '')}> Delete </Button> {' '}
	         			<Button color='info' onClick={() => formAction('RESET', '')}> Reset </Button>
	         		</FormGroup>
	         	</Form>
	          </ModalBody>
	        </Modal>
	    </div>
	)
}

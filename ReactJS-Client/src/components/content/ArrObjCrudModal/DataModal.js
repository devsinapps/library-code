import React from 'react'
//reactstrap
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
export const DataModal = ({value, modal, className, onChange, formAction}) => {
	return(
		<div>
	        <Modal isOpen={modal} toggle={() => formAction('RESET', '')} className={className}>
	          <ModalHeader toggle={() => formAction('RESET', '')}>Modal title</ModalHeader>
	          <ModalBody>
	         	<Form>
	         		<FormGroup>
	         			<Label htmlFor='name'> Name </Label>
	         			<Input 
	         				id='name'
	         				value={value.name}
	         				onChange={onChange}
	         			/>
	         		</FormGroup>
	         		<FormGroup>
	         			<Label htmlFor='username'> username </Label>
	         			<Input 
	         				id='username'
	         				value={value.username}
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
	         			<Label htmlFor='phone'> phone </Label>
	         			<Input 
	         				id='phone'
	         				value={value.phone}
	         				onChange={onChange}
	         			/>
	         		</FormGroup>
	         		<FormGroup>
	         			<Label htmlFor='website'> website </Label>
	         			<Input 
	         				id='website'
	         				value={value.website}
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

import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';

export class FirebaseModal extends React.Component{
	render(){
		const { value } = this.props
		return(
		<div>
	        <Modal isOpen={this.props.modal} toggle={this.props.toggleModal} className={this.props.className}>
	          <ModalHeader toggle={this.props.toggleModal}>Modal title</ModalHeader>
	          <ModalBody>
	         	<Form>
	         		<FormGroup>
	         			<Label htmlFor='firstName'> firstName </Label>
	         			<Input 
	         				id='firstName'
	         				value={value.firstName}
	         				onChange={this.props.onChange}
	         			/>
	         		</FormGroup>
	         		<FormGroup>
	         			<Label htmlFor='lastName'> lastName </Label>
	         			<Input 
	         				id='lastName'
	         				value={value.lastName}
	         				onChange={this.props.onChange}
	         			/>
	         		</FormGroup>
	         		<FormGroup>
	         			<Label htmlFor='age'> age </Label>
	         			<Input 
	         				id='age'
	         				value={value.age}
	         				onChange={this.props.onChange}
	         			/>
	         		</FormGroup>
	         		<FormGroup>
	         			<Label htmlFor='email'> email </Label>
	         			<Input 
	         				id='email'
	         				value={value.email}
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
	         		<FormGroup className='text-center'>
	         			<Button color='primary' onClick={this.props.addData}> Save </Button> {' '}
	         			<Button color='warning' onClick={this.props.updateData}> Update </Button> {' '}
	         			<Button color='danger' onClick={this.props.deleteData}> Delete </Button> {' '}
	         			<Button color='info' onClick={this.props.resetForm}> Reset </Button>
	         		</FormGroup>
	         	</Form>
	          </ModalBody>
	        </Modal>
	    </div>
		)
	}
}
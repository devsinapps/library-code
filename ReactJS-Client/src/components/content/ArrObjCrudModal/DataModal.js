import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';

export class DataModal extends React.Component{
	render(){
		const { value } = this.props
		return(
		<div>
	        <Modal isOpen={this.props.modal} toggle={this.props.toggleModal} className={this.props.className}>
	          <ModalHeader toggle={this.props.toggleModal}>Modal title</ModalHeader>
	          <ModalBody>
	         	<Form>
	         		<FormGroup>
	         			<Label htmlFor='name'> Name </Label>
	         			<Input 
	         				id='name'
	         				value={value.name}
	         				onChange={this.props.onChange}
	         			/>
	         		</FormGroup>
	         		<FormGroup>
	         			<Label htmlFor='username'> username </Label>
	         			<Input 
	         				id='username'
	         				value={value.username}
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
	         			<Label htmlFor='phone'> phone </Label>
	         			<Input 
	         				id='phone'
	         				value={value.phone}
	         				onChange={this.props.onChange}
	         			/>
	         		</FormGroup>
	         		<FormGroup>
	         			<Label htmlFor='website'> website </Label>
	         			<Input 
	         				id='website'
	         				value={value.website}
	         				onChange={this.props.onChange}
	         			/>
	         		</FormGroup>
	         		<FormGroup className='text-center'>
	         			<Button color='primary' onClick={() => this.props.crudMode('SAVE')}> Save </Button> {' '}
	         			<Button color='warning' onClick={() => this.props.crudMode('UPDATE')}> Update </Button> {' '}
	         			<Button color='danger' onClick={() => this.props.crudMode('DELETE')}> Delete </Button> {' '}
	         			<Button color='info' onClick={() => this.props.crudMode('RESET')}> Reset </Button>
	         		</FormGroup>
	         	</Form>
	          </ModalBody>
	        </Modal>
	    </div>
		)
	}
}
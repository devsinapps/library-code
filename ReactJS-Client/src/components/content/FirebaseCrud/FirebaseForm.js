import React, { Component } from 'react'

//Reactstrap
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap'
class FirebaseForm extends Component{
	render(){
		const { value } = this.props
		const enabled = value.userId.length > 0
		return(
			<Form onSubmit={this.props.addData}>
				<Row form>
					<Col lg='4'>
						<FormGroup>
							<Label htmlFor='firstName'> First Name </Label>
							<Input 
								id='firstName'
								value={value.firstName}
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col lg='4'>
						<FormGroup>
							<Label htmlFor='lastName'> Last Name  </Label>
							<Input 
								id='lastName'
								value={value.lastName}
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
							<Label htmlFor='age'> Age </Label>
							<Input 
								id='age'
								value={value.age}
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col lg='4'>
						<FormGroup>
							<Label htmlFor='address'> Address </Label>
							<Input 
								id='address'
								value={value.address}
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
				</Row>
				<FormGroup className='text-center'>
					<Button disabled={enabled}> Save </Button> {' '}
					<Button onClick={this.props.updateData} disabled={!enabled}> Update </Button> {' '}
					<Button onClick={this.props.deleteData} disabled={!enabled}> Delete </Button> {' '}
					<Button onClick={this.props.resetForm}> Reset </Button>
				</FormGroup>
			</Form>
		)
	}
}

export default FirebaseForm
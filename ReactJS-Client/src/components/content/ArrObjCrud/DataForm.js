import React, { Component } from 'react'

//Reactstrap
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap'
export class DataForm extends Component{
	render(){
		const { value } = this.props
		return(
			<Form onSubmit={this.props.addData}>
				<Row form>
					<Col lg='4'>
						<FormGroup>
							<Label htmlFor='name'> Name </Label>
							<Input 
								id='name'
								value={value.name}
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col lg='4'>
						<FormGroup>
							<Label htmlFor='username'> Username </Label>
							<Input 
								id='username'
								value={value.username}
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
							<Label htmlFor='phone'> Phone </Label>
							<Input 
								id='phone'
								value={value.phone}
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col lg='4'>
						<FormGroup>
							<Label htmlFor='website'> Website </Label>
							<Input 
								id='website'
								value={value.website}
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
				</Row>
				<FormGroup className='text-center'>
					<Button> Save </Button> {' '}
					<Button onClick={this.props.updateData}> Update </Button> {' '}
					<Button onClick={this.props.deleteData}> Delete </Button> {' '}
					<Button onClick={this.props.resetForm}> Reset </Button>
				</FormGroup>
			</Form>
		)
	}
}
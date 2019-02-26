import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
export class UnsplashForm extends Component{
	render(){
		return(
			<Form onSubmit={this.props.getSearchImgs}>
				<FormGroup>
					<Label htmlFor='keySearch'> &nbsp; </Label>
					<Input
						id='keySearch'
					/>
				</FormGroup>
				<FormGroup>
					<Label htmlFor='search'> &nbsp; </Label>
					<Button> Search </Button>
				</FormGroup>
			</Form>
		)
	}
}
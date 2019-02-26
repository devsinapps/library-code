import React from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
export class F2FForm extends React.Component{
	render(){
		return(
			<Form onSubmit={this.props.getRecipes}>
				<FormGroup>
					<Label htmlFor='keySearch'> Recipe </Label>
					<Input
						id='keySearch'
					/>
				</FormGroup>
				<FormGroup>
					<Label htmlFor='btn'> &nbsp; </Label>
					<Button> Search </Button>
				</FormGroup>
			</Form>
		)
	}
}
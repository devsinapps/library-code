import React from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
export const F2FForm = ({getRecipes}) => {
	return(
		<Form onSubmit={getRecipes}>
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

import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
export const UnsplashForm = ({getSearchImgs}) => {
	return(
		<Form onSubmit={getSearchImgs}>
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

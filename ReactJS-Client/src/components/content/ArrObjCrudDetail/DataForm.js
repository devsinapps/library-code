import React from 'react'

//Reacttrap
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
export const DataForm = ({value, onChange, updateUser}) => {
	return(
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
				<Label htmlFor='username'> Username </Label>
				<Input
					id='username'
					value={value.username}
					onChange={onChange}
				/>
			</FormGroup>
			<FormGroup>
				<Label htmlFor='email'> Email </Label>
				<Input
					id='email'
					value={value.email}
					onChange={onChange}
				/>
			</FormGroup>
			<FormGroup>
				<Label htmlFor='phone'> Phone </Label>
				<Input
					id='phone'
					value={value.phone}
					onChange={onChange}
				/>
			</FormGroup>
			<FormGroup>
				<Label htmlFor='website'> Website </Label>
				<Input
					id='website'
					value={value.website}
					onChange={onChange}
				/>
			</FormGroup>
			<FormGroup className='text-center'>
				<Label htmlFor='website'> Website </Label>
				<Button onClick={updateUser}> Update </Button>
				<Button> Reset </Button>
			</FormGroup>
		</Form>
	)
}

import React from 'react'

//Container
import { ContainerPage} from './ContainerPage'
//Reactstrap
import { Button } from 'reactstrap'
//Component
import { Controller } from './Controller'
export class Multipage extends React.Component{
	state = {
		page: 1
	}

	mainPage = () => {
		this.setState({
			page: 1
		})
	}

	menuPage = () => {
		this.setState({
			page: 2
		})
	}

	contactPage = () => {
		this.setState({
			page: 3
		})
	}
	render(){
		const { page } = this.state
		const button = {
			button1: <Button color='primary' onClick={this.mainPage}> Content 1 </Button>,
			button2: <Button color='primary' onClick={this.menuPage}> Content 2 </Button>,
			button3: <Button color='primary' onClick={this.contactPage}> Content 3 </Button>
		}
		return(
			<div id='FormMultipage'>
				<ContainerPage lgCol='8' mdCol='8' smCol='8' xsCol='8' colClass='mx-auto' brCard='mb-3' tlCard={button} center='text-center'>
					<Controller 
						page={page}
					/>
				</ContainerPage>
			</div>
		)
	}
}
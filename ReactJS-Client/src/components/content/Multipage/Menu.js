import React from 'react'

//Reactstrap
import { CardTitle, CardText } from 'reactstrap'

export class Menu1 extends React.Component{
	render(){
		return(
			<div>
				<CardTitle> Dashboard </CardTitle>
				<CardText> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </CardText>
			</div>
		)
	}
}

export class Menu2 extends React.Component{
	render(){
		return(
			<div>
				<CardTitle> Menu </CardTitle>
				<CardText> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters </CardText>
			</div>
		)
	}
}

export class Menu3 extends React.Component{
	render(){
		return(
			<div>
				<CardTitle> Contact </CardTitle>
				<CardText> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. </CardText>
			</div>
		)
	}
}
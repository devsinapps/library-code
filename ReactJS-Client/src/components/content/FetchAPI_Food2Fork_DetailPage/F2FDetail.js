import React from 'react'
//Container
import { ContainerFluidRow, Collapsible } from './../../grid/GridBootstrap'
//Reactstrap
import { CardTitle, CardImg, CardText } from 'reactstrap'
const API = "5c9aead891ab3c3bf462ec1e3d1a99ee"
export class F2FDetail extends React.Component{
	state = {
		recipe: {}
	}

	componentDidMount(){
		//Get Recipe Id From Main Component
		const keySearch = this.props.match.params.recipe_id
		fetch(`https://www.food2fork.com/api/get?key=${API}&rId=${keySearch}`)
		.then(response => response.json())
		.then(data => this.setState({
			recipe: data.recipe
		}))
	}
	render(){
		const { recipe } = this.state
		return(
			<ContainerFluidRow>
				<Collapsible lgCol='12' mdCol='12' smCol='12' brCard='mb-3' tlCard='Search Form'>
					<CardTitle> {recipe.publisher} </CardTitle>
					<CardText> {recipe.title} </CardText>
				</Collapsible>
			</ContainerFluidRow>
		)
	}
}
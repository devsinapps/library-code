import React from 'react'
//Container
import { ContainerFluidRow, Collapsible } from './../../grid/GridBootstrap'
//Reactstrap
import { CardColumns } from 'reactstrap'
//Component
import { F2FForm } from './F2FForm'
import { F2FSummary } from './F2FSummary'

const API = "5c9aead891ab3c3bf462ec1e3d1a99ee"
export class FetchAPI_Food2Fork extends React.Component{
	state = {
		recipes: [],
		defaultPage: 1
	}

	getRecipes = async (e) => {
		e.preventDefault();
		const { defaultPage } = this.state
		const keySearch = e.target.keySearch.value
		const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API}&q=${keySearch}&page=${defaultPage}`)
		const data = await api_call.json()
		this.setState({
			recipes: data.recipes
		})
	}
	render(){
		const { recipes } = this.state
		return(
			<div id='FetchAPI_Food2Fork'>
				<ContainerFluidRow>
					<Collapsible lgCol='12' mdCol='12' smCol='12' brCard='mb-3' tlCard='Search Form'>
						<F2FForm 
							getRecipes={this.getRecipes}
						/>
					</Collapsible>
				</ContainerFluidRow>
				<ContainerFluidRow>
					<CardColumns>
						<F2FSummary 
							recipes={recipes}
						/>
					</CardColumns>
				</ContainerFluidRow>
			</div>
		)
	}
}
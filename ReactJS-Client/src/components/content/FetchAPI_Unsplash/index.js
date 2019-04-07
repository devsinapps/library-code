import React from 'react'
//Container
import { ContainerFluidRow, Collapsible } from './../../grid/GridBootstrap'
//Reactstrap
import { CardColumns } from 'reactstrap'
//Component
import { UnsplashForm } from './UnsplashForm'
import { UnsplashSummary } from './UnsplashSummary'
const API = "a9f020ade0a6ba6d2ba84ba91345fb4e73fa64ad1c0b6221233b55c6f12c3b29";
export class FetchAPI_Unsplash extends React.Component{
	state = {
		randomImgs: [],
		searchImgs: [],
		defaultPage: 1,
		keySearch: ''
	}

	//Handle Get Random Img per Day
	componentDidMount(){
		fetch(`https://api.unsplash.com/photos/?page=1&client_id=${API}`)
		.then(response => response.json())
		.then(data => this.setState({
			randomImgs: data
		}))
	}

	//Handle Search Form
	getSearchImgs = async (e) => {
		e.preventDefault();
		const keySearch = e.target.keySearch.value
		const { defaultPage } = this.state
		const api_call = await fetch(`https://api.unsplash.com/search/collections?page=${defaultPage}&query=${keySearch}&client_id=${API}`)
		const data = await api_call.json();
		this.setState({
			searchImgs: data.results,
			keySearch: keySearch
		})
	}


	//Handle Button Next 
	getNextSearchImgs = async (e) => {
		const { keySearch, defaultPage } = this.state
		const nextPage = defaultPage + 1
		const api_call = await fetch(`https://api.unsplash.com/search/collections?page=${nextPage}&query=${keySearch}&client_id=${API}`)
		const data = await api_call.json();
		this.setState({
			searchImgs: data.results,
			defaultPage: nextPage
		})
	}
	render(){
		const { randomImgs, searchImgs } = this.state
		return(
			<div id="Unsplash">
				<ContainerFluidRow>
					<Collapsible lgCol='12' mdCol='12' smCol='12' brCard='mb-3' tlCard='search'>
						<UnsplashForm 
							getSearchImgs={this.getSearchImgs}
						/>
					</Collapsible>
				</ContainerFluidRow>
				<ContainerFluidRow>
					<CardColumns>
						<UnsplashSummary 
							randomImgs={randomImgs}
							searchImgs={searchImgs}
							getNextSearchImgs={this.getNextSearchImgs}
						/>
					</CardColumns>
				</ContainerFluidRow>
			</div>
		)
	}
}
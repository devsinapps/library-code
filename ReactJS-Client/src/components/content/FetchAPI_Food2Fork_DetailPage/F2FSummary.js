import React from 'react'
//Tools
import { Link } from 'react-router-dom'
//Reactstrap
import { Card, CardBody, CardImg, CardTitle } from 'reactstrap'
export class F2FSummary extends React.Component{
	render(){
		const { recipes } = this.props
		return(
			<div>
				{recipes && recipes.map((recipe)=>{
					return(
						<Link to={'/r_detail/'+recipe.recipe_id}>
							<Card key={recipe.recipe_id}>
								<CardImg top src={recipe.image_url} />
								<CardBody>
									<CardTitle> {recipe.title} </CardTitle>
								</CardBody>
							</Card>
						</Link>
					)
				})}
			</div>
		)
	}
}
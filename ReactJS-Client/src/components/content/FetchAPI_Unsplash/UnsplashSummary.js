import React from 'react'
import { Card, CardFooter, CardImg } from 'reactstrap'
export const  UnsplashSummary = ({randomImgs, searchImgs, getNextSearchImgs}) => {
	if(searchImgs.length === 0){
		return(
			<div>
				{randomImgs && randomImgs.map((img)=>{
					let title = img.description == null ? 'Photo Of The Day' : img.description;
					return(
						<Card key={img.id}>
							<CardImg top src={img.urls.thumb} />
							<CardFooter>
								{title}
							</CardFooter>
						</Card>
					)
				})}
			</div>
		)
	}
	else{
		return(
			<div>
				{searchImgs.map((img)=>{
					return(
						<Card key={img.id}>
							<CardImg top src={img.cover_photo.urls.thumb} />
							<CardFooter>
								{img.title}
							</CardFooter>
						</Card>
					)
				})}
				<button onClick={getNextSearchImgs}> next </button>
			</div>
		)
	}
}

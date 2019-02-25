import React from 'react'

//Component
import { Main } from './../components/content/Main'
import { ArrObjCrud } from './../components/content/ArrObjCrud'
import FirebaseCrud from './../components/content/FirebaseCrud'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
export class Routes extends React.Component{
	render(){
		return(
			<Router>
				<div id='Routes'>
					<Switch>
						<Route path='/' component={Main} exact />
						<Route path='/arrobjcrud' component={ArrObjCrud} />
						<Route path='/firebasecrud' component={FirebaseCrud} />
					</Switch>
				</div>
			</Router>
		)
	}
}
import React from 'react'

//Component
import { Main } from './../components/content/Main'
import { ArrObjCrud } from './../components/content/ArrObjCrud'
import { ArrObjCrudModal } from './../components/content/ArrObjCrudModal'
import FirebaseCrud from './../components/content/FirebaseCrud'
import { FetchAPI_Unsplash } from './../components/content/FetchAPI_Unsplash'

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
export class Routes extends React.Component{
	render(){
		return(
			<Router>
				<div id='Routes'>
					<Switch>
						<Route path='/' component={Main} exact />
						<Route path='/arrobjcrud' component={ArrObjCrud} />
						<Route path='/arrobjcrudmodal' component={ArrObjCrudModal} />
						<Route path='/firebasecrud' component={FirebaseCrud} />
						<Route path='/fetchapiunsplash' component={FetchAPI_Unsplash} />
					</Switch>
				</div>
			</Router>
		)
	}
}
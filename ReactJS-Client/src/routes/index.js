import React from 'react'

//Component
import { Main } from './../components/content/Main'
import { ArrObjCrud } from './../components/content/ArrObjCrud'
import { ArrObjCrudModal } from './../components/content/ArrObjCrudModal'
import FirebaseCrud from './../components/content/FirebaseCrud'
import FirebaseCrudModal from './../components/content/FirebaseCrudModal'
import { FetchAPI_Unsplash } from './../components/content/FetchAPI_Unsplash'
import { FetchAPI_Food2Fork } from './../components/content/FetchAPI_Food2Fork_DetailPage'
	import { F2FDetail } from './../components/content/FetchAPI_Food2Fork_DetailPage/F2FDetail'

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
						<Route path='/firebasecrudmodal' component={FirebaseCrudModal} />
						<Route path='/fetchapiunsplash' component={FetchAPI_Unsplash} />
						<Route path='/fetchapifood2fork' component={FetchAPI_Food2Fork} />	
							<Route path='/r_detail/:recipe_id' component={F2FDetail} />
					</Switch>
				</div>
			</Router>
		)
	}
}
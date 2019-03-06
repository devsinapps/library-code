import React from 'react'

//Layout
import { TopNav } from './../components/layout/TopNav'
import { SideNav } from './../components/layout/SideNav'
//Component
import { Main } from './../components/content/Main'
import { ArrObjCrud } from './../components/content/ArrObjCrud'
import { ArrObjCrudModal } from './../components/content/ArrObjCrudModal'
import { ArrObjCrudDetail }	from './../components/content/ArrObjCrudDetail'
	import { DataDetail } from './../components/content/ArrObjCrudDetail/DataDetail'

//Firebase	
import FirebaseCrud from './../components/content/FirebaseCrud'
import FirebaseCrudModal from './../components/content/FirebaseCrudModal'
import FirebaseCrudDetailPage from './../components/content/FirebaseCrudDetailPage'
	import FirebaseDetail from './../components/content/FirebaseCrudDetailPage/FirebaseDetail'
import FMAuth_Firebase from './../components/content/FormMultistep_Auth_Firebase'

//PostgreSQL
import { PostgreSQLCrud } from './../components/content/PostgreSQLCrud'

//GraphQL
import { GraphQLCrud } from './../components/content/GraphQLCrud'

//Fetch API
import { FetchAPI_Unsplash } from './../components/content/FetchAPI_Unsplash'

import { FetchAPI_Food2Fork } from './../components/content/FetchAPI_Food2Fork_DetailPage'
	import { F2FDetail } from './../components/content/FetchAPI_Food2Fork_DetailPage/F2FDetail'

import { FMAuth } from './../components/content/FormMultistep_Auth'
import { Multipage } from './../components/content/Multipage'
 
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'


//Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

library.add(faAngleRight)

export class Routes extends React.Component{
	render(){
		return(
			<Router>
				<div id='Routes'>
					<TopNav />
					<SideNav />
					<div className='Content'>
						<Switch>
							<Route path='/' component={Main} exact />
							{/* Array Object Crud */}
							<Route path='/arrobjcrud' component={ArrObjCrud} />
							<Route path='/arrobjcrudmodal' component={ArrObjCrudModal} />
							<Route path='/arrobjcruddetail' component={ArrObjCrudDetail} />
								<Route path='/arr_detail/:user_id' component={DataDetail} />

							{/* Firebase */}
							<Route path='/firebasecrud' component={FirebaseCrud} />
							<Route path='/firebasecrudmodal' component={FirebaseCrudModal} />
							<Route path='/firebasecruddetailpage' component={FirebaseCrudDetailPage} />
								<Route path='/f_detail/:user_id' component={FirebaseDetail} />
							<Route path='/fmauth_firebase' component={FMAuth_Firebase} />

							{/* PostgreSQL */}
							<Route path='/postgrecrud' component={PostgreSQLCrud} />

							{/* GraphQL */}
							<Route path='/graphcrud' component={GraphQLCrud} />

							{/* Fetch API */}
							<Route path='/fetchapiunsplash' component={FetchAPI_Unsplash} />
							<Route path='/fetchapifood2fork' component={FetchAPI_Food2Fork} />	
								<Route path='/r_detail/:recipe_id' component={F2FDetail} />

							{/* Mix */}
							<Route path='/fmauth' component={FMAuth} />	
							<Route path='/multipage' component={Multipage} />	
						</Switch>
					</div>
				</div>
			</Router>
		)
	}
}
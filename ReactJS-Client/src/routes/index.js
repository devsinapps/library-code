import React from 'react'
//Tools
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
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
import FirebaseAuth from './../components/content/FirebaseAuth'
import FirebaseAuthMediaSocial from './../components/content/FirebaseAuthMediaSocial'

//PostgreSQL
import PostgreSQLCrud from './../components/content/PostgreSQLCrud'
import PostgreSQLCrudModal from './../components/content/PostgreSQLCrudModal'

//GraphQL
import { GraphQLCrud } from './../components/content/GraphQLCrud'

//Fetch API
import { FetchAPI_Unsplash } from './../components/content/FetchAPI_Unsplash'
import { FetchAPI_Food2Fork } from './../components/content/FetchAPI_Food2Fork_DetailPage'
	import { F2FDetail } from './../components/content/FetchAPI_Food2Fork_DetailPage/F2FDetail'

//Mix
import { FMAuth } from './../components/content/FormMultistep_Auth'
import { Multipage } from './../components/content/Multipage'
import { PassingPropsFromRoutes } from './../components/content/PassingPropsFromRoutes'



//Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

library.add(faAngleRight)
class Routes extends React.Component{
	passingFunction = () => {
		alert('Props Function from routes')
	}
	render(){
		const { dataRoutes } = this.props
		const passingData = {
			title: 'Props From Routes'
		}
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
							<Route path='/firebasecrud' render={(routeProps) => (<FirebaseCrud {...routeProps} dataRoutes={dataRoutes}/> )}/>
							<Route path='/firebasecrudmodal' render={(routeProps) => (<FirebaseCrudModal {...routeProps} dataRoutes={dataRoutes}/> )}/>	
							<Route path='/firebasecruddetailpage' render={(routeProps) => (<FirebaseCrudDetailPage {...routeProps} dataRoutes={dataRoutes}/> )}/>		
								<Route path='/f_detail/:user_id' component={FirebaseDetail} />
							<Route path='/firebaseauth' component={FirebaseAuth} />
							<Route path='/firebaseauthmediasocial' component={FirebaseAuthMediaSocial} />

							{/* PostgreSQL */}
							<Route path='/postgrecrud' render={(routeProps) => (<PostgreSQLCrud {...routeProps} dataRoutes={dataRoutes}/> )}/>
							<Route path='/postgrecrudmodal' render={(routeProps) => (<PostgreSQLCrudModal {...routeProps} dataRoutes={dataRoutes}/> )}/>

							{/* GraphQL */}
							<Route path='/graphcrud' component={GraphQLCrud} />

							{/* Fetch API */}
							<Route path='/fetchapiunsplash' component={FetchAPI_Unsplash} />
							<Route path='/fetchapifood2fork' component={FetchAPI_Food2Fork} />	
								<Route path='/r_detail/:recipe_id' component={F2FDetail} />

							{/* Mix */}
							<Route path='/fmauth' component={FMAuth} />	
							<Route path='/multipage' component={Multipage} />	
							//Passing Props From routes to other component
							<Route path='/passingprops' render={(routeProps) => (<PassingPropsFromRoutes {...routeProps} passingData={passingData} passingFunction={this.passingFunction}/> )}/>	
						</Switch>
					</div>
				</div>
			</Router>
		)
	}
}

const mapStateToProps = (state) => {
	return{
		dataRoutes: state
	}
}

export default compose(
		connect(mapStateToProps),
		firestoreConnect([
			{
				collection: 'users'
			}
		])
	)(Routes)
import React from 'react'
//Tools
import { connect } from 'react-redux'
//Container 
import { ContainerFluidRow, Collapsible } from './../../grid/GridBootstrap'
//Reactstrap
import { Button } from 'reactstrap'
//Component
import { PostgreTable } from './PostgreTable'
import { PostgreModal } from './PostgreModal'
class PostgreSQLCrudModal extends React.Component{
	state = {
		employees: [],
		getCity: [],
		employeeId: '',
		firstname: '',
		lastname: '',
		age: '',
		gender: '',
		email: '',
		country: '',
		city: '',
		address: '',
		education: '',
		joindate: '',
		modal: false
	}

	componentDidMount(){
		fetch('http://localhost:3001/api/employees')
		.then((response)=>{
			response.json()
			.then((data)=>{
				this.setState({
					employees: data
				})
			})
		})
	}

	onChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	formAction = (mode, data) => {
		const { employees, employeeId, firstname, lastname, age, gender, email, country, city, address, education, joindate } = this.state
		switch(mode){
			case 'GETCITY':
				this.setState({
					getCity: data.states
				})
				break;

			case 'GETDATA':
				this.setState({
					employeeId: data.id,
					firstname: data.firstname,
					lastname: data.lastname,
					age: data.age,
					gender: data.gender,
					email: data.email,
					country: data.country,
					city: data.city,
					address: data.address,
					education: data.education,
					joindate: data.joindate,
					modal: !this.state.modal
				})
				break;

			case 'SAVE':
				const dataAdd = {
					firstname, 
					lastname, 
					age, 
					gender, 
					email, 
					country, 
					city, 
					address,
					education, 
					joindate
				}

				if(firstname.length === 0 || lastname.length === 0 || age.length === 0 || gender.length === 0 || email.length === 0 || country.length === 0 || city.length === 0 || address.length === 0 || education.length === 0 || joindate.length === 0){
					alert('Data Null')
				}else{
					const requestAdd = new Request('http://localhost:3001/api/new-employee',{
						method: "POST",
						headers: new Headers({ 'Content-Type': 'application/json'}),
						body: JSON.stringify(dataAdd)
					})
					employees.push(dataAdd)
					this.setState({
						employees: employees,
						firstname: '',
						lastname: '',
						age: '',
						gender: '',
						email: '',
						country: '',
						city: '',
						address: '',
						education: '',
						joindate: '',
						modal: !this.state.modal
					})
					fetch(requestAdd)
					.then((response)=>{
						response.json()
						.then((data)=>{
							console.log(data)
						})
					}).catch((err)=>{
						console.log(err)
					})
				} 
				break;

			case 'UPDATE':
				const dataUpdate = {
					firstname, 
					lastname, 
					age, 
					gender, 
					email, 
					country, 
					city, 
					address, 
					education, 
					joindate
				}

				const requestUpdate = new Request('http://localhost:3001/api/update-employee/'+employeeId,{
					method: "PUT",
					headers: new Headers({ 'Content-Type': 'application/json'}),
					body: JSON.stringify(dataUpdate)
				})

				const checkUpd = window.confirm('Update?')
				if(checkUpd === true){
					fetch(requestUpdate)
					.then((response)=>{
						response.json()
						.then((data)=>{
							console.log(data)
						})
					})

					for(let i = 0; i < employees.length; i++){
						if(employees[i].id && employees[i].id === employeeId){
							employees[i].id = employeeId
							employees[i].firstname = firstname
							employees[i].lastname = lastname
							employees[i].age = age
							employees[i].gender = gender
							employees[i].email = email
							employees[i].country = country
							employees[i].city = city
							employees[i].address = address
							employees[i].education = education
							employees[i].joindate = joindate
							this.setState({
								employees: employees,
								firstname: '',
								lastname: '',
								age: '',
								gender: '',
								email: '',
								country: '',
								city: '',
								address: '',
								education: '',
								joindate: '',
								modal: !this.state.modal
							})
						}
					}
				}
				break;

			case 'DELETE':
				const checkDel = window.confirm('Delete?')
				if(checkDel === true){
					const requestDel = new Request('http://localhost:3001/api/delete-employee/'+employeeId,{
						method: 'DELETE'
					})

					const employee = employees.find(function(employee){
						return employee.id === employeeId
					})

					//Using For Loop
					/*for(let i = 0; i < employees.length; i++){
						if(employees[i].id && employees[i].id === employeeId){
							employees.splice(i, 1)
							this.setState({
								employees: employees,
								firstname: '',
								lastname: '',
								age: '',
								gender: '',
								email: '',
								country: '',
								city: '',
								address: '',
								education: '',
								joindate: '',
								modal: !this.state.modal
							})
						}
					}*/

					fetch(requestDel)
					.then((response)=>{
						employees.splice(employees.indexOf(employee), 1)
						this.setState({
							employees: employees,
							firstname: '',
							lastname: '',
							age: '',
							gender: '',
							email: '',
							country: '',
							city: '',
							address: '',
							education: '',
							joindate: '',
							modal: !this.state.modal
						})
						response.json()
						.then((data)=>{
							console.log(data)
						})
					})
				}
				break;

			case 'RESET':
				this.setState({
					employeeId: '',
					firstname: '',
					lastname: '',
					age: '',
					gender: '',
					email: '',
					country: '',
					city: '',
					address: '',
					education: '',
					joindate: '',
					modal: !this.state.modal
				})
				break;

			case 'OPEN':
				this.setState({
					employeeId: '',
					firstname: '',
					lastname: '',
					age: '',
					gender: '',
					email: '',
					country: '',
					city: '',
					address: '',
					education: '',
					joindate: '',
					modal: !this.state.modal
				})
				break;

			default:
				return null
		}
	}
	render(){
		const { employees, modal } = this.state
		const { dataRoutes } = this.props
		const { getCity, employeeId, firstname, lastname, age, gender, email, country, city, address, education, joindate } = this.state
		const value = { getCity, employeeId, firstname, lastname, age, gender, email, country, city, address, education, joindate }
		return(
			<div id='PostgreSQLCrudModal'>
				<ContainerFluidRow>
					<Collapsible lgCol='12' mdCol='12' smCol='12' brCard='mb-3' tlCard='Table'>
						<PostgreTable 
							employees={employees}
							formAction={this.formAction}
						/>
						<Button color='primary' onClick={()=>this.formAction('OPEN', '')}> + </Button>
					</Collapsible>
				</ContainerFluidRow>
				<PostgreModal 
					modal={modal}
					value={value}
					dataRoutes={dataRoutes}
					onChange={this.onChange}
					formAction={this.formAction}
				/>
			</div>
		)
	}
}

export default PostgreSQLCrudModal

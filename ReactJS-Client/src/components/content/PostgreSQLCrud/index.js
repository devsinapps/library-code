import React from 'react'
//Tools
import { connect } from 'react-redux'
//Container
import { ContainerFluidRow, Collapsible } from './../../grid/GridBootstrap'
//Component
import { PostgreTable } from './PostgreTable'
import { PostgreForm } from './PostgreForm'
class PostgreSQLCrud extends React.Component{
	state = {
		employess: [],
		employeeId: '',
		getCity: [],
		firstname: '',
		lastname: '',
		age: '',
		gender: '',
		email: '',
		country: '',
		city: '',
		address: '',
		education: '',
		joindate: ''
	}

	componentDidMount(){
		//Make Query to Connect with server PostgreSQL
		fetch('http://localhost:3001/api/employees')
		.then((response) =>{
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
					joindate: data.joindate
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

				if(firstname.length == 0 || lastname.length == 0 || age.length == 0 || gender.length == 0 || email.length == 0 || country.length == 0 || city.length == 0 || address.length == 0 || education.length == 0 || joindate.length == 0){
					alert('firstname kosong');
				}else{
					
					const requestAdd = new Request('http://localhost:3001/api/new-employee', {
						method: 'POST',
						headers: new Headers({ 'Content-Type': 'application/json'}),
						body: JSON.stringify(dataAdd)
					})

					employees.push(dataAdd);
					this.setState({
						employess: employees,
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
						joindate: ''
					})

					fetch(requestAdd)
					.then((response)=>{
						response.json()
						.then((data)=>{
							console.log(data)
						})
					})
					.catch((err)=>{
						console.log(err)
					})
				}
				break;

			case 'UPDATE':
				const checkUpd = window.confirm('Update?');
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
					method: 'PUT',
					headers: new Headers({ 'Content-Type': 'application/json'}),
					body: JSON.stringify(dataUpdate)
				})

				if(checkUpd === true){
					fetch(requestUpdate)
					.then((response)=>{
						response.json()
						.then((data)=>{
							console.log(data)
						})
					})
					.catch((err)=>{
						console.log(err)
					})
					//Update view if update user success
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
								joindate: ''
							})
						}
					}
				}else{
					return null
				}
				break;

			case 'DELETE':
				const checkDel = window.confirm('Delete Data?');
				const requestDel = new Request('http://localhost:3001/api/delete-employee/'+employeeId, {
					method: "DELETE"
				})
				if(checkDel === true){
					const employee = employees.find(function(employee){
						return employee.id === employeeId
					})
					fetch(requestDel)
					.then((response)=>{
						employees.splice(employees.indexOf(employee), 1);
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
							joindate: ''
						})
						response.json()
						.then((data)=>{
							console.log(data);
						})
					})

					//Using For Looping
					/*for(let i = 0; i < employees.length; i++){
						if(employees[i].id && employees[i].id === employeeId){
							fetch(request)
							.then((response)=>{
								employees.splice(employees[i], 1);
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
									joindate: ''
								})
								response.json()
								.then((data)=>{
									console.log(data);
								})
							})
						}
					}*/
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
					joindate: ''
				})
				break;

			default:
				return null
		}
	}
	render(){
		const { employees } = this.state
		const { dataRoutes } = this.props
		const { getCity, employeeId, firstname, lastname, age, gender, email, country, city, address, education, joindate } = this.state
		const value = { getCity, employeeId, firstname, lastname, age, gender, email, country, city, address, education, joindate }
		return(
			<div id='PostgreSQLCrud'>
				<ContainerFluidRow>
					<Collapsible lgCol='12' mdCol='12' smCol='12' brCard='mb-3' tlCard='Table'>
						<PostgreTable 
							employees={employees}
							formAction={this.formAction}
						/>
					</Collapsible>
				</ContainerFluidRow>
				<ContainerFluidRow>
					<Collapsible lgCol='12' mdCol='12' smCol='12' brCard='mb-3' tlCard='Table'>
						<PostgreForm 
							value={value}
							dataRoutes={dataRoutes}
							onChange={this.onChange}
							formAction={this.formAction}
						/>
					</Collapsible>
				</ContainerFluidRow>
			</div>
		)
	}
}

export default PostgreSQLCrud
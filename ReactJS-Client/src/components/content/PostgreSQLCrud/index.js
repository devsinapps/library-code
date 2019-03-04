import React from 'react'

//Container
import { ContainerRow, ColCard } from './../../grid/GridBootstrap'
//Component
import { PostgreTable } from './PostgreTable'
import { PostgreForm } from './PostgreForm'
export class PostgreSQLCrud extends React.Component{
	state = {
		employess: [],
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
	getDataRow = (employee) => {
		this.setState({
			employeeId: employee.id,
			firstname: employee.firstname,
			lastname: employee.lastname,
			age: employee.age,
			gender: employee.gender,
			email: employee.email,
			country: employee.country,
			city: employee.city,
			address: employee.address,
			education: employee.education,
			joindate: employee.joindate
		})
	}

	onChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	//Handle Add Data
	addData = () => {
		const { employees } = this.state
		const { firstname, lastname, age, gender, email, country, city, address, education, joindate } = this.state
		const data = {
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
			
			const request = new Request('http://localhost:3001/api/new-employee', {
				method: 'POST',
				headers: new Headers({ 'Content-Type': 'application/json'}),
				body: JSON.stringify(data)
			})

			employees.push(data);
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

			fetch(request)
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
	}
	//Handle Update
	updateData = () => {
		const { employees } = this.state
		const check = window.confirm('Update?');
		const { employeeId, firstname, lastname, age, gender, email, country, city, address, education, joindate } = this.state
		const data = {
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

		const request = new Request('http://localhost:3001/api/update-employee/'+employeeId,{
			method: 'PUT',
			headers: new Headers({ 'Content-Type': 'application/json'}),
			body: JSON.stringify(data)
		})

		if(check === true){
			fetch(request)
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
	}
	//Handle Delete Data
	deleteData = () => {
		const { employeeId, employees } = this.state
		const check = window.confirm('Delete Data?');
		const request = new Request('http://localhost:3001/api/delete-employee/'+employeeId, {
			method: "DELETE"
		})
		if(check === true){
			const employee = employees.find(function(employee){
				return employee.id === employeeId
			})
			fetch(request)
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
	}
	//Handle Reset
	resetForm = () => {
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
	}
	render(){
		const { employees } = this.state
		const { employeeId, firstname, lastname, age, gender, email, country, city, address, education, joindate } = this.state
		const value = { employeeId, firstname, lastname, age, gender, email, country, city, address, education, joindate }
		return(
			<div id='PostgreSQLCrud'>
				<ContainerRow>
					<ColCard lgCol='12' mdCol='12' smCol='12' xsCol='12' colClass='mx-auto' brCard='mb-3' tlCard='Table'>
						<PostgreTable 
							employees={employees}
							getDataRow={this.getDataRow}
						/>
					</ColCard>
				</ContainerRow>
				<ContainerRow>
					<ColCard lgCol='12' mdCol='12' smCol='12' xsCol='12' colClass='mx-auto' brCard='mb-3' tlCard='Table'>
						<PostgreForm 
							value={value}
							onChange={this.onChange}
							addData={this.addData}
							updateData={this.updateData}
							deleteData={this.deleteData}
							resetForm={this.resetForm}
						/>
					</ColCard>
				</ContainerRow>
			</div>
		)
	}
}
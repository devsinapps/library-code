import React from 'react'
//Tools
import { connect } from 'react-redux'
//Container 
import { ContainerRow, ColCard } from './../../grid/GridBootstrap'
//Reactstrap
import { Button } from 'reactstrap'
//Component
import { PostgreTable } from './PostgreTable'
import { PostgreModal } from './PostgreModal'
class PostgreSQLCrudModal extends React.Component{
	state = {
		employees: [],
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
			joindate: employee.joindate,
			modal: !this.state.modal
		})
	}

	onChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	toggleAdd = (e) => {
		this.setState({
			modal: !this.state.modal
		})
	}

	addData = (e) => {
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

		if(firstname.length === 0 || lastname.length === 0 || age.length === 0 || gender.length === 0 || email.length === 0 || country.length === 0 || city.length === 0 || address.length === 0 || education.length === 0 || joindate.length === 0){
			alert('Data Null')
		}else{
			const request = new Request('http://localhost:3001/api/new-employee',{
				method: "POST",
				headers: new Headers({ 'Content-Type': 'application/json'}),
				body: JSON.stringify(data)
			})
			employees.push(data)
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
			fetch(request)
			.then((response)=>{
				response.json()
				.then((data)=>{
					console.log(data)
				})
			}).catch((err)=>{
				console.log(err)
			})
		} 
	}

	deleteData = (e) => {
		const { employees, employeeId } = this.state
		const check = window.confirm('Delete?')
		if(check === true){
			const request = new Request('http://localhost:3001/api/delete-employee/'+employeeId,{
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

			fetch(request)
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
	}

	updateData = (e) => {
		const { employees } = this.state
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
			method: "PUT",
			headers: new Headers({ 'Content-Type': 'application/json'}),
			body: JSON.stringify(data)
		})

		const check = window.confirm('Update?')
		if(check === true){
			fetch(request)
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
	}

	resetForm = (e) => {
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
	}
	render(){
		const { employees, modal } = this.state
		const { employeeId, firstname, lastname, age, gender, email, country, city, address, education, joindate } = this.state
		const { countries } = this.props
		const value = { employeeId, firstname, lastname, age, gender, email, country, city, address, education, joindate }
		return(
			<div id='PostgreSQLCrudModal'>
				<ContainerRow>
					<ColCard lgCol='12' mdCol='12' smCol='12' xsCol='12' colClass='mx-auto' brCard='mb-3' tlCard='Table'>
						<PostgreTable 
							employees={employees}
							getDataRow={this.getDataRow}
						/>
						<Button color='primary' onClick={this.toggleAdd}> + </Button>
					</ColCard>
				</ContainerRow>
				<PostgreModal 
					modal={modal}
					value={value}
					countries={countries}
					onChange={this.onChange}
					addData={this.addData}
					deleteData={this.deleteData}
					updateData={this.updateData}
					resetForm={this.resetForm}
				/>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return{
		countries: state.countries
	}
}

export default connect(mapStateToProps)(PostgreSQLCrudModal)

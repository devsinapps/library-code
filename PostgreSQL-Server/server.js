const express	 = require('express'),
	  bodyParser = require('body-parser'),
	  morgan	 = require('morgan'),
	  cors		 = require('cors'),
	  pg		 = require('pg');

//Make Default PORT
const PORT = 3001;
//PostgreSQL Query
const pool = new pg.Pool({
	post: 5432,
	password: 'admin',
	database: 'main_database',
	max: 10,
	host: 'localhost',
	user: 'postgres'
})

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(morgan('dev'));

//This code you can get from web https://enable-cors.org/server_expressjs.html
	//Just Copy and edit 
app.use(function(request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



//Query Get Data From PostgreSQL Server
	//Make API Url
app.get('/api/employees', ((request, response)=>{
	pool.connect((err, db, done)=>{
		if(err){
			return response.status(400).send(err);
		}else{
			db.query('SELECT * FROM human_resources.employees', ((err,table)=>{
				done();
				if(err){
					return response.status(400).send(err);
				}else{
					return response.status(200).send(table.rows)
				}
			}))
		}
	})
}))

app.post('/api/new-employee', ((request, response)=>{
	const firstname = request.body.firstname;
	const lastname = request.body.lastname;
	const age = request.body.age;
	const gender = request.body.gender;
	const email = request.body.email;
	const country = request.body.country;
	const city = request.body.city;
	const address = request.body.address;
	const education = request.body.education;
	const joindate = request.body.joindate;
	const values = [firstname, lastname, age, gender, email, country, city, address, education, joindate];
	pool.connect((err, db, done)=>{
		if(err){
			return response.status(400).send(err);
		}else{
			db.query('INSERT INTO human_resources.employees (firstname, lastname, age, gender, email, country, city, address, education, joindate) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)', [...values], (err, table)=>{
				if(err){
					return response.status(400).send(err);
				}else{
					console.log('DATA INSERTED');
					db.end();
					response.status(201).send({message: 'DATA INSERTED'});
				}
			})
		}
	})
}))

app.put('/api/update-employee/:id', ((request, response)=>{
	const id = request.params.id;
	const firstname  = request.body.firstname;
	const lastname 	 = request.body.lastname;
	const age 		 = request.body.age;
	const gender 	 = request.body.gender;
	const email 	 = request.body.email;
	const country 	 = request.body.country;
	const city 		 = request.body.city;
	const address 	 = request.body.address;
	const education  = request.body.education;
	const joindate 	 = request.body.joindate;
	pool.connect((err, db, done)=>{
		if(err){
			return response.status(400).send(err);
		}else{
			//Set value from client to value database where id is id Row Clicked
			db.query(`UPDATE human_resources.employees SET 
						firstname='${firstname}', 
						lastname='${lastname}', 
						age=${age}, 
						gender='${gender}',
						email='${email}', 
						country='${country}', 
						city='${city}', 
						address='${address}', 
						education='${education}', 
						joindate='${joindate}' 
						WHERE id=${id}`), (err,table) => {
				if(err){
					return response.status(400).send(err);
				}
				else{
					console.log("DATA UPDATED");
					response.status(201).send({message: 'DATA UPDATED'});
				}
			}
		}
	})
}))

app.delete('/api/delete-employee/:id', ((request,response)=>{
	const id = request.params.id;
	pool.connect((err, db, done)=>{
		if(err){
			return response.status(400).send(err);
		}else{
			db.query(`DELETE FROM human_resources.employees WHERE id=${id}`, (err, table)=>{
				if(err){
					return response.status(400).send(err);
				}else{
					console.log("DATA DELETED");
					response.status(200).send({message: 'DELETE'});
				}
			})
		}
	})
}))

app.listen(PORT, () => console.log('PostgreSQL Server on PORT 3001'));
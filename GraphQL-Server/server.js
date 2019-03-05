const express		= require('express'),
	  graphqlHTTP	= require('express-graphql'),
	  cors			= require('cors'),
	  mongoose		= require('mongoose'),
	  schema		= require('./schema/schema');

const PORT = 3002;
const app  = express();

//allow cross-origin requests
app.use(cors())

//Connect to Mlab Database
//Replace dv string & creds with your own (dbuser & dbpassword)
mongoose.connect('mongodb://wayscode:mbahgoogle21@ds261644.mlab.com:61644/gql-free-db')
mongoose.connection.once('open', ()=>{
	console.log('connected to mlab');
})


app.use('/graphql', graphqlHTTP({
	schema: schema,
	graphql: true
}))

app.listen(PORT, ()=>{
	console.log('Graphql Server on PORT '+PORT)
})
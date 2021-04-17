
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const morgan = require('morgan')

//const db = require('./db')
const programRouter = require('./routes/program-router')
const userRouter = require('./routes/user-router')

const app = express()
const apiPort = 3001

const uri = "mongodb+srv://matina_mm:mongo@ukg.hiwor.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

//connect to DB
mongoose.connect(uri || 'mongodb://localhost/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
	console.log("MongoDB database connection established successfully");
})

//saving to db
// app.use(express.json());
// app.use(express.urlencoded({extended: true}))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())


app.use('/', userRouter); 



app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
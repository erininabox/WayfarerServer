// imports
const express = require('express');
const citiesController = require('./controllers/citiesController');
const cors = require('cors')
const port = process.env.PORT || 4000;
const app = express();


// middleware
// cors allows the express server to take reqs from react
app.use(cors())
// use json to parse the form data
app.use(express.json())

// api routes
app.use('/api/cities', citiesController)

//listen
app.listen(port,() =>{
    console.log(`Server is running on port ${port}`)
})
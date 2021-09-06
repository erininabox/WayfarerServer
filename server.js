// imports
const express = require('express');
const citiesController = require('./controllers/citiesController');
const articlesController = require('./controllers/articlesController')
const cors = require('cors')
const port = process.env.PORT || 4000;
const app = express();
const rowdy = require('rowdy-logger')
const rowdyResults = rowdy.begin(app)


// middleware
// cors allows the express server to take reqs from react
app.use(cors())
// use json to parse the form data
app.use(express.json())

// api routes
app.use('/api/cities', citiesController)
app.use('/api/cities/', articlesController)
// do we need to add /:cityId/articles here?????

//listen
app.listen(port,() =>{
    console.log(`Server is running on port ${port}`)
    rowdyResults.print()
})
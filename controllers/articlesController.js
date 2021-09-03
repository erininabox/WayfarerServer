// Route for getting all of a cities articles
//      GET to /cities/:cityId/articles
// Article Show Route
    //  GET to /cities/:cityId/articles/:articleId

const router = require('express').Router();
const db = require('../models')


// index articles route
router.get('/:cityId/articles', (req,res)=>{
    res.send('this the articles index route')
})

// show articles route
router.get('/:cityId/articles/:articleId', (req,res) =>{
    res.send('thisis the article show route')

})

// create articles route


router.post('/:cityId/articles', (req,res)=>{
    res.send('this the create route')
})


// update articles route

router.put('/:cityId/articles/:articleId', (req,res)=>{
    res.send('this is the article update')
})



// destroy articles route
router.delete('/:cityId/articles/:articleId',(req,res)=>{
    res.send('this is the delete route')
})

module.exports = router
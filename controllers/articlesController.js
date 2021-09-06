// Route for getting all of a cities articles
//      GET to /cities/:cityId/articles
// Article Show Route
    //  GET to /cities/:cityId/articles/:articleId

const router = require('express').Router();
const db = require('../models')


// index articles route
router.get('/:cityId/articles', (req,res)=>{
    db.City.find({}, (err, foundCity)=>{
        console.log('hello from index articles route the found article render')
         if (err) return console.log(err)
        // let foundArticles = 
        console.log(foundCity)
        res.json(foundCity)
        
    })
   
})



// show article route
router.get('/:cityId/articles/:articleId', (req,res) =>{
    res.send('this is the article show route')

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
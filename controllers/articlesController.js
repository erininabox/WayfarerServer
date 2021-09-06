// Route for getting all of a cities articles
//      GET to /cities/:cityId/articles
// Article Show Route
    //  GET to /cities/:cityId/articles/:articleId

const router = require('express').Router();
const db = require('../models')


// index articles route

// do we need this to render as a page? probably not, the articles should be indexed on the city show page anyway
// either way, would need to know how to return the JSON object with only the articles per city

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

// idea1: create an Article model and integrate it into the City Model
// idea2: somehow append an _id to each article, nfc how to do that though
// idea 3: can we just dig down through the JSON and render the articles ina react component? do we even need a route??



router.get('/:cityId/articles/:articleId', (req,res) =>{
    db.City.findById(req.params.id, (err, foundArticle) => {
        console.log('hello from one article' + foundArticle)
        if (err) return console.log(err)
        res.json(foundArticle)
    })

})


// router.get('/:id', (req, res) => {
//     db.City.findById(req.params.id, (err, foundCity) => {
//         console.log('hello from one city')
//       if (err) return console.log(err);
      
//       res.json(foundCity);
//     });
//   });



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
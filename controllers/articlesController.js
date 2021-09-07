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
    db.City.findById(req.params.cityId, (err, foundCity)=>{
        console.log('hello from index articles route the found article render')
         if (err) return console.log(err)
        // let foundArticles = 
        console.log(foundCity.articles)
        res.json(foundCity)
        
    })
   
})

// router.get('/:id', (req, res) => {
//     db.City.findById(req.params.id, (err, foundCity) => {
//         console.log('hello from one city')
//       if (err) return console.log(err);
      
//       res.json(foundCity);
      
//     });
//   });



// show article route

router.get('/:cityId/:articleId', (req,res) =>{
    console.log('route hit')
    console.log(req.params.articleId)
    //look thought City object to get the id, then find articles in that
    db.City.findById(req.params.cityId, (err, foundCity) => {
        console.log('found' + foundCity.articles)
        //return those found articles ina  new array, this is not essential but cleans up the code a little
        const articlesArray = [...foundCity.articles]
        console.log('city array log' , articlesArray)
        console.log(req.params.articleId)
        //this searches the articles array for the article with the same id as in the url and stores it as a variable
        
        const foundArticle = articlesArray.find((article)=>{
        // note the == here, the article._id is a string but req.params.articleId is acutally a differnt datatype called an object ID, strict equality will match datatypes and fail, so use the double equals
        return article._id == req.params.articleId
         
        })
        console.log(foundArticle)
        if (err) return console.log(err)
        //now we render out that found article on the page, 
        res.json(foundArticle)
        
    })

})

router.post('/:cityId/create', (req,res)=>{
    db.Article.create(req.body,(err, savedArticle)=>{
        console.log('created article')
        if (err) return console.log(err)
        res.json(savedArticle)
    })
})







// update articles route

router.put('/:cityId/:articleId', (req,res)=>{
    db.Article.findByIdAndUpdate(
        req.params.id, // finds the City with id passed in from URL
        req.body, // passes in data to update a City from the req.body
        {new: true}, // We want to updated City returned in the callback
        (err, updatedArticle) => { // function called after update completes
          if (err) return console.log(err);
          
          res.json(updatedArticle);
        });
})

router.put('/:id', (req, res) => {
    
  });




// destroy articles route
router.delete('/:cityId/articles/:articleId',(req,res)=>{
    db.Article.findByIdAndDelete(req.params.id, (err, deletedArticle) => {
        if (err) return console.log(err);
    
        res.json({ messaage:'Successful deletion' });
      });
})


// router.delete('/:id', (req, res) => {
//     db.City.findByIdAndDelete(req.params.id, (err, deletedCity) => {
//       if (err) return console.log(err);
  
//       res.json({ messaage:'Successful deletion' });
//     });
//   });

module.exports = router
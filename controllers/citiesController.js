const router = require('express').Router();
const db = require('../models');

// BASE ROUTE - /api/cities

// actual route - GET /api/cities
//return data for all cities

router.get('/', (req, res) => {
  db.City.find({}, (err, foundCities) => {
    console.log('hello from get')

    console.log(foundCities)

    if (err) return console.log(err);

    
    res.json(foundCities);
  });
});


// actual route - GET /api/cities/:id
router.get('/:id', (req, res) => {
  db.City.findById(req.params.id, (err, foundCity) => {
      console.log('hello from one city')
    if (err) return console.log(err);
    
    res.json(foundCity);
  });
});


// actual route - POST /api/cities
router.post('/', (req, res) => {
  db.City.create(req.body, (err, savedCity) => {
      console.log('hello from post')
    if (err) return console.log(err);
    
    res.json(savedCity);
  });
});


// actual route - PUT /api/cities/:id
router.put('/:id', (req, res) => {
  db.City.findByIdAndUpdate(
    req.params.id, // finds the City with id passed in from URL
    req.body, // passes in data to update a City from the req.body
    {new: true}, // We want to updated City returned in the callback
    (err, updatedCity) => { // function called after update completes
      if (err) return console.log(err);
      
      res.json(updatedCity);
    });
});


// actual route - DELETE /api/cities/:id
router.delete('/:id', (req, res) => {
  db.City.findByIdAndDelete(req.params.id, (err, deletedCity) => {
    if (err) return console.log(err);

    res.json({ messaage:'Successful deletion' });
  });
});


module.exports = router;

const db = require('./models')
const data = require('./cityData.json')

// Delete

db.City.deleteMany({}, (err, result) => {
    if (err) {
      console.log(err);
      process.exit();
    }
    console.log(result.deletedCount, 'city deleted')
    db.City.create(data.cities,(err,seededCities) =>{
        if (err) {
            console.log(err)
            process.exit()
        }
    
        console.log(seededCities.length, 'city created')
        console.log('done')
    
        process.exit()
    })
})


// Create




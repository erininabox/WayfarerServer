const db = require('./models')
const data = require('./cityData.json')

// Delete

db.City.deleteMany({}, (err, result) => {
    // establishing mongo for articles that are part of each City
    db.Article.deleteMany({},(err,result)=>{
        if (err){
            console.log(err)
            process.exit()
        }
        if (err) {
          console.log(err);
          process.exit();
        }
        console.log(result.deletedCount, 'city deleted')
        let articles = []
        for (let i=0;i<data.cities.length;i++){
            console.log(data.cities[i])
            articles.push(data.cities[i].articles || [])
            delete data.cities[i].articles
        }
        console.log('data. cities console log' , data.cities)
        console.log('articles console log' , articles)
        // establishing mongo for articles that are part of each City
        db.City.create(data.cities,(err,seededCities) =>{
            if (err) {
                console.log(err)
                process.exit()
            }
            db.Article.create(articles[0], (err,result)=>{
                if(err){
                    console.log(err)
                    process.exit()
                }
                console.log("RESULLLT" , result)
                seededCities[0].articles.push(result)
                db.City.findByIdAndUpdate(seededCities[0]._id,{ $push: {articles:result} },(err)=>{
                    if (err) return console.log(err)
                    process.exit()
                })
            })
        
        })

    })
})

// db.Article.deleteMany({}, (err, result) => {
//     if (err) {
//       console.log(err);
//       process.exit();
//     }
//     console.log(result.deletedCount, 'article deleted')
//     db.Article.create(data.cities,(err,seededCities) =>{
//         if (err) {
//             console.log(err)
//             process.exit()
//         }
    
//         console.log(seededCities.length, 'article created')
//         console.log('done')
    
//         process.exit()
//     })
// })


// Create




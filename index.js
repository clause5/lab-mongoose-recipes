const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
.connect(MONGODB_URI, {
  useCreateIndex: true,
  useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(self => {
    console.log(`Connected to the database: "${self.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    //return Recipe.deleteMany()
  })
  .then(() => {
    // Run your code here, after you have insured that the connection was made
    // const newRecipe = new Recipe(
    
      
    //   {
    //     "title": "Horchata water",
    //     "level": "Amateur Chef",
    //     "ingredients": [
    //       "2 liters purified water",
    //       "2 sticks cinnamon",
    //       "1 can condensated milk",
    //       "1 tablespoon vanilla escence",
    //       "1 cup white rice",
    //       "1 can evaporated milk",
    //     ],
    //     "cuisine": "Mexican",
    //     "dishType": "other",
    //     "image": "https://www.cookingclassy.com/wp-content/uploads/2019/04/horchata-6-768x1152.jpg",
    //     "duration": 10,
    //     "creator": "Chef Clau"
    //   }
    // );
    // newRecipe
    // .save()
    // .then(newRecipeAdded => console.log(`New recipe added: ${newRecipeAdded}`))
    // .catch(err => console.log(`Error while creating a new recipe ${err}`))
    // Recipe.insertMany(data)
    // .then(recipes => console.log(recipes))
    // .catch(err=>console.log(err))
    // Recipe.findOneAndUpdate({title: "Rigatoni alla Genovese"}, {duration: 110}, {new: true})
    //  .then(updated => console.log(updated))
    //  .catch(err => console.log(err))

    // Recipe.deleteOne({title: "Carrot Cake"})
    // .then(updated => console.log(updated))
    // .catch(err => console.log(err))

    mongoose.connection.close();
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });

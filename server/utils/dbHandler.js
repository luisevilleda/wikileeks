var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/27017');

var Recipe = mongoose.model('Recipe', {
  title: {type: String, required: true},
  ingr: String,
  nutrients: String
});

module.exports = {

  initializeEntry: function(data) {
    // console.log(data);
    var entry = new Recipe({
      title: data.title,
      ingr: data.ingr,
      nutrients: ''
    });
    return entry;
  },

  addNutrients: function(entry, data) {
    entry.nutrients = JSON.stringify(data);
    entry.save(function(err, succ) {
      console.log(err, succ);
    });
  },

  getAllRecipes: function(cb) {
    Recipe.find({}, function(err, data) {
      cb(data);        
    });
  }


};

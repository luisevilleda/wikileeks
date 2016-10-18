var request = require('request');
var fs = require('fs');
var optional = require('optional');
try {
  var keys = require('./config.js');
} catch(err) {
  keys = {};
}

module.exports = {

  analyzeRecipe: function(recipe, cb) {
    request({
      method: 'POST',
      url: `https://api.edamam.com/api/nutrition-details?app_id=${keys.app_id || process.ENV['S3_ID']}&app_key=${keys.app_key || process.ENV['S3_KEY']}`,
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(recipe)

    }, function(err, res, body) {
      if (err) {
        cb(err);
      } else {
        fs.writeFileSync('TESTbody.html', body);
        fs.writeFileSync('TESTres.html', JSON.stringify(res));
        cb(body);
      }
    });
  }

};
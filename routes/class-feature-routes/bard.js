var express = require('express'),
    router = express.Router();

var ClassFeature = require('../../models/classfeature');

// -------------------------------------
router.route('/')
.get((req,res) => {
  ClassFeature.find({ class: "Bard" } , (err,features) => {
    if (err) {
      res.send(err);
    }
  }).sort( {level : 'asc'} ).exec( (err, features) => {
    if (err) {
      res.send(err);
    }
    res.status(200).json(features);
  })

})

module.exports = router;
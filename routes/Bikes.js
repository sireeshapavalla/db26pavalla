var express = require('express'); 
const Bikes_controlers= require('../controllers/Bikes'); 
var router = express.Router(); 
 
/* GET costumes */ 
router.get('/', Bikes_controlers.Bikes_view_all_Page ); 
module.exports = router;

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('Bikes', { title: 'Search Results Bikes' });
});

module.exports = router;
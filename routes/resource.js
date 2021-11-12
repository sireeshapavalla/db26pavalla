var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var Bikes_controller = require('../controllers/Bikes'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// Bikes ROUTES /// 
 
// POST request for creating a Bikes.  
router.post('/Bikes', Bikes_controller.Bikes_create_post); 
 
// DELETE request to delete Bikes. 
router.delete('/Bikes/:id', Bikes_controller.Bikes_delete); 
 
// PUT request to update Bikes. 
router.put('/Bikes/:id', 
Bikes_controller.Bikes_update_put); 
 
// GET request for one Bikes. 
router.get('/Bikes/:id', Bikes_controller.Bikes_detail); 
 
// GET request for list of all Bikes items. 
router.get('/Bikes', Bikes_controller.Bikes_list); 
 
module.exports = router;
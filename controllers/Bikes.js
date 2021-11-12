var Bikes = require('../models/Bikes'); 
 
// List of all Bikes 
// List of all Bikes 
exports.Bikes_list = async function(req, res) { 
    try{ 
        theBikes = await Bikes.find(); 
        res.send(theBikes); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
// VIEWS 
// Handle a show all view 
exports.Bikes_view_all_Page = async function(req, res) { 
    try{ 
        theBikes = await Bikes.find(); 
        res.render('Bikes', { title: 'Bikes Search Results', results: theBikes }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// for a specific Costume. 
exports.Bikes_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Bikes detail: ' + req.params.id); 
}; 
 
// Handle Costume create on POST. 
// Handle Costume create on POST. 
exports.Bikes_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Bikes(); 
    
    document.bName= req.body.bName; 
    document.bWeight = req.body.bWeight; 
    document.bCost = req.body.bCost; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};
exports.Bikes_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Bikes delete DELETE ' + req.params.id); 
};
 
// Handle Costume delete form on DELETE. 
 
 
// Handle Costume update form on PUT. 
exports.Bikes_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Bikes update PUT' + req.params.id); 
};
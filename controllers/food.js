var food = require('../models/food');
// List of all foods
exports.food_list = async function (req, res) {
    try{
        thefoods = await food.find();
        res.send(thefoods);
        }
        catch(err){
        res.error(500,`{"error": ${err}}`);
        }
    //res.send('NOT IMPLEMENTED: food list');
};
// for a specific food.
exports.food_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: food detail: ' + req.params.id);
};
// Handle food create on POST.
exports.food_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: food create POST');
};
// Handle food delete form on DELETE.
exports.food_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: food delete DELETE ' + req.params.id);
};
// Handle food update form on PUT.
exports.food_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: food update PUT' + req.params.id);
};
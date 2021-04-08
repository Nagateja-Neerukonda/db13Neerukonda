var food = require('../models/food');
// List of all foods
exports.food_list = async function (req, res) {
    try {
        thefoods = await food.find();
        res.send(thefoods);
    }
    catch (err) {
        res.error(500, `{"error": ${err}}`);
    }
    //res.send('NOT IMPLEMENTED: food list');
};
// for a specific food.
exports.food_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: food detail: ' + req.params.id);
};
// Handle food create on POST.
// Handle Costume create on POST.
exports.food_create_post = async function(req, res) {
    console.log(req.body)
    let document = new food();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costumetype":"goat", "cost":12, "size":"large"}
    document.foodtype = req.body.foodtype;
    document.size = req.body.size;
    document.cost = req.body.cost;
    try {
        let result = await document.save();
        res.send(result);
    } catch (err) {
        res.error(500, `{"error": ${err}}`);
    }
};
// exports.food_create_post = function (req, res) {
//     res.send('NOT IMPLEMENTED: food create POST');
// };
// Handle food delete form on DELETE.
exports.food_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: food delete DELETE ' + req.params.id);
};
// Handle food update form on PUT.
exports.food_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: food update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.food_view_all_Page = async function (req, res) {
    try {
        thefoods = await food.find();
        res.render('food', { title: 'food Search Results', results: thefoods });
    }
    catch (err) {
        res.error(500, `{"error": ${err}}`);
    }
};
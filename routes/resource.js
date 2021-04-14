var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var food_controller = require('../controllers/food');
/// API ROUTE ///
// GET resources base.
router.get('/resource', api_controller.api);
/// food ROUTES ///
// POST request for creating a food.
router.post('/resource/foods', food_controller.food_create_post);
// DELETE request to delete food.
router.delete('/resource/foods/:id', food_controller.food_delete);
// PUT request to update food.
router.put('/resource/foods/:id', food_controller.food_update_put);
// GET request for one food.
router.get('/resource/foods/:id', food_controller.food_detail);
// GET request for list of all food items.
router.get('/resource/foods', food_controller.food_list);


module.exports = router;
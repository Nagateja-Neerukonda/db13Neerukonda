const mongoose = require("mongoose")
const foodSchema = mongoose.Schema({
    foodtype: String,
    size: String,
    cost: Number
})
module.exports = mongoose.model("food", foodSchema)
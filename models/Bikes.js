const mongoose = require("mongoose")
const BikesPriceSchema = mongoose.Schema({
    bName: String,
    bWeight: String,
    bCost: Number
})
module.exports = mongoose.model("Bikes",
    BikesPriceSchema)
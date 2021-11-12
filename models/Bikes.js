const mongoose = require("mongoose")
const BikesSchema = mongoose.Schema({
    bName: String,
    bWeight: Number,
    bCost: Number
})
module.exports = mongoose.model("Bikes", BikesSchema)
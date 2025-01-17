const mongoose = require("mongoose")

const reviewSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        // required: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    review: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now(),
    }
})

const Review = mongoose.model("reviews", reviewSchema)
module.exports = Review;   
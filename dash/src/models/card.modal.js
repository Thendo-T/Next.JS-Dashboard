const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    text: {
        type: String,
    },
    imageUri: {
        type: String
    }
});

const cardModel = mongoose.models.cards || mongoose.model("cards", schema);
module.exports = cardModel;
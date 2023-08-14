const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    _id : mongoose.Types.ObjectId,
    title: String,
    account_name: String,
    img_url: String,

});

module.exports = mongoose.model('Video', videoSchema);

const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
  video_id : mongoose.Types.ObjectId,
  username : String,
  comment : String,
  created_at : Date
}) 

module.exports = mongoose.model("Comment", CommentSchema)
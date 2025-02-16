const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const commentsSchema = new Schema({});

module.exports = mongoose.model("Comments", messageSchema);
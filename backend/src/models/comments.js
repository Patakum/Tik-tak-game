const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const commentsSchema = new Schema({
    nikname: {
        type: ObjectId,
        required: true,
        ref: "Users"
    },
    likes: {
        type: number
    },
    text: {
        type: String
    }
});

module.exports = mongoose.model("Comments", messageSchema);
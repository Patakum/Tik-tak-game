const mongooose = require("mongoose");
const Schema = mongooose.Schema;
const ObjectId = Schema.Types.ObjectId;

const postSchema = new Schema({
    picture: {
        type: String
    },
    description: {
        type: String
    },
    user: {
        type: ObjectId,
        ref: "Users"
    },
    likes: {
        type: [ObjectId],
        ref: "Users"
    },
    comments: {
        type: [ObjectId],
        ref: "Comments"
    },
    views: {
        type: Number
    }
});

module.exports = mongooose.model("Posts", postSchema);
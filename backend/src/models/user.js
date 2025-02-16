const mongooose = require("mongoose");
const Schema = mongooose.Schema;
const ObjectId = Schema.Types.ObjectId;

const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    nickname: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    isOnline: { type: Boolean, required: true },
    profilePicture: {
        type: ObjectId,
        required: true,
        ref: "Posts",
    }
})

module.exports = mongooose.model("Users", userSchema);
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: {type: String, required: true},
    email: {type: String, required: true},
    passwordhash: {type: String, required: true}
})

const user = mongoose.model("User", UserSchema);

export default user;
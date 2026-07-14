import mongoose from "mongoose";

const UrlSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    userId: {type: mongoose.Schema.Types.ObjectId, ref:"User", required: true},
    url: {type: String, required: true},
    shortenedUrl: {type: String, required: true},
    createdAt: {type: Date, default: Date.now},
    updatedAt: Date
}, {versionKey: false});

const url = mongoose.model("URLs", UrlSchema);

export default url;
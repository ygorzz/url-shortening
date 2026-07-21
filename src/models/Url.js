import mongoose from "mongoose";

const UrlSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    originalUrl: {type: String, required: true},
    shortUrl: {type: String, required: true, unique: true},
    accessCount: {type: Number, default: 0},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now()}
}, {versionKey: false});

const url = mongoose.model("URLs", UrlSchema);

export default url;
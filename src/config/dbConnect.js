import mongoose from "mongoose";

export default function dbConnection(){
    mongoose.connect(process.env.DB_CONNECTION_STRING)
    return mongoose.connection;
}
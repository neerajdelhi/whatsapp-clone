import mongoose from "mongoose";
import dotenv from  "dotenv";

dotenv.config();
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const Connection  = async () => {
const URL = `mongodb+srv://${username}:${password}@cluster0.cterocv.mongodb.net/clone-whatsapp`;
 try {
    await mongoose.connect(URL);
    console.log("Connected to MongoDB");
 } catch (error) {
    console.log('error while connecting database ',error.message);
 }
}

export default Connection;
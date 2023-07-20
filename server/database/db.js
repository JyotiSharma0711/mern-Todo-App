import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

export const Connection =() =>{
    
    const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.bamtjal.mongodb.net/?retryWrites=true&w=majority`;

    mongoose.connect(MONGODB_URI, {useNewUrlParser : true});
    mongoose.connection.on('connected', ()=>{
        console.log('Database connected');
    })

    mongoose.connection.on('disconnected',() =>{
         console.log('db disconnected');
    })

    mongoose.connection.on('error', () => {
        console.log('error in connecting with db');
    })
}
export default Connection;
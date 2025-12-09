import mongoose from 'mongoose';
import {DB_URI,NODE_ENV} from '../config/env.js';

if(!DB_URI){
    throw new Error('please declare the mongo db variable inside the .env.local');
}

const connecttodatabase = async()=>{
    try{
        await mongoose.connect(DB_URI);
        console.log(`connected to the database :${NODE_ENV}`);
    }catch(error){
        console.error('error connecting to the database',error);
        process.exit(1);
    }
}
export default connecttodatabase;
import { MongoClient, ServerApiVersion } from "mongodb";
import mongoose from "mongoose";

type ConnectionObj = {
    isConnected?: number;
}

const connection: ConnectionObj = {}

if (!process.env.MONGODB_URI) {
    throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
  }
   
const uri = process.env.MONGODB_URI

export const connectDB = async ():Promise<void> => {
    if(connection.isConnected ) {
        console.log("Database already connected");
        return
    }
    try {
        const conn = await mongoose.connect(uri);
        connection.isConnected = conn.connections[0].readyState
        console.log("Database connected successfully");
    }
    catch (error) {
        console.log("Connection failed - ",error)
        process.exit()
    }
}

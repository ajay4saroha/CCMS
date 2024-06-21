import mongoose from "mongoose";

const ConnectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Connected to database");
    } catch (error) {
        console.error("Error in connecting to Database",error.message);
    }
}

export default ConnectToDB;
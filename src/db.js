import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost/merndb')
        console.log('>>>> DB connected')
    } catch (error) {
        console.log(error)
    }
}

export default connectDB
import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://crisdev88:crisdev66185874@cluster0.dhsqkzd.mongodb.net/?retryWrites=true&w=majority')
        console.log('>>>> DB connected')
    } catch (error) {
        console.log(error)
    }
}

export default connectDB
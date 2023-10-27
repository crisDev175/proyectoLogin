import { string } from "mathjs";
import mongoose from "mongoose";


const userSchema = mongoose.Schema({
    username: { string,
    require: true,
    trim: true
 },
    email: { string,
    require: true,
    trim: true,
    unique: true
 },
    password: { string,
    require: true
 },
})

export default mongoose.model('User', userSchema)
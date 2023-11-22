import User from '../models/user.model.js'
import bcrypt from "bcryptjs"


export const register = async (req, res) => {
    const { username, email, password } = req.body;
    try {

        const passwordHash = await bcrypt.hash(password, 10) // genera el hash
        const newUser = new User({
            username,
            email,
            password: passwordHash,
        });

        const userSave = await newUser.save()
        res.json({
            id: userSave._id,
            username: userSave.username,
            email: userSave.email,
            createdAt: userSave.createdAt,
            updateAt: userSave.updatedAt
        })
    } catch (error) {
        console.log(error)
    }
}


export const login = (req, res) => res.send('login')


import { errorhandle } from "../Utils/error.js";
import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from 'jsonwebtoken';
export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10)
    const newUser = new User({ username, email, password: hashedPassword});
    try {
        await newUser.save();
        res.status(201).json("User create Successfully");
    } catch (error) {
        // res.status(500).json(error.message);
        // next(errorhandle(550, "error from function"));
        next(error);
    }
    
};
export const signin = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const validUser = await User.findOne({ email});
        if(!validUser) return next(errorhandle(404, 'User not found!'));
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if(!validPassword) return next(errorhandle(401, 'Wrong Credentials!'));
        const token = jwt.sign({id: validUser._id }, process.env.JWT_SECRET );
        const { password: pass, ...rest } = validUser._doc;
        res.cookie('access_token', token, { httpOnly: true}).status(200)
        .json(rest);

    } catch (error) {
        next(error);
    }
}
export const google = async (req, res, next) => {
    try {
        const user = await User.findOne({email: req.body.email})
        if(user){
            const token = jwt.sign
        }
    } catch (error) {
        next(error);
    }
}
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { userAgent } from "next/server.js";
import User from "../models/User.js";

/* REGISTER USER */
export const register = async (req, res) => {
    try {
        const {
            username,
            displayName,
            email,
            password,
            pfpPath,
            bannerPath,
            bio,
            tags,
            liked,
            units,
            pins,
            comments,
            posts,
            followers,
            occupation,
            birthDate,
            joinDate
        } = req.body;

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = new userAgent({
            username,
            displayName,
            email,
            password: passwordHash,
            pfpPath,
            bannerPath,
            bio,
            tags,
            liked,
            units,
            pins,
            comments,
            posts,
            followers,
            occupation,
            birthDate,
            joinDate
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

/* LOGGING IN */
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email});
        if (!user) return res.status(400).json({ msg: "User does not exist."});
        
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: "Invalid credentials."});

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        delete user.password;
        res.status(200).json({ token, user});

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            require: true,
            min: 3,
            max: 30,
        },
        displayName: {
            type: String,
            require: true,
            min: 3,
            max: 30,
        },
        email: {
            type: String,
            require: true,
            min: 3,
            max: 30,
        },
        password: {
            type: String,
            require: true,
            min: 5,
            max: 30,
        },
        pfpPath: {
            type: String,
            default: []
        },
        bannerPath: {
            type: String,
            default: []
        },
        bio: String,
        tags: String,
        liked: {
            default: []
        },
        Units: {
            default: []
        },
        pins: {
            default: []
        },
        comments:{
            default: []
        },
        posts: Number,
        followers: Number,
        location: String,
        occupation: String,
        birthDate: Date,
        joinDate: Date
    },
    { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
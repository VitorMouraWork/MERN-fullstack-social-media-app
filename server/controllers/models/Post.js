import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            require: true,
        },
        username: {
            type: String,
            require: true,
        },
        displayName: {
            type: String,
            require: true,
        },
        tags: {
            type: String,
            require: true
        },
        userPfpPath: String,
        picturePath: String,
        description: {
            type: String,
            require: true,
            min: 1,
            max: 350,
        },
        likes: {
            type: Map,
            of: Boolean,
        },
        pins: {
            type: Map,
            of: Boolean,
        },
        comments: {
            type: Array,
            default: []
        }
    },
    { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);
export default Post;
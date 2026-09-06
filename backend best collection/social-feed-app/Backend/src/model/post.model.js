import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        image: {
            type: String,
            trim: true,
            
        },
        caption: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true,
    },
);

const Post = mongoose.model("Post", postSchema);

export default Post;

import { Schema, models, model } from "mongoose"

const PostSchema = new Schema ({
    name: String,
    prompt: String,
    photo: String,
    shirtColour: String,
})

const Post = models?.posts || model("posts", PostSchema)

export default Post
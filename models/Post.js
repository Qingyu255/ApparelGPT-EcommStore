import { Schema, models, model } from "mongoose"

const PostSchema = new Schema ({
    name: String,
    prompt: String,
    photo: String,
    product: String,
    colour: String,
})

const Post = models?.posts || model("posts", PostSchema)

export default Post
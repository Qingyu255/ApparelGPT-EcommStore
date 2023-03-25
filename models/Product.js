import { Schema, models, model } from "mongoose"

const ProductSchema = new Schema( {
    name: String,
    description: String,
    picture: String,
    price: Number,
})

const Product = models?.Product || model("Product", ProductSchema)

export default Product
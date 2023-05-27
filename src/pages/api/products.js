import { initMongoose } from "../../../lib/mongoose";
import Product from "../../../models/Product";

export async function findAllProducts() {
    return Product.find().exec()
}

export async function findOneProduct(id) {
    return Product.find({"_id": {$in: id}}).exec()
}

export default async function handle(req, res) {
    // await to wait for connection
    await initMongoose()
    // This is just destructuring
    const {ids} = req.query
    if (ids) {
        res.json( await Product.find({"_id": {$in: ids.split(",")}}).exec() )
    } else {
        res.json( await findAllProducts() )
    }
}
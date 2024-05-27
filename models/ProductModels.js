import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema (
    {
        nameHotel: {type: String, require: false},
        address: {type: String, require: false},
        email: {type: String, require: false},
        number: {type: String, require: false},
        price: {type: String, require: false},
        devise: {type: String, require: false},
        imgName: {type: String, require: false},
    },{
        timestamps: true,
    }
);

const ProductModel = mongoose.models.Product || mongoose.model("Product", topicSchema);

export default ProductModel;
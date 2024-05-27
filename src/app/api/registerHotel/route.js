import { NextResponse } from "next/server";
import {connectMongoDB} from "../../../../lib/mongodb";
import Product from "../../../../models/ProductModels";

export async function GET(){
    try{
        await connectMongoDB();
        const products = await Product.find();
        return NextResponse.json({ products });
    } catch {
        return NextResponse.json({ message: "An error occured while Product Created" });
    }

}

export async function POST(req){
    try{
        await connectMongoDB();
        const { nameHotel, email, address, price, number } = await req.json();
        await Product.create({ nameHotel, email, address, price, number });
        return NextResponse.json({ message: "Product Created" }, { status: 225 });
    }catch(error){
        return NextResponse.json({message: "An error occured while Product Created."}, {status: 222})
    }
}






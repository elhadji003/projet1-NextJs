import { connectMongoDB } from "../../../../lib/mongodb";
import User from "../../../../models/user";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await connectMongoDB();
        const { email } = await req.json();
        const user = await User.findOne({ email }).select("_id");
        console.log("user:", user);
        
        if (user) {
            return NextResponse.json({ user });
        } else {
            return NextResponse.json({ user: null }); // or handle differently if user doesn't exist
        }
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.error(new Error("Internal Server Error"));
    }
}

import NextAuth from "next-auth";
import { authOptions } from "../authOptions";

const handler = (req, res) => NextAuth(req, res, authOptions);

export const GET = handler;
export const POST = handler;

/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_HOSTNAME: "http://localhost:3000/api/",
        MONGODB_URI:"mongodb+srv://malickelhadji07:bF36oYeHFzWHGBkP@cluster0.im422wh.mongodb.net/Cluster0",
        NEXTAUTH_SECRET: "elhadjimalickdiop170503linguere",
        NEXTAUTH_URL: "http://localhost:3000",
        SECRET: "RONDOM_STRING",
    }
};


export default nextConfig;

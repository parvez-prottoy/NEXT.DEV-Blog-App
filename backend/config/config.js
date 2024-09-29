import dotenv from "dotenv";
dotenv.config("../.env");

const config = {
  port: process.env.PORT || 9090,
  mongoUrl:
    process.env.MONGO_URL || "mongodb://localhost:27017/NextDev-Blog-App",
};

export default config;

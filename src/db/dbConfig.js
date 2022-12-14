import mysql from 'promise-mysql';
import dotenv from 'dotenv';

const env = dotenv.config();
if (env.error) {
    throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

const dbConfig = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
};

export default mysql.createPool(dbConfig);
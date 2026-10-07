import { Pool } from "pg";

export const db = new Pool({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    port: Number(process.env.DB_PORT),
    password: process.env.DB_PASSWORD
})
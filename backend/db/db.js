import mysql from "mysql2";

export const db = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "PUC@1234",
    database: "task_manager"
});
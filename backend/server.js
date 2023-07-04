// import express from 'express'
// import mysql from 'mysql'
// import cors from 'cors'

// const app = express();
// app.use(express.json());

// app.use(cors());

// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password:"",
//     database:"crud"
// })

// app.post('/login',(req,res)=>{
//     const sql ="Select * from login where email =? AND password = ?";
//     db.query(sql,[req.body.email, req.body.password],(err,data)=>{
//         if(err) return res.json("Error",);
//         if(data.length > 0){
//             return res.json("login Success")
//         } else{
//             return res.json("login Failed")
//         }
// })
// })

// app.listen(3000,()=>{
//     console.log("Running");
// })




// NEW CODE:

import { Sequelize } from "sequelize";

import dotenv from "dotenv"
dotenv.config();

export const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.USER,
  "",
  {
    host: process.env.HOST,
    dialect: "mysql",
  }
);
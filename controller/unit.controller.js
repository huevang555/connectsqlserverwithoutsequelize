// const express = require('express');

// const { QueryTypes } = require('sequelize');
// const router = express.Router();
// const sequelize = require('../db');
const sql = require('mssql');
const config = require('../db1');

// const connectToDatabase = require('../config/db');
// const connection = require('../db');

exports.tbunit = async(req,res)=>{
  try 
  {
      console.log(`Req Lock3G ==> ${req?.body}`);

      const pool = await sql.connect(config);

      const result = await pool.request()
                          .input('unitname', sql.VarChar, req?.body?.unitname)
                          .execute('SP_INSERT_TB_UNIT');

      if(result)
      {
          console.log("unit ==> Success", result);
          return res.status(200).json({code: 2000, message: "Logging sussessfully!"});
      }

      console.log("unit ==> Failed", result);

      return res.status(200).json({code: 4000, message: "Logging failed!"});
  } 
  catch (error) 
  {
      console.log("unit ==> Error ", error);

      return res.status(500).json({code: 5000, message: error?.message});
    }
}

exports.deleteUnit = async (req, res) => {
    try {
      const { id } = req.body;
      const pool = await sql.connect(config);
      const response = await pool
        .request()
        .query(`DELETE FROM tbunit WHERE unitid = '${id}'`);
      return res.status(200).json(response.recordset);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "QUERY TYPE FAILED" });
    }
  };

  exports.UpdateUnit = async (req, res) => {
    try {
      const { id, unitname } = req.body;
  
      const pool = await sql.connect(config);
      const response = await pool
        .request()
        .input('unitname', sql.VarChar, unitname)
        .input('id', sql.Int, id)
        .query('UPDATE tbunit SET unitname = @unitname WHERE unitid = @id');
  
      return res.status(200).json(response.recordset);
    } catch (error) {
      console.error(error);
      return res.status(400).json({ message: "QUERY TYPE FAILED" });
    }
  };
  

exports.findOne = async(req,res)=>{
    try {
      const pool = await sql.connect(config);
      const response = await pool
        .request()
        .query('select * from tbunit');
  
      return res.status(200).json(response.recordset);
       
      } catch (error) {
        console.error('Error executing SQL query:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}



//this api worked
// exports.getUnit = async (req, res) => {
//     try {
//         const pool = await sql.connect(config);
//         const response = await pool
//             .request()
//             .query("SELECT * FROM tbunit");
//         return res.status(200).json( response.recordset );
//     } catch (error) {
//         console.log(error)
//         return res.status(500).json({ message: "QUERY TYPE FAILED" });
//     }
// };

// exports.getUnit = async (req, res) => {
//     try {
//         const request = await sql.connect(connection); // Use Tedious connection object
//         const response = await request.request().query("select * from tbunit");
//         return res.status(200).json(response.recordset);
//     } catch (error) {
//         console.log(error);
//         return res.status(400).json({ message: "QUERY TYPE FAILED" });
//     }
// };
// exports.findAll = async(req,res)=>{
//     try {
//         const connection = await connectToDatabase();
    
//         const request = new Request(`select * from tbunit

//         `, (err, rowCount, rows) => {
//           if (err) {
//             console.error('Error executing SQL query:', err);
//             res.status(500).json({ error: 'Internal Server Error' });
//           } else {
//             res.json(rows);
//           }
    
//           connection.close();
//         });
    
//         connection.execSql(request);
//       } catch (error) {
//         console.error('Error connecting to the database:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//      }
//  }
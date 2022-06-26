import mysql from "mysql2/promise";
import {config} from "../config";

const connection = mysql.createConnection(config.db);

// async function query(sql, params) {
//   const connection = await mysql.createConnection(config.db);
//   const [results,] = await connection.execute(sql, params);
//
//   return results;
// }

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  connection.query("CREATE DATABASE malikbudget", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});

// export {query};
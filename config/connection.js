const mysql=require("mysql");

var database={
    host:"localhost",
    port:3306,
    user:"root",
    password:"root",
    database:"burger_db"
}

const pool= mysql.createPool(database);
pool.getConnection((err,connection)=>{
    if (err) throw err;
    if(connection) connection.release();
    console.log("DB is connected");
})

module.exports=pool;
const mysql=require("mysql");
var pool;
var database={
    host:"localhost",
    port:3306,
    user:"root",
    password:"root",
    database:"burger_db"
}
if(process.env.JAWSDB_URL){
     pool= mysql.createPool(process.env.JAWSDB_URL);
    

}else{
    pool= mysql.createPool(database);
    

}
pool.getConnection((err,connection)=>{
    if (err) throw err;
    if(connection) connection.release();
    console.log("DB is connected");
})


module.exports=pool;
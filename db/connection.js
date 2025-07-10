const sql = require("mysql2")

const connection = sql.createConnection({
    host:"localhost",
    user: "root",
    password: "root",
    database:"blog",

})

connection.connect((err)=>{
    if(err)
        throw err;
    console.log("connection successfull")
})

module.exports = connection
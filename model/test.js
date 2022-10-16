var pg_conn = require("./pg_config");
async function test_query()
{
    
    var sql = `SELECT * FROM admin Where username = 'hieutc' AND password = 'hieutc'`;
    

    query_data =pg_conn.query(sql); 
        console.log(query_data);

    return query_data;
}

results = test_query();
console.log("results: " + results);
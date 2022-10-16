var pg_conn = require("./pg_config")
async function test_query()
{
    const acc_query =
    {
        text: 'SELECT * FORM users Where name = $1 AND password = $2',
        values: ["hieu","123456"]
    }
    query_data =pg_conn.query(acc_query);
    console.log(query_data)
    return query_data
}

results = test_query();
console.log("results: " + results)
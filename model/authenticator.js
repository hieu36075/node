var pg_conn = require("./pg_config")

async function authen(user,pass)
{
    var authenticated = false;
    const acc_query = 
    {
        text: 'SELECT * FORM admin Where name = $1 AND password = $2',
        values: [user,pass]
    };
    var query_data = await pg_conn.query(acc_query)
    if(query_data.rowCount == 1)
    {
        authenticated = true;
    }
    console.log(authenticated);
    return authenticated
}

module.exports = authen;
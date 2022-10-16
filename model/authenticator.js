var pg_conn = require("./pg_config")
async function authen(username,password)
{
    var authenticated = false;
    var sql = `SELECT * FROM admin Where username = '${username}' AND password = '${password}'`;

      var query_data = await pg_conn.query(sql);
    if(query_data.rowCount == 1)
    {
        authenticated = true;
    }

    return authenticated;
}

module.exports = authen;
const Pool = require('pg').Pool

const pg_conn = new Pool(
    {
        user: 'utvmdcafqradkl',
        host: 'ec2-44-209-24-62.compute-1.amazonaws.com',
        database: 'dfifpbr2l6a6j5',
        password: 'a57b486a174b6cfcf6d50a258da9d72fd33f4b51cd54a0d5a8f52211916887c0',
        port: 5432,
        sal:{
            rejectUnauthorized: false
        },
    });
    async function connect(){

    const acc_query = 
    {
        text: 'SELECT * FORM admin Where name = $1 AND password = $2',
        values: ['hieutc','hieutc']
    };
    var query_data = await pg_conn.query(acc_query);
console.log(query_data);
}
connect();
module.exports = pg_conn;


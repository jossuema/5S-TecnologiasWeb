const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'Root800#',
    database: 'hollywood',
    port: '5432'
});

module.exports = pool;
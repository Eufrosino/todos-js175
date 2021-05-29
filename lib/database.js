const { Client } = require('pg');

const client = new Client({
  host: "localhost",
  port: 5432,
  user: "earl",
  password: "password",
  database: "todo_app"
})

module.exports = client;
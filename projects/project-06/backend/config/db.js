const config = require("../knexfile.js");
const knex = require("knex");

knex(config);

module.exports = knex;

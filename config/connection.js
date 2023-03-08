const { connect, connection } = require('mongoose');

//TODO: add database
const connectionString =
  process.env.MONGODB_URI || '';

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
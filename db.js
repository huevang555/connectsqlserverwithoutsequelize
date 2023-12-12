const { Sequelize } = require("sequelize");
// // require('dotenv').config();

// Create a new Sequelize instance
const sequelize = new Sequelize(
  "mssql://ka:huevang@127.0.0.1/db1",
  {
    dialect: "mssql",
    dialectOptions: {
      options: {
        trustedconnection: true,
        enableArithAort: true,
        instancename: "SQLEXPRESS",
        encrypt: false,
      },
    },
    logging: false,
  }
);

// const sequelize = new Sequelize('db1', 'ka', 'huevang', {
// 	dialect: 'mssql',
//   host:'DESKTOP-M4G2AJL\\SQLEXPRESS',
// 	dialectOptions: {
//     encrypt: true
// 	}
//   })

// Test the connection to the database
sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to Sqlserver database!");
  })
  .catch((err) => {
    console.error("Error connecting to SqlServer database: ", err);
  });
sequelize.sync();

module.exports = sequelize;
// const sqlConfig = {
// 	user:'ka' ,
// 	password:'huevang',
// 	database: 'db1',
// 	port: 1433,
// 	server: 'DESKTOP-M4G2AJL\\SQLEXPRESS',
// 	encrypt: false,

//   };

//   module.exports = sqlConfig;

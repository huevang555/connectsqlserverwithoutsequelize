const sqlConfig = {
	user:'ka' ,
	password:'huevang',
	database: 'db1',
	server: '127.0.0.1',
	options:{
		trustedconnection:true,
		enableArithAort:true,
		instancename:'SQLEXPRESS',
		encrypt: false,
	},
	port : 1433,
  };
  
  
  module.exports = sqlConfig; 
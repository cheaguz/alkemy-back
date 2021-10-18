const mysql = require('mysql2/promise');

  const connection =  mysql.createPool({
      host : 'localhost',
      user : 'root',
      password : '',
      database : 'alkemy',
      connectionLimit : 10,
      queueLimit : 0
  }); 
 

 
 
module.exports.pool = connection


  /*
 CREATE TABLE `operaciones` ( `ID` int(50) NOT NULL,
  `CONCEPTO` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `MONTO` float NOT NULL, `ID_USUARIO` int(50) NOT NULL,
  `TIPO_OPERACION` varchar(10) COLLATE utf8_spanish_ci NOT NULL,
  `CATEGORIA_ID` int(50) NOT NULL ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
 */



  /*
 Estructura de tabla para la tabla `usuarios` 
 CREATE TABLE `usuarios` ( `ID` int(50) NOT NULL,
 `MAIL` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `PASSWORD` varchar(20) COLLATE utf8_spanish_ci NOT NULL )
   ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
  */




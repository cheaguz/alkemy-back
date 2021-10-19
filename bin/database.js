const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'alkemy',
    connectionLimit: 10,
    queueLimit: 0
});


module.exports.pool = connection




/*  
    CREATE TABLE usuarios(
      id	  int(255) auto_increment not null,
      nombre	  varchar(100) not null,
      apellido  varchar(100) not null,
      email	  varchar(100) not null,
      password  varchar(100) not null,
      fecha	  date not null,
  CONSTRAINT pk_usuarios PRIMARY KEY(id),
  CONSTRAINT uq_email UNIQUE(email)
  )ENGINE=InnoDB;


  CREATE TABLE categorias(
    id		  int(255) auto_increment not null,
    nombre  varchar(100) not null,
    CONSTRAINT pk_categorias PRIMARY KEY(id)
  );


CREATE TABLE entradas(
    id		int(255) auto_increment not null,
    usuario_id      varchar(100) not null,
    titulo         varchar(100) not null,
    descripcion    varchar(100) not null,
    fecha          date not null,
CONSTRAINT pk_entradas PRIMARY KEY(id),
CONSTRAINT fk_entrada_usuario FOREIGN KEY(usuario_id) REFERENCES usuarios(id),
CONSTRAINT fk_categoria FOREIGN KEY(categoria_id) REFERENCES categorias(id) ON DELETE SET NULL
);
  
  
  
  */
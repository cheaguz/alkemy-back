const db = require('../bin/database');

module.exports = {
    getAll : async function () {
      const [rows] = await db.pool.execute('select * from usuarios')
        console.log([rows])
        return [rows]
    },
    register : (data) => {
      db.pool.query('INSERT INTO usuarios SET mail=?,password=?',[
        data.mail,data.password]);
    },
    login : async (data) =>{
     const [rows] = await db.pool.execute(`SELECT * from USUARIOS WHERE MAIL='${data.mail}'`);
      return [rows]  
    },
 
}
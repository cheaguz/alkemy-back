const db = require('../bin/database');

module.exports = {

    register: async (data) => {
      const [row] = await db.pool.query('INSERT INTO usuarios SET mail=?,password=?', [
        data.mail, data.password
      ]);
      return [row]
     
    },
    login: async (data) => {
      const [rows] = await db.pool.execute(`SELECT * from USUARIOS WHERE MAIL='${data.mail}'`);
      return {
        mail: rows[0].MAIL,
        password: rows[0].PASSWORD
      }
    },

}
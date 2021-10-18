const db = require('../bin/database');

module.exports = {
    getAll : async function () {
      const [rows] = await db.pool.execute('select * from categorias')
        console.log([rows])
        return [rows]
    },
    create : async (data) => {
      await db.pool.query('INSERT INTO categorias SET nombre=?',data.nombre);
    },
    delete : async (data) => {
         await db.pool.query(`DELETE FROM categorias WHERE ID=${data.id}`)  
         
    },
    update : async (data) =>{
        await db.pool.query(`UPDATE categorias SET NOMBRE =${JSON.stringify(data.nombre)} WHERE ID =${data.id} `)
    },
} 









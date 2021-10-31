const db = require('../bin/database');
module.exports = {
    getAll : async function (id) {
      const [rows] = await db.pool.query(`SELECT * FROM operaciones WHERE ID_USUARIO=${id}`)
      console.log(rows)
        return [rows]
    }, 
    create : async (data,id) => {
      await db.pool.query('INSERT INTO OPERACIONES SET CONCEPTO=?,MONTO=?,ID_USUARIO=?,TIPO_OPERACION=?,CATEGORIA_ID=?',[
        data.CONCEPTO,
        data.MONTO,
        id,
        data.TIPO_OPERACION,
        data.CATEGORIA_ID,
    ]);
    },
    getIngreso : async (id) => {
        const [rows] = await db.pool.execute( `select * from OPERACIONES where TIPO_OPERACION="INGRESO" && ID_USUARIO=${id}`)
        return [rows]
    },
    getEgresos : async (id) => {
      const [rows] = await db.pool.execute(`select * from OPERACIONES where TIPO_OPERACION="EGRESO" && ID_USUARIO=${id}`)
      return [rows]
  },
     delete : async (id,userId) => {
      const query = await db.pool.query(`DELETE FROM OPERACIONES WHERE ID=${id} && ID_USUARIO=${userId}`) 
        return query 
},
    getByCategory : async(id,name) => {
      const [rows] = await db.pool.execute(`select * from OPERACIONES where CATEGORIA_ID=${name} && ID_USUARIO=${id}`)
        return [rows]
    },
    update : async (id , data , ID_USUARIO) =>{
      const {CONCEPTO , MONTO , CATEGORIA_ID} = data;
      const update = await db.pool.execute(`UPDATE OPERACIONES SET CONCEPTO='${CONCEPTO}', MONTO = ${MONTO}, CATEGORIA_ID = ${CATEGORIA_ID} WHERE OPERACIONES.ID = ${id} && OPERACIONES.ID_USUARIO=${ID_USUARIO}`)
      return update
    }
}




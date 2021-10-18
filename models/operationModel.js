const db = require('../bin/database');

module.exports = {
    getAll : async function () {
      const [rows] = await db.pool.execute('select * from OPERACIONES')
        return [rows]
    }, 
    create : async (data) => {
      await db.pool.query('INSERT INTO OPERACIONES SET CONCEPTO=?,MONTO=?,ID_USUARIO=?,TIPO_OPERACION=?,CATEGORIA_ID=?',[
        data.CONCEPTO,
        data.MONTO,
        data.ID_USUARIO,
        data.TIPO_OPERACION,
        data.CATEGORIA_ID,
    ]);
    },
    getIngreso : async () => {
        const [rows] = await db.pool.execute('select * from OPERACIONES where TIPO_OPERACION="INGRESO"')
        return [rows]
    },
    getEgresos : async () => {
      const [rows] = await db.pool.execute('select * from OPERACIONES where TIPO_OPERACION="EGRESO"')
      return [rows]
  },
}




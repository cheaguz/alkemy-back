const db = require('../bin/database');

module.exports = {
    getAll : async function () {
      const [rows] = await db.pool.execute('select * from usuarios')
        console.log([rows])
        return [rows]
    }
}
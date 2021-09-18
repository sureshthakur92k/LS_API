const sql = require('mssql/msnodesqlv8')


const config = {
  // database: 'Aryan',
  database: 'LoharSadiDB',
  server: 'DESKTOP-CH7T8OI',
  //driver: 'msnodesqlv8',
  options: {
    trustedConnection: true
  }
} 
const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Connected to SQL Server')
    return pool
  })
  .catch(err => console.log('Database Connection Failed! Bad Config: ', err))

module.exports = {
  sql, poolPromise
}
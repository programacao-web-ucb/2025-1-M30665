
import mysql from"mysql2/promise"
let connection = await mysql.createConnection({
  host     : 'localhost',
  port      :3307,
  user     : 'root',
  password : 'catolica',
  database : 'musicasdb'
});
export default connection;
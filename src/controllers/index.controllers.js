import { pool } from '../db.js'

export const indexController = async (req, res) => {
  const [result] = await pool.query('SELECT 1+1 as RESULT')
  res.send(result[0])
}

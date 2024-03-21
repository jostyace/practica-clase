import express from 'express'
import employeesRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'
import { swaggerDocs } from './swagger.js'
import { PORT } from './config.js'

const app = express()

app.use(express.json())
swaggerDocs(app, PORT)
// API empleados
app.use('/api', employeesRoutes)
// API inicial
app.use(indexRoutes)

app.use((req, res, next) => {
  res.status(404).json({ message: 'Not found' })
})

export default app

import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import path from 'path'

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Employees API Documentation',
      version: '1.0.0'
    }
  },
  apis: ['./src/routes/employees.routes.js', './src/routes/index.routes.js']
}

const swaggerSpec = swaggerJSDoc(options)

export const swaggerDocs = (app, port) => {
  const swaggerJsonPath = path.join(process.cwd(), '/src/swagger_output.json')
  console.log(swaggerJsonPath)
  app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

  app.get('/api/docs.json', (req, res) => {
    try {
      res.sendFile(swaggerJsonPath)
      console.log('sent')
    } catch (error) {
      console.error('Error al enviar el archivo JSON de Swagger:', error)
      res.status(500).json({ message: 'Internal Server Error' })
    }
  })
  console.log('Running')
}

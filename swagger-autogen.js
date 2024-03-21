import swaggerAutogen from 'swagger-autogen'
import path from 'path'

const outputFile = path.join(process.cwd(), '/src/swagger_output.json')
const endpointsFiles = ['./src/routes/employees.routes.js', './src/routes/index.routes.js']

const generateSwagger = async () => {
  console.log(outputFile)
  const autogen = swaggerAutogen()
  await autogen(outputFile, endpointsFiles)
  console.log('Swagger documentation generated successfully!')
}

generateSwagger()

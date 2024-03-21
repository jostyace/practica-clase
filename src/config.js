import { config } from 'dotenv'

config()

export const PORT = process.env.PORT || 3000
export const DB_HOST = process.env.DB_HOST || '89.117.17.246'
export const DB_USERNAME = process.env.DB_USERNAME || 'funval_usuario'
export const DB_PASSWORD = process.env.DB_PASSWORD || 'P@$$w0rd'
export const DB_DATABASE = process.env.DB_DATABASE || 'funval_empresa'
export const DB_PORT = process.env.DB_PORT || 3306

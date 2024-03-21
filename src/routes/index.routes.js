import { Router } from 'express'
import { indexController } from '../controllers/index.controllers.js'

const router = Router()

// Ruta para probar
/**
 * @openapi
 * /ping:
 *   get:
 *     summary: Endpoint de prueba para verificar la disponibilidad del servidor
 *     tags:
 *       - General
 *     responses:
 *       200:
 *         description: Respuesta exitosa. El servidor está disponible.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 RESULT:
 *                   type: number
 *                   example: 2
 *       500:
 *         description: Error interno del servidor
 */
router.get('/ping', indexController)

export default router

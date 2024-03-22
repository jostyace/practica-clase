import { Router } from 'express'
import { createEmployees, deleteEmployees, getEmployees, updateEmployees, getEmployee } from '../controllers/employees.controllers.js'

const router = Router()
// Obtener todos los empleados
/**
 * @openapi
 * /api/employees:
 *   get:
 *     summary: Obtiene todos los empleados
 *     tags:
 *       - Empleados
 *     responses:
 *       200:
 *         description: Respuesta exitosa
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: "Juan Pérez"
 *                   salary:
 *                     type: number
 *                     example: 30000
 *       500:
 *         description: Error interno del servidor
 */
router.get('/employees', getEmployees)
// Obtener los detalles del empleado por ID
/**
 * @openapi
 * /api/employees/{id}:
 *   get:
 *     summary: Obtiene un empleado por su ID
 *     tags:
 *       - Empleados
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID del empleado
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Respuesta exitosa
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: "Juan Pérez"
 *                 salary:
 *                   type: number
 *                   example: 30000
 *       404:
 *         description: Empleado no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.get('/employees/:id', getEmployee)
// Crear un nuevo empleado

/**
 * @openapi
 * /api/employees:
 *   post:
 *     summary: Crea un nuevo empleado
 *     tags:
 *       - Empleados
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Juan Pérez"
 *               salary:
 *                 type: number
 *                 example: 30000
 *     responses:
 *       200:
 *         description: Empleado creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: "Juan Pérez"
 *                 salary:
 *                   type: number
 *                   example: 30000
 *       500:
 *         description: Error interno del servidor
 */
router.post('/employees', createEmployees)
// Actualizar un empleado
/**
 * @openapi
 * /api/employees/{id}:
 *   patch:
 *     summary: Actualiza un empleado existente por su ID
 *     tags:
 *       - Empleados
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID del empleado a actualizar
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *       - in: body
 *         name: body
 *         description: Datos para actualizar el empleado
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *               example: "Juan Pérez"
 *             salary:
 *               type: number
 *               example: 32000
 *     responses:
 *       200:
 *         description: Empleado actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: "Juan Pérez"
 *                 salary:
 *                   type: number
 *                   example: 32000
 *       404:
 *         description: Empleado no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.patch('/employees/:id', updateEmployees)
// Eliminar un empleado
/**
 * @openapi
 * /api/employees/{id}:
 *   delete:
 *     summary: Elimina un empleado por su ID
 *     tags:
 *       - Empleados
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID del empleado a eliminar
 *         required: true
 *         schema:
 *           type: string
 *           example: "1"
 *     responses:
 *       204:
 *         description: El empleado ha sido eliminado exitosamente
 *       404:
 *         description: Empleado no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.delete('/employees/:id', deleteEmployees)

export default router

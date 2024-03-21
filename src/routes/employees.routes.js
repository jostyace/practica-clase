import { Router } from 'express'
import { createEmployees, deleteEmployees, getEmployees, updateEmployees, getEmployee } from '../controllers/employees.controllers'

const router = Router()

router.get('/employees', getEmployees)
router.get('/employees/:id', getEmployee)
router.post('/employees', createEmployees)
router.patch('/employees', updateEmployees)
router.delete('/employees/:id', deleteEmployees)

export default router

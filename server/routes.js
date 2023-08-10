import express from 'express'
import { sendReservationMail } from './controllers/sendMail.js'

const router = express.Router()

router.post('/send-email', sendReservationMail)

export default router

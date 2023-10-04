const express = require('express')
const { dangKi, dangNhap } = require('../controllers/authControllers')
const authRouter = express.Router()

authRouter.post('/dangKi', dangKi)

authRouter.post('/dangNhap', dangNhap)

module.exports = authRouter
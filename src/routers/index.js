const express = require('express')
const authRouter = require('./authRouter')
const hinhAnhRouter = require('./hinhAnhRouter')
const nguoiDungRouter = require('./nguoiDungRouter')
const rootRouter = express.Router()

rootRouter.use('/nguoiDung', nguoiDungRouter)

rootRouter.use('/hinhAnh', hinhAnhRouter)

rootRouter.use('/auth', authRouter)




module.exports = rootRouter

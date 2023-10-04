const express = require('express')
const { getDanhSachNguoiDung, getNguoiDungId, getDanhSachAnhDaLuuNguoiDungId, getDanhSachAnhDaTaoNguoiDungId, putNguoiDungId } = require('../controllers/nguoiDungControllers')
const { verifyToken } = require('../middlewares/auth')
const nguoiDungRouter = express.Router()

nguoiDungRouter.get('/getDanhSachNguoiDung', verifyToken, getDanhSachNguoiDung)

nguoiDungRouter.get('/getNguoiDungId/:nguoi_dung_id', verifyToken, getNguoiDungId)

nguoiDungRouter.get('/getDanhSachAnhDaLuuNguoiDungId/:nguoi_dung_id', verifyToken, getDanhSachAnhDaLuuNguoiDungId)

nguoiDungRouter.get('/getDanhSachAnhDaTaoNguoiDungId/:nguoi_dung_id', verifyToken, getDanhSachAnhDaTaoNguoiDungId)

nguoiDungRouter.put('/putNguoiDungId/:nguoi_dung_id', verifyToken, putNguoiDungId)




module.exports = nguoiDungRouter

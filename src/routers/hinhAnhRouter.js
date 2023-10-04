const express = require('express')
const { getDanhSachHinhAnh, getHinhAnhId, timHinhAnhTheoTen, getBinhLuanHinhAnhId, getLuuHinhAnhId, postBinhLuanAnh, deleteHinhAnhId, postHinhAnh, postLuuHuyLuuAnh } = require('../controllers/hinhAnhControllers')
const { verifyToken } = require('../middlewares/auth')
const upload = require('../middlewares/upload')
const hinhAnhRouter = express.Router()

hinhAnhRouter.get('/getDanhSachHinhAnh', getDanhSachHinhAnh)

hinhAnhRouter.get('/timHinhAnhTheoTen', timHinhAnhTheoTen)

hinhAnhRouter.get('/getHinhAnhId/:hinh_id', getHinhAnhId)

hinhAnhRouter.get('/getBinhLuanHinhAnhId/:hinh_id', verifyToken, getBinhLuanHinhAnhId)

hinhAnhRouter.get('/getLuuHinhAnhId/:hinh_id', verifyToken, getLuuHinhAnhId)

hinhAnhRouter.post('/postBinhLuanAnh', verifyToken, postBinhLuanAnh)

hinhAnhRouter.post('/postLuuHuyLuuAnh', verifyToken, postLuuHuyLuuAnh)

hinhAnhRouter.delete('/deleteHinhAnhId/:hinh_id', verifyToken, deleteHinhAnhId)

hinhAnhRouter.post('/postHinhAnh', verifyToken, upload.single('fileUpload'), postHinhAnh)



module.exports = hinhAnhRouter


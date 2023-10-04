const config = require("../configs/config")
const { errCode, successCode, failCode } = require("../configs/response")
const models = require("../models")
const fs = require('fs')

const getDanhSachNguoiDung = async (req, res) => {
   try {
      const data = await models.nguoi_dung.findAll()
      successCode(res, data, 'Lấy người dùng thành công')
   } catch (err) {
      errCode(res, 'Lỗi Backend')
   }
}

const getNguoiDungId = async (req, res) => {
   try {
      const { nguoi_dung_id } = req.params
      const data = await models.nguoi_dung.findOne({
         where: { nguoi_dung_id }
      })
      if (data) {
         successCode(res, data, 'Lấy người dùng thành công')
      } else {
         failCode(res, '', 'Người dùng không tồn tại')
      }
   } catch (err) {
      errCode(res, 'Lỗi Backend')
   }
}

const getDanhSachAnhDaLuuNguoiDungId = async (req, res) => {
   try {
      const { nguoi_dung_id } = req.params
      const data = await models.nguoi_dung.findOne({
         where: { nguoi_dung_id },
         include: 'hinh_anh_da_luu'
      })
      if (data) {
         data.hinh_anh_da_luu.forEach(hinh => {
            const checkDuongDan = fs.existsSync(process.cwd() + hinh.duong_dan)
            if (checkDuongDan) {
               hinh.duong_dan = `${config.DOMAIN}${hinh.duong_dan}`
            }
         })
         successCode(res, data, 'Lấy người dùng thành công')
      } else {
         failCode(res, '', 'Người dùng không tồn tại')
      }
   } catch (err) {
      errCode(res, 'Lỗi Backend')
   }
}

const getDanhSachAnhDaTaoNguoiDungId = async (req, res) => {
   try {
      const { nguoi_dung_id } = req.params
      const data = await models.nguoi_dung.findOne({
         where: { nguoi_dung_id },
         include: 'hinh_anh_da_tao'
      })
      if (data) {
         data.hinh_anh_da_tao.forEach(hinh => {
            const checkDuongDan = fs.existsSync(process.cwd() + hinh.duong_dan)
            if (checkDuongDan) {
               hinh.duong_dan = `${config.DOMAIN}${hinh.duong_dan}`
            }
         })
         successCode(res, data, 'Lấy người dùng thành công')
      } else {
         failCode(res, '', 'Người dùng không tồn tại')
      }
   } catch (err) {
      errCode(res, 'Lỗi Backend')
   }
}

const putNguoiDungId = async (req, res) => {
   try {
      const { nguoi_dung_id } = req.params
      const { email, mat_khau, ho_ten, tuoi } = req.body
      const data = await models.nguoi_dung.findOne({
         where: { nguoi_dung_id }
      })
      if (data) {
         const checkMail = await models.nguoi_dung.findOne({
            where: { email }
         })
         if (!checkMail || data.email === email) {
            await models.nguoi_dung.update({ email, mat_khau, ho_ten, tuoi }, { where: { nguoi_dung_id } })
            const newdata = await models.nguoi_dung.findOne({
               where: { nguoi_dung_id }
            })
            successCode(res, newdata, 'Cập nhật người dùng thành công')
         } else {
            failCode(res, '', 'Email đã tồn tại')
         }
      } else {
         failCode(res, '', 'Người dùng không tồn tại')
      }
   } catch (err) {
      errCode(res, 'Lỗi Backend')
   }
}




module.exports = { getDanhSachNguoiDung, getNguoiDungId, getDanhSachAnhDaLuuNguoiDungId, getDanhSachAnhDaTaoNguoiDungId, putNguoiDungId }
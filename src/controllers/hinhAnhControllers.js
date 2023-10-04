const config = require("../configs/config")
const { errCode, successCode, failCode } = require("../configs/response")
const models = require("../models")
const fs = require('fs')

const getDanhSachHinhAnh = async (req, res) => {
   try {
      const data = await models.hinh_anh.findAll()
      data.forEach(hinh => {
         const checkDuongDan = fs.existsSync(process.cwd() + hinh.duong_dan)
         if (checkDuongDan) {
            hinh.duong_dan = `${config.DOMAIN}${hinh.duong_dan}`
         }
      })
      successCode(res, data, 'Lấy hình ảnh thành công')
   } catch (err) {
      errCode(res, 'Lỗi Backend')
   }
}

const Op = require('sequelize').Op
const timHinhAnhTheoTen = async (req, res) => {
   try {
      const { tenHinh } = req.query
      const data = await models.hinh_anh.findAll({
         where: { ten_hinh: { [Op.like]: '%' + tenHinh + '%' } }
      })
      data.forEach(hinh => {
         const checkDuongDan = fs.existsSync(process.cwd() + hinh.duong_dan)
         if (checkDuongDan) {
            hinh.duong_dan = `${config.DOMAIN}${hinh.duong_dan}`
         }
      })
      successCode(res, data, 'Lấy hình ảnh thành công')
   } catch (err) {
      errCode(res, 'Lỗi Backend')
   }
}

const getHinhAnhId = async (req, res) => {
   try {
      const { hinh_id } = req.params
      const data = await models.hinh_anh.findOne({
         where: { hinh_id },
         include: 'nguoi_dung'
      })
      if (data) {
         const checkDuongDan = fs.existsSync(process.cwd() + data.duong_dan)
         if (checkDuongDan) {
            data.duong_dan = `${config.DOMAIN}${data.duong_dan}`
         }
         successCode(res, data, 'Lấy hình ảnh thành công')
      } else {
         failCode(res, '', 'Hình ảnh không tồn tại')
      }
   } catch (err) {
      errCode(res, 'Lỗi Backend')
   }
}

const getBinhLuanHinhAnhId = async (req, res) => {
   try {
      const { hinh_id } = req.params
      const data = await models.hinh_anh.findOne({
         where: { hinh_id },
         include: 'nguoi_dung_binh_luan'
      })
      if (data) {
         const checkDuongDan = fs.existsSync(process.cwd() + data.duong_dan)
         if (checkDuongDan) {
            data.duong_dan = `${config.DOMAIN}${data.duong_dan}`
         }
         successCode(res, data, 'Lấy hình ảnh thành công')
      } else {
         failCode(res, '', 'Hình ảnh không tồn tại')
      }
   } catch (err) {
      errCode(res, 'Lỗi Backend')
   }
}

const getLuuHinhAnhId = async (req, res) => {
   try {
      const { hinh_id } = req.params
      const data = await models.hinh_anh.findOne({
         where: { hinh_id },
         include: 'nguoi_dung_luu_anh'
      })
      if (data) {
         const checkDuongDan = fs.existsSync(process.cwd() + data.duong_dan)
         if (checkDuongDan) {
            data.duong_dan = `${config.DOMAIN}${data.duong_dan}`
         }
         successCode(res, data, 'Lấy hình ảnh thành công')
      } else {
         failCode(res, '', 'Hình ảnh không tồn tại')
      }
   } catch (err) {
      errCode(res, 'Lỗi Backend')
   }
}

const postBinhLuanAnh = async (req, res) => {
   try {
      const { nguoi_dung_id, hinh_id, noi_dung, ngay_binh_luan } = req.body
      const data = await models.binh_luan.findOne({
         where: { nguoi_dung_id, hinh_id }
      })

      if (data) {
         await models.binh_luan.update({ nguoi_dung_id, hinh_id, noi_dung, ngay_binh_luan }, { where: { nguoi_dung_id, hinh_id } })
         const newdata = await models.binh_luan.findOne({
            where: { nguoi_dung_id, hinh_id }
         })
         successCode(res, newdata, 'Bình luận thành công')
      } else {
         await models.binh_luan.create({ nguoi_dung_id, hinh_id, noi_dung, ngay_binh_luan })
         const newdata = await models.binh_luan.findOne({
            where: { nguoi_dung_id, hinh_id }
         })
         successCode(res, newdata, 'Bình luận thành công')
      }
   } catch (err) {
      errCode(res, 'Lỗi Backend')
   }
}

const postLuuHuyLuuAnh = async (req, res) => {
   try {
      const { nguoi_dung_id, hinh_id, ngay_luu } = req.body
      const data = await models.luu_anh.findOne({
         where: { nguoi_dung_id, hinh_id }
      })

      if (data) {
         data.destroy()
         successCode(res, '', 'Huỷ lưu thành công')
      } else {
         const newdata = await models.luu_anh.create({ nguoi_dung_id, hinh_id, ngay_luu })
         successCode(res, newdata, 'Lưu thành công')
      }
   } catch (err) {
      errCode(res, 'Lỗi Backend')
   }
}

const postHinhAnh = async (req, res) => {
   try {
      const { ten_hinh, mo_ta, nguoi_dung_id } = req.body
      const { size, mimetype, filename } = req.file

      if (mimetype == 'image/jpg' || mimetype == 'image/jpeg' || mimetype == 'image/gif' || mimetype == 'image/png') {
         if (size < 2000000) {
            const data = await models.hinh_anh.create({ ten_hinh, duong_dan: `/public/images/${filename}`, mo_ta, nguoi_dung_id })
            data.duong_dan = `${config.DOMAIN}${data.duong_dan}`
            successCode(res, data, 'Thêm ảnh thành công')
         } else {
            fs.unlinkSync(process.cwd() + '/public/images/' + filename)
            failCode(res, '', 'Dung lượng ảnh phải nhỏ hơn 2MB')
         }
      } else {
         fs.unlinkSync(process.cwd() + '/public/images/' + filename)
         failCode(res, '', 'Định dạng ảnh phải là jpg, jpeg, png, gif')
      }
   } catch (err) {
      errCode(res, 'Lỗi Backend')
   }
}

const deleteHinhAnhId = async (req, res) => {
   try {
      const { hinh_id } = req.params
      const data = await models.hinh_anh.findOne({
         where: { hinh_id: +hinh_id }
      })
      if (data) {
         const duongDan = data.duong_dan
         const checkDuongDan = fs.existsSync(process.cwd() + duongDan)
         if (checkDuongDan) {
            fs.unlinkSync(process.cwd() + duongDan)
         }
         await data.destroy()
         successCode(res, '', 'Xoá thành công')
      } else {
         failCode(res, '', 'Hình ảnh không tồn tại')
      }
   } catch (err) {
      errCode(res, 'Lỗi Backend')
   }
}



module.exports = { getDanhSachHinhAnh, getHinhAnhId, timHinhAnhTheoTen, getBinhLuanHinhAnhId, getLuuHinhAnhId, postBinhLuanAnh, postLuuHuyLuuAnh, deleteHinhAnhId, postHinhAnh }
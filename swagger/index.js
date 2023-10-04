// ------------------------AUTH----------------------
/**
 * @swagger
 * /api/auth/dangKi:
 *  post:
 *      description: responses
 *      tags: [auth]
 *      parameters:
 *      - in: body
 *        name: user
 *        schema:
 *           type: object
 *           properties:
 *             email:
 *               type: string
 *             mat_khau:
 *               type: string
 *             ho_ten:
 *               type: string
 *             tuoi:
 *               type: number
 *      responses:
 *          200: 
 *              description: success   
 */
/**
 * @swagger
 * /api/auth/dangNhap:
 *  post:
 *      description: responses
 *      tags: [auth]
 *      parameters:
 *      - in: body
 *        name: taiKhoan
 *        schema:
 *           type: object
 *           properties:
 *             email:
 *               type: string
 *             mat_khau:
 *               type: string
 *      responses:
 *          200: 
 *              description: success   
 */

// ------------------------NGUOI DUNG----------------------
/**
 * @swagger
 * /api/nguoiDung/getDanhSachNguoiDung:
 *  get:
 *      description: responses
 *      tags: [NguoiDung]
 *      parameters:
 *      - in: header
 *        name: token
 *        type: string
 *        required: true
 *      responses:
 *          200: 
 *              description: success   
 */
/**
 * @swagger
 * /api/nguoiDung/getNguoiDungId/{nguoi_dung_id}:
 *  get:
 *      description: responses
 *      tags: [NguoiDung]
 *      parameters:
 *      - in: path
 *        name: nguoi_dung_id
 *      - in: header
 *        name: token
 *        type: string
 *        required: true
 *      responses:
 *          200: 
 *              description: success   
 */
/**
 * @swagger
 * /api/nguoiDung/getDanhSachAnhDaLuuNguoiDungId/{nguoi_dung_id}:
 *  get:
 *      description: responses
 *      tags: [NguoiDung]
 *      parameters:
 *      - in: path
 *        name: nguoi_dung_id
 *      - in: header
 *        name: token
 *        type: string
 *        required: true
 *      responses:
 *          200: 
 *              description: success   
 */
/**
 * @swagger
 * /api/nguoiDung/getDanhSachAnhDaTaoNguoiDungId/{nguoi_dung_id}:
 *  get:
 *      description: responses
 *      tags: [NguoiDung]
 *      parameters:
 *      - in: path
 *        name: nguoi_dung_id
 *      - in: header
 *        name: token
 *        type: string
 *        required: true
 *      responses:
 *          200: 
 *              description: success   
 */
/**
 * @swagger
 * /api/nguoiDung/putNguoiDungId/{nguoi_dung_id}:
 *  put:
 *      description: responses
 *      tags: [NguoiDung]
 *      parameters:
 *      - in: path
 *        name: nguoi_dung_id
 *      - in: body
 *        name: user
 *        schema:
 *           type: object
 *           properties:
 *             email:
 *               type: string
 *             mat_khau:
 *               type: string
 *             ho_ten:
 *               type: string
 *             tuoi:
 *               type: number
 *      - in: header
 *        name: token
 *        type: string
 *        required: true
 *      responses:
 *          200: 
 *              description: success   
 */

// ------------------------HINH ANH----------------------
/**
 * @swagger
 * /api/hinhAnh/getDanhSachHinhAnh:
 *  get:
 *      description: responses
 *      tags: [HinhAnh]
 *      responses:
 *          200: 
 *              description: success   
 */
/**
 * @swagger
 * /api/hinhAnh/timHinhAnhTheoTen:
 *  get:
 *      description: responses
 *      tags: [HinhAnh]
 *      parameters:
 *      - in: query
 *        name: tenHinh
 *      responses:
 *          200: 
 *              description: success   
 */
/**
 * @swagger
 * /api/hinhAnh/getHinhAnhId/{hinh_id}:
 *  get:
 *      description: responses
 *      tags: [HinhAnh]
 *      parameters:
 *      - in: path
 *        name: hinh_id
 *      responses:
 *          200: 
 *              description: success   
 */
/**
 * @swagger
 * /api/hinhAnh/getBinhLuanHinhAnhId/{hinh_id}:
 *  get:
 *      description: responses
 *      tags: [HinhAnh]
 *      parameters:
 *      - in: path
 *        name: hinh_id
 *      - in: header
 *        name: token
 *        type: string
 *        required: true
 *      responses:
 *          200: 
 *              description: success   
 */
/**
 * @swagger
 * /api/hinhAnh/getLuuHinhAnhId/{hinh_id}:
 *  get:
 *      description: responses
 *      tags: [HinhAnh]
 *      parameters:
 *      - in: path
 *        name: hinh_id
 *      - in: header
 *        name: token
 *        type: string
 *        required: true
 *      responses:
 *          200: 
 *              description: success   
 */
/**
 * @swagger
 * /api/hinhAnh/postBinhLuanAnh:
 *  post:
 *      description: responses
 *      tags: [HinhAnh]
 *      parameters:
 *      - in: body
 *        name: binhLuan
 *        schema:
 *           type: object
 *           properties:
 *             nguoi_dung_id:
 *               type: number
 *             hinh_id:
 *               type: number
 *             noi_dung:
 *               type: string
 *             ngay_binh_luan:
 *               type: string
 *      - in: header
 *        name: token
 *        type: string
 *        required: true
 *      responses:
 *          200: 
 *              description: success   
 */
/**
 * @swagger
 * /api/hinhAnh/postLuuHuyLuuAnh:
 *  post:
 *      description: responses
 *      tags: [HinhAnh]
 *      parameters:
 *      - in: body
 *        name: luuHinh
 *        schema:
 *           type: object
 *           properties:
 *             nguoi_dung_id:
 *               type: number
 *             hinh_id:
 *               type: number
 *             ngay_luu:
 *               type: string
 *      - in: header
 *        name: token
 *        type: string
 *        required: true
 *      responses:
 *          200: 
 *              description: success   
 */
/**
 * @swagger
 * /api/hinhAnh/postHinhAnh:
 *  post:
 *      description: responses
 *      tags: [HinhAnh]
 *      parameters:
 *      - in: formData
 *        name: fileUpload
 *        type: file 
 *      - in: formData
 *        name: ten_hinh
 *        type: string
 *      - in: formData
 *        name: mo_ta
 *        type: string
 *      - in: formData
 *        name: nguoi_dung_id
 *        type: number
 *      - in: header
 *        name: token
 *        type: string
 *        required: true
 *      responses:
 *          200: 
 *              description: success   
 */
/**
 * @swagger
 * /api/hinhAnh/deleteHinhAnhId/{hinh_id}:
 *  delete:
 *      description: responses
 *      tags: [HinhAnh]
 *      parameters:
 *      - in: path
 *        name: hinh_id
 *      - in: header
 *        name: token
 *        type: string
 *        required: true
 *      responses:
 *          200: 
 *              description: success   
 */








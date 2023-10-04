const { failCode } = require("../configs/response")
const jwt = require('jsonwebtoken')
const key = '1234'

const createToken = (data) => {
   return jwt.sign({ data }, key, { algorithm: 'HS256', expiresIn: '1y' })
}

const verifyToken = (req, res, next) => {
   try {
      const { token } = req.headers
      jwt.verify(token, key)
      next()
   } catch (err) {
      failCode(res, err.message, 'Token không hợp lệ')
   }
}

module.exports = { createToken, verifyToken }
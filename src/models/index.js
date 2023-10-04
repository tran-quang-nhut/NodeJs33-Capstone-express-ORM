const { Sequelize } = require('sequelize')
const config = require('../configs/config')
const sequelize = new Sequelize(config.DB_NAME, config.DB_USER, config.DB_PASS, {
   host: config.DB_HOST,
   dialect: config.DB_DIALECT,
   port: config.DB_PORT
})

const initModels = require('./init-models')
const models = initModels(sequelize)

module.exports = models

// try{
//    sequelize.authenticate()
//    console.log('kết nối data ok')
// }catch(err){
//    console.log('lỗi')
// }
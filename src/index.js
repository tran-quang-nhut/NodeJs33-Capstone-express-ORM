const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static("."))
app.listen(8080, () => console.log('start server BE port 8080'))

const rootRouter = require('./routers')
app.use('/api', rootRouter)


const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const options = {
   definition: {
      info: {
         title: "photo-app",
         version: "1.0.0"
      }
   },
   apis: ["swagger/index.js"]
}

const specs = swaggerJsDoc(options);

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(specs));